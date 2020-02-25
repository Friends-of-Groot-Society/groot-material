import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Greeting } from '../../../models/Greeting';
 
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.greeting();

  }
 
  greeting() {
    // let result: Promise<any> = this.http.get<any>("https://api.myjson.com/bins/1cxyyj").toPromise();

    // result.then(
    //   (res) =>{
    //     document.getElementById("info").innerHTML = res.greeting;
    //     console.log(res);
    //   }
    // );

    this.getGreeting().then(
      (res) => {
        document.getElementById("info").innerHTML = res.greeting;
        console.log(res);
      }, (rej) => {
        console.log(rej);
      }
    );


  } 
  getGreeting(): Promise<Greeting> {

    let promise: Promise<Greeting> = this.http.get<Greeting>("https://api.myjson.com/bins/15mn7g").toPromise(); 

    return promise;
  }



}
