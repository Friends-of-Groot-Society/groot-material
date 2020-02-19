import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/Book';
import { Media } from '../models/Media';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
 

  constructor(private http :HttpClient) { }
  getMedias() :Observable<Media[]> {
    return this.http.get<Media[]>("http://35.173.4.147:8080/api/media/"); 
  // return this.http.get<Media[]>("http://localhost:8080/api/media/"); 
  } 
 
 
}
