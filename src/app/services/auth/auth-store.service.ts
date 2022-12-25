import { Injectable } from "@angular/core";
import { throwError, BehaviorSubject, Observable } from "rxjs";
import { User } from '../../models/User';
import { Router } from '@angular/router';
import { map, shareReplay, catchError, tap } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "src/environments/environment";

export const AUTH_DATA = "AUTH_DATA";
export const TOKEN_ID = 'tokenId'

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
export class AuthStore {
    private uSubject$ = new BehaviorSubject<User>(null);
    user$: Observable<User> = this.uSubject$.asObservable();

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
    register({ email, password, fname, lname }) {
        sessionStorage.setItem("fname", fname);
        sessionStorage.setItem("lname", lname);
        sessionStorage.setItem("email", email);
        return this.httpClient
            .post<AuthResponseData>(
                `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${environment.FIREBASE_GROOT} `,
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
            )
    }

    login(email: string, password: string): Observable<AuthResponseData> {
        return this.httpClient
            .post<AuthResponseData>(
                `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${environment.FIREBASE_GROOT}`,
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
        user.tokenId = token;

        this.uSubject$.next(user);
        localStorage.setItem('AUTH_DATA', JSON.stringify(user)); 
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
    logout() {
        this.uSubject$.next(null);
        localStorage.removeItem(AUTH_DATA);
    }
    public get currentUserValue(): User {
        console.log(this.uSubject$.value)
        return this.uSubject$.value;
      }
}