import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from '../../models/User';
import { map, shareReplay, tap } from 'rxjs/operators'
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { AdminAuthenticationService } from "./admin-authentication.service";
const AUTH_DATA = "auth_data";

@Injectable({
    providedIn: 'root'
})
export class AuthStore {
    private uSubject = new BehaviorSubject<User>(null);
   user$ : Observable<User> = this.uSubject.asObservable();

   isLoggedIn$: Observable<boolean>
   isLoggedOut$: Observable<boolean>

   constructor(private httpClient: HttpClient) {
      
    this.isLoggedIn$ = this.user$.pipe(map(user => !!user));
    this.isLoggedOut$ = this.isLoggedIn$.pipe(map(loggedIn => !loggedIn));

    const user = localStorage.getItem(AUTH_DATA);
    if (user) {
        this.uSubject.next(JSON.parse(user));
    }
   }
   
   login(email: string, password:string):Observable<User> {
    return this.httpClient.post<User>(`${environment.nft_url}/api/login/`, {email, password})
    .pipe(
        tap(user => {
            this.uSubject.next(user);
            user.password = "********";
            localStorage.setItem(AUTH_DATA, JSON.stringify(user));
        }),
        shareReplay()
    );
   }
   logout() {
    this.uSubject.next(null);
    localStorage.removeItem(AUTH_DATA);
   }
}