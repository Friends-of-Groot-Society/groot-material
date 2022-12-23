// import { API_URL } from './../app.constants';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject, Observable } from 'rxjs'; 
import { environment } from '../../../environments/environment';

import { User } from '../../models/User';
export const TOKEN_ID = 'tokenId'
export const USER_AUTH = 'USER_AUTH'

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
 /// NOTE!!! only file to use localStorage so that token is deleted on tab-close
  baseUrl:string;
  user = new BehaviorSubject<User>(null);
 
  constructor(private http: HttpClient, private router:Router) { 
    this.baseUrl = environment.nft_url; 
   }
   register({email, password,fname,lname}) {
     sessionStorage.setItem("fname",fname);
    sessionStorage.setItem("lname",lname);
    sessionStorage.setItem("email",email) 
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
      `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${environment.FIREBASE_GROOT}`,
        {
          email: email,
          password: password,
          returnSecureToken: true
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
      );
  }
   private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
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
    return throwError(errorMessage);
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

    this.user.next(user); 
    localStorage.setItem('USER_AUTH', JSON.stringify(user));

   }
  // executeAuthenticationService(adminName, password) {
  //   // Basic Authentication
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(adminName + ':' + password);
  //   let headers = new HttpHeaders({
  //       Authorization: basicAuthHeaderString
  //     })
  //   return this.http.get<BasicAuthBean>(
  //     `${this.baseUrl}/dailytech/login`,
  //     {headers}).pipe(
  //       map(
  //         data => {
  //           localStorage.setItem(AUTHENTICATED_USER, adminName);
  //           localStorage.setItem(TOKEN, basicAuthHeaderString);
  //           return data;
  //         }
  //       )
  //     );

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
    return localStorage.getItem(USER_AUTH)
  }
  getAuthenticatedToken() {
    if(this.getAuthenticatedUser())
      return localStorage.getItem(TOKEN_ID)
    else 
      return null;
  }

  isAdminLoggedIn() {
    let user = localStorage.getItem(USER_AUTH)
    return !(user === null)
  }
  
  isAdminLoggedOut() {
    let user = localStorage.getItem(USER_AUTH)
    return (user === null)
  }
  logout(){    this.user.next(null);
    this.router.navigate(['/']); 
    localStorage.removeItem(USER_AUTH)
    localStorage.removeItem(TOKEN_ID)
  }
 
}

export class BasicAuthBean{
  constructor(public message:string) { }
}
