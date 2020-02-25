import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/Book';
import { Media } from '../models/Media';
import { environment } from  '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  baseUrl:string;

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
 

  constructor(private http :HttpClient) { 

    this.baseUrl = environment.baseUrl;

    }
    
  getMedias() :Observable<Media[]> {
    return this.http.get<Media[]>(`${this.baseUrl}/api/media/`);  
  } 
 
 
}
