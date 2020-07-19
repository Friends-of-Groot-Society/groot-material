import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(    private http: HttpClient   ) { }

  search(data) {
    let params: HttpParams = new HttpParams();
    params = params.set('api-key', environment.apiKeyNYT);
    if (data.q !== undefined) {
      params = params.set('q', data.q);
    }
    if (data.begin_date !== undefined) {
       params = params.set('begin_date', data.begin_date);
    }
    if (data.end_date !== undefined) {
       params = params.set('end_date', data.end_date);
    }
    if (data.sort !== undefined) {
       params = params.set('sort', data.sort);
    }
    return this.http.get(`${environment.apiUrl}/search/v2/articlesearch.json`,{
      params 
    });
  }
  getArticles(section:string = 'home') {
    let params: HttpParams = new HttpParams();
    params = params.set('api-key', environment.apiKeyNYT);

  return this.http.get(`${environment.apiUrl}/topstories/v2/${section}.json`, {params });
  }
}
