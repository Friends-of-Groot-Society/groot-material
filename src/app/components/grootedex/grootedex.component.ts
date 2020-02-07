import { Component, OnInit } from '@angular/core';
import { Groot } from 'src/app/models/Groot';
import { GrootService } from 'src/app/services/groot.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grootedex',
  templateUrl: './grootedex.component.html',
  styleUrls: ['./grootedex.component.css']
})
export class GrootedexComponent implements OnInit {

  constructor(private grootService :GrootService) { }

  ngOnInit() {
    this.displayAllGroot();
  }

  grootList :Groot[] = [];  // :Groot[] = :Array:Groot
  allGroot :Observable<Groot[]> = this.grootService.getAllGroot();


  id :number;
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
      this.grootService.addGroot(new Groot(this.id, this.name, this.type)).subscribe(
        (response) => {
          console.log(response);
          let list = this.grootList.slice();
          list.push(response);
          this.grootList = list;
        },
        (response) => {
          console.log("Failed to add Groot");
          console.log(response);
        }
      );
    }
  }

  validateInputFields() {
    console.log(this.id);
    console.log(this.name);
    console.log(this.type);

    if(this.id == undefined ||
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

  validateFields(id :number, name :string, type :string) :string {

    this.validateInputFields();
    if(!this.validInputs)
      return this.validation;
    else {
      return "";
    }

  }

}
