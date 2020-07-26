import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../models/User';
import { catchError, map } from 'rxjs/operators';
import { environment } from  '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl:string;

  constructor(private httpService: HttpClient ) { 

    this.baseUrl = environment.baseUrl;
   
 } 
 
    register(user: User) {
      console.log("user "+`${this.baseUrl}/api/users/register`, user);
        return this.httpService.post(`${this.baseUrl}/api/users/register`, user);
    }

    delete(id: number) {
        return this.httpService.delete(`${this.baseUrl}/api/users/${id}`);
    }
    getUser(id: number): Observable<User> {
    return this.httpService.get<User>(`${this.baseUrl}/api/users/${id}`);
  }
  // public getUser(id: number): Observable<User> {
  //   return this.httpService.get<User>(`http://${this.baseUrl}/api/users/${id}`).pipe(
  //     map(data => new User().deserialize(data)),
  //     catchError(() => throwError('Oops! Member not found ...'))
  //   );
  // }
   getAllUsers(): Observable<User[]> {
    return this.httpService.get<User[]>(`${this.baseUrl}/api/users`);
  }
   
  // public getAllUsers(): Observable<User[]> {
  //   return this.httpService.get<User[]>(`http://${this.baseUrl}/api/users`).pipe(
  //     map(data => data.map(data => new User().deserialize(data)))
  //   );
  // }

}
