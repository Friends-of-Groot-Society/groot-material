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
   info:string = "";
  greeting() {
    let result: Promise<any> = this.http.get<any>("https://z3noflrq9b.execute-api.us-east-1.amazonaws.com/dev/posts").toPromise();

    result.then(
      (res) =>{
      
        console.log(res);
      }
    );

    // this.getGreeting().then(
    //   (res) => {
    //     document.getElementById("info").innerHTML = res.greeting;
    //     console.log(res);
    //   }, (res) => {
    //     console.log(rej);
    //   }
    // );


  } 
 


}
