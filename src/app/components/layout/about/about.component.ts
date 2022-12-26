import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {  Observable, map } from 'rxjs'; 
import { createHttpObservable } from 'src/app/utility/observable';
import { LoaderService } from '../loader/loader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [LoaderService]
})
export class AboutComponent implements OnInit {
  http$!: Observable<any[]>;
  data$!: Observable<any[]>; 
  web3$!: Observable<any[]>;
  constructor(private http: HttpClient) { }

  ngOnInit() {

   this.http$ = createHttpObservable("https://z3noflrq9b.execute-api.us-east-1.amazonaws.com/dev/posts");
    this.http$.subscribe(console.log);
    this.web3$ = this.http$
    .pipe(
      map(res => Object.values(res)
      .filter((res: any) => res.cat3 === "Musing Blockchain") 
      ));
}
  vision:string =``;
  about:string = ``;
   mission:string = `This website is designed for the web3 experimentation and development, 
   sponsored by the Friends of Groot Society, intended for fellow Groot fans in an web3 development environment. 
   <br />Find news, events, photos, and other Groot-related features in the groot society database. 
   Please feel free to Contact the Society for News and Updates!`;
   data: any = [];
 


}
