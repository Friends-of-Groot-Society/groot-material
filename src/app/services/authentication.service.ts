import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from '../models/User';


// @Injectable is a decorator that marks a class as a target for
// dependency injection. The class needs to have the HttpClient
// object injected into it. This class is a candidate for dependency
// injection because it is declared inside the AppModule's providers array.
@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  baseUrl: string;

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }


  public get currentUserValue(): User {
    console.log(this.currentUserSubject.value)
    return this.currentUserSubject.value;
  }

  getMemberAuth(email: string, password: string): Observable<User> {
    console.log("member "+ email + " Successfully logged in")
    return this.http.get<User>(`${this.baseUrl}/api/users/email/${email}`);
  }
  
  login(email, password) {
    return this.http.post<any>(`${this.baseUrl}/api/users/authenticate`, { email, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  loginEmail(email, password) {
    return this.http.post<any>(`${this.baseUrl}/api/users/authenticate/${email}`, { email})
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}
