import { Component, OnInit } from '@angular/core';
import { Groot } from 'src/app/models/Groot';
import { GrootService } from 'src/app/services/groot.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grootologue',
  templateUrl: './grootologue.component.html',
  styleUrls: ['./grootologue.component.css']
})
export class GrootologueComponent implements OnInit {

  constructor(private grootService :GrootService) { }

 getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


  ngOnInit() {   
    this.displayAllGroot();
  }

  grootList :Groot[] = [];  // :Groot[] = :Array:Groot
  allGroot :Observable<Groot[]> = this.grootService.getAllGroot();

  randomX : number= 1234;
  // id :number = 99;
  
  randomIsbn: number = 789;
  isbn = 'e4e8d3e0-3914-4458-bebf-49289477';
  author :string;
  title :string;
  name :string;
  type :string;

  validInputs :boolean = false;
  validation :string = "All 3 fields are required";


  displayAllGroot() {

    this.allGroot.subscribe(
      //function to execute when the Observable
      //receives information because the call is successful.
      (response) => {
        this.grootList = response;
        this.grootList.reverse();
        console.log(this.grootList);
      },
      //function to execute when the Observabler receives
      //incorrect/faulty information -> call is unsuccessful.
      (response) => {
        return "Sorry it failed";
      }
    );
  }

  addGroot() {
    this.validateInputFields();
    if(this.validInputs) {
       
      this.randomX++;
      this.randomX = this.getRandomInt(this.randomX);
      this.isbn = this.isbn + this.randomX;
      console.log("randomIsbn"+ this.isbn);

      this.grootService.addGroot(new Groot( this.isbn, this.author, this.title, this.name, this.type)).subscribe(
        (response) => {
          console.log(response);
          let list = this.grootList.slice();
          list.push(response);
          this.grootList = list;
          location.reload(true);
        },
        (response) => {
          console.log("Failed to add Groot");
          console.log(response);
        }
      );
    }
  }

  validateInputFields() {
    // console.log(this.id);
    // console.log(this.isbn);
    // console.log(this.author);
    // console.log(this.title);
    // console.log(this.name);
    // console.log(this.type);

    if(  
       this.author == undefined ||
       this.author == "" ||
       this.title == undefined ||
       this.title == "" ||
       this.name == undefined ||
       this.name == "" ||
       this.type == undefined ||
       this.type == "") {
      this.validInputs = false;
    }
    else {
      this.validInputs = true;
    }
  }

  validateFields( author :string, title :string, name :string, type :string) :string {

    this.validateInputFields();
    if(!this.validInputs)
      return this.validation;
    else {
      return "";
    }

  }

}
