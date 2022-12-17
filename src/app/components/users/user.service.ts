import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../../models/User';
import { catchError, map } from 'rxjs/operators';
import { environment } from  '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  local_url:string;

  constructor(private httpService: HttpClient ) { 

    this.local_url = environment.local_url;
   
 } 
 
    register(user: User) {
      console.log("user "+`${this.local_url}/api/users/register`, user);
        return this.httpService.post(`${this.local_url}/api/users/register`, user);
    }

    delete(id: string) {
        return this.httpService.delete(`${this.local_url}/api/users/${id}`);
    }
    getUser(id: string): Observable<User> {
    return this.httpService.get<User>(`${this.local_url}/api/users/${id}`);
  }
  // public getUser(id: number): Observable<User> {
  //   return this.httpService.get<User>(`http://${this.baseUrl}/api/users/${id}`).pipe(
  //     map(data => new User().deserialize(data)),
  //     catchError(() => throwError('Oops! Member not found ...'))
  //   );
  // }
   getAllUsers(): Observable<User[]> {
    return this.httpService.get<User[]>(`${this.local_url}/api/users`).pipe(
      map(data => data["data"])
    );
   }
   getAllUserChains(): Observable<User[]> {
    return this.httpService.get<User[]>(`${this.local_url}/api/users`).pipe(
      map(data => data["data"])
    );
  }
   
  // public getAllUsers(): Observable<User[]> {
  //   return this.httpService.get<User[]>(`http://${this.baseUrl}/api/users`).pipe(
  //     map(data => data.map(data => new User().deserialize(data)))
  //   );
  // }

}
