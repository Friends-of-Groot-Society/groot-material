// import { API_URL } from './../app.constants';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject, Observable } from 'rxjs'; 
import { environment } from '../../../environments/environment';

import { User } from '../../models/User';
export const TOKEN_ID = 'tokenId'
export const AUTH_ADMIN = 'AUTH_ADMIN' // extra auth to be JWT
export const AUTH_DATA = 'AUTH_DATA'
 

// https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
export interface AuthResponseData { 
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}
@Injectable({
  providedIn: 'root'
})  
export class AdminAuthenticationService { 
  baseUrl:string;
  private uAdminSubject$ = new BehaviorSubject<User>(null);
  adminUser$: Observable<User> = this.uAdminSubject$.asObservable();

  isAdminLoggedIn$: Observable<boolean>
  isAdminLoggedOut$: Observable<boolean>

 
  constructor(private http: HttpClient, private router:Router) { 
    this.baseUrl = environment.nft_url; 

    this.isAdminLoggedIn$ = this.adminUser$.pipe(map(user => !!user));
    this.isAdminLoggedOut$ = this.isAdminLoggedIn$.pipe(map(loggedIn => !loggedIn));

   }
   register({email, password,fname,lname}) {
     localStorage.setItem("fname",fname);
    localStorage.setItem("lname",lname);
    localStorage.setItem("email",email) 
    return this.http
        .post<AuthResponseData>(
          `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${environment.FIREBASE_GROOT} `,
          { email: email,
          password: password,
        returnSecureToken:true
      }
        )
        .pipe(
          catchError(this.handleError),
          tap(resData => {
            this.executeAuthenticationService(
              resData.email,
              resData.localId,
              resData.idToken 
            );
          })
        )
   }

   login(email: string, password: string)  {
    return this.http
      .post<AuthResponseData>(
      `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${environment.FIREBASE_GROOT}`,
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
      .pipe(
        catchError(this.handleError),
        tap(resData => { 
        localStorage.setItem('email', resData.email); 
        localStorage.setItem('token', resData.idToken);   
   }),
        tap(resData => {
          this.executeAuthenticationService(
            resData.email,
            resData.localId,
            resData.idToken 
          );
        })
      );
  }
   private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(() => console.log(errorMessage));
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
    }
    return throwError(() => console.log(errorMessage));
  }

   executeAuthenticationService(
    email:string,
    userId:string,
    token:string 
   ) {    
    const user = new User();
    user.email = email;
    user.userId = userId;
    user.tokenId = token; 

    this.uAdminSubject$.next(user); 
    localStorage.setItem('AUTH_ADMIN', JSON.stringify(user));
    localStorage.setItem('AUTH_DATA', JSON.stringify(user));

   }

  // executeAuthJwtService(username, password) {
  //   return this.http.post<any>(
  //       `${this.baseUrl}/authenticate`,{
  //         username,
  //         password
  //       }).pipe(
  //         map(
  //           data => {
  //             localStorage.setItem(AUTHENTICATED_USER, username);
  //             localStorage.setItem(TOKEN, `Bearer ${data.token}`);
  //             return data;
  //           }
  //         )
  //       ); 
  // }

  getAuthenticatedUser() {
    return localStorage.getItem(AUTH_ADMIN)
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser())
      return localStorage.getItem(TOKEN_ID)
    else 
      return null;
  }
// not for authing in/out, but for admin privileges
  isAdminLoggedIn() { 
    let user = localStorage.getItem(AUTH_ADMIN)
    return !(user === null)
  }
  
// not for authing in/out, but for admin privileges
  isAdminLoggedOut() {
    let user = localStorage.getItem(AUTH_ADMIN)
    return (user === null)
  }
  logout(){     
    this.uAdminSubject$.next(null);
    this.router.navigate(['/']); 
    localStorage.removeItem('AUTH_ADMIN')
    localStorage.removeItem('AUTH_DATA')
    localStorage.removeItem(TOKEN_ID)
  } 
}
 
