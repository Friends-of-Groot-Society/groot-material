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
 
  public getUser(id: number): Observable<User> {
    return this.httpService.get<User>(`http://${this.baseUrl}:8080/api/users/${id}`);
  }
  // public getUser(id: number): Observable<User> {
  //   return this.httpService.get<User>(`http://${this.baseUrl}:8080/api/users/${id}`).pipe(
  //     map(data => new User().deserialize(data)),
  //     catchError(() => throwError('Oops! Member not found ...'))
  //   );
  // }
 public getAllUsers(): Observable<User[]> {
    return this.httpService.get<User[]>(`http://${this.baseUrl}:8080/api/users`);
  }
   
  // public getAllUsers(): Observable<User[]> {
  //   return this.httpService.get<User[]>(`http://${this.baseUrl}:8080/api/users`).pipe(
  //     map(data => data.map(data => new User().deserialize(data)))
  //   );
  // }

}
