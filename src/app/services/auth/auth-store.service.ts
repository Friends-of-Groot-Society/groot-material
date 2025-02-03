import { Injectable } from "@angular/core";
import { throwError, BehaviorSubject, Observable } from "rxjs";
import { User } from '../../models/User';
import { Router } from '@angular/router';
import { map, shareReplay, catchError, tap } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Address } from "src/app/models/Address";

export const AUTH_DATA = "AUTH_DATA";
export const ID_TOKEN = 'idToken'

// https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
export interface FireBaseAuthResponseData {
    kind?: string;
    idToken?: string;
    email?: string;
    refreshToken?: string;
    expiresIn?: string;
    localId?: string;
    registered?: boolean;
    
}
/*
*displayName  email :  "thomas1.maestas@gmail.com"
expiresIn :  "3600"
idToken :  "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFlOTczZWUwZTE2ZjdlZWY0ZjkyMWQ1MGRjNjFkNzBiMmVmZWZjMTkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZnJpZW5kcy1vZi1ncm9vdCIsImF1ZCI6ImZyaWVuZHMtb2YtZ3Jvb3QiLCJhdXRoX3RpbWUiOjE2NzkyNjUxNjksInVzZXJfaWQiOiJKU2pzNzFLWGtvT0ZBSWN2YkVEUDN0Q0JjZDcyIiwic3ViIjoiSlNqczcxS1hrb09GQUljdmJFRFAzdENCY2Q3MiIsImlhdCI6MTY3OTI2NTE2OSwiZXhwIjoxNjc5MjY4NzY5LCJlbWFpbCI6InRob21hc20xLm1hZXN0YXNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRob21hc20xLm1hZXN0YXNAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.swtfv1IyLhqWPh_sVTlQUy09PGYnn9vtObttPhq0ts31pmC_UUsXPI0ROu6U988FN3Zfcudwia9NBXMUImNy2oXrQspocRXhdkhX2joKLejwA3IBw-Wv4roZvt7NJjbslzbcfJZBhQG_R5C4zwXAPSeq52Bkte81DqKQeZeJ5vONEKvyTdRCLIhm6ajkV2PlpheG4XXXelaBQSgKdkroSkA7h4m7BDFpm66UboXa1TCpSBY1G4dupauxL_i0sWa39twOpADWfKYKzSI8btL1ihFcILlKAetX_BupSLUpwQZqW9cxRHcHsfBYQJJblo2NLwcmv_eorWE1tM-7MtEfmA"
kind :  "identitytoolkit#VerifyPasswordResponse"
localId :  "JSjs71KXkoOFAIcvbEDP3tCBcd72"
refreshToken :  "APJWN8dCHcFTdGRJIUVrhr3i8qlPYpAI_NGKATFhoI42AOEJXcMaGJl8rJk6G66kbIqTH-OnlLtbKfblDbQXFIi4twZAJ_NQzOnjCr9RNt8EpduUySu7b_s8dcQSZCTLwr54Xni_BlJEau4Q82OZ6A--cWQXcSzWLs6YgVJ9nZdn09RPaguFbpZLXL_O-qpxd840ndCSQmcrG7aj6kdARSTttnIenmHG-b5DHFL6fUF1HxTxpzDv9nc"
registered :  true
*/
export interface GrootAuth extends FireBaseAuthResponseData {
    idToken?: string;
    userId?:string;
    username: string;
    lastName?: string;
    firstName?: string;
    groups?:number;
    userType?: number;
    email?: string; 
    phone?: string;
    cusUrl?: string;
    photoPath?: string;
    userGroup?: string;
    isActive?: number; // 0 = inactive, 1 = active
    groupType?: string; 
    id?: number;
    addresses?: Address[];  
}
@Injectable({
    providedIn: 'root'
})
export class AuthStore {
    setUser(user: GrootAuth) {
      throw new Error('Method not implemented.');
    }
    private uSubject$ = new BehaviorSubject<User>(null);
    user$: Observable<User> = this.uSubject$.asObservable();
    email:string = localStorage.getItem('email'); 

    isLoggedIn$: Observable<boolean>
    isLoggedOut$: Observable<boolean>

    constructor(private router: Router, private httpClient: HttpClient) {

        this.isLoggedIn$ = this.user$.pipe(map(user => !!user));
        this.isLoggedOut$ = this.isLoggedIn$.pipe(map(loggedIn => !loggedIn));

        const user = localStorage.getItem(AUTH_DATA);
        if (user) {
            this.uSubject$.next(JSON.parse(user));
        }
    }
    register({ email, password, firstName, lastName }) {
        localStorage.setItem('email',  email ); 
        localStorage.setItem('firstName', firstName );
       localStorage.setItem('lastName',  lastName );
        return this.httpClient
            .post<GrootAuth>( // AuthResponseData
                `${environment.nft_url}/users/register`,                 {
                    email: email,
                    password: password, 
                    firstName: firstName,
                    lastName: lastName
                }
                )
                .pipe(
                    tap(resData => {
                        this.executeAuthenticationService(
                            resData.email,
                            resData.localId,
                            resData.idToken
                        );
                    })
                )
            }

    login(email: string, password: string): Observable<GrootAuth> {
        localStorage.setItem('email',  email ); 
        return this.httpClient
            .post<GrootAuth>(
                `${environment.nft_url}/users/login`,
                  {
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
            .pipe(
                catchError(this.handleError),
                tap(resData => {
                    this.executeAuthenticationService(
                        resData.email,
                        resData.localId,
                        resData.idToken
                    );
                })
                // tap(user => {
                //     this.uSubject.next(user);
                //     user.password = "********";
                //     localStorage.setItem(AUTH_DATA, JSON.stringify(user));
                // }),
                // shareReplay()
            );
    }
    
    executeAuthenticationService(
        email: string,
        userId: string,
        token: string
    ) { 
        const user = new User();
        user.email = email;
        user.userId = userId;
        user.idToken = token;

        this.uSubject$.next(user);
        user.firstName = localStorage.getItem('firstName');
        user.lastName = localStorage.getItem('lastName');
        localStorage.setItem('AUTH_DATA', JSON.stringify(user)); 
        localStorage.setItem('idToken', token);
        localStorage.setItem('userId', userId); 
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
    getEmailId(){
        let email = localStorage.getItem('email'); 
        return this.email;
    }

    logout() {
        this.uSubject$.next(null);
        localStorage.removeItem(AUTH_DATA);
    }
    public get currentUserValue(): User {
        console.log(this.uSubject$.value)
        return this.uSubject$.value;
      }
}