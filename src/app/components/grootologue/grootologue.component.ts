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

  constructor(private grootService: GrootService) { }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  ngOnInit() {
    this.displayAllGroot();
  }

  genreFilter: string;
  grootList: Groot[] = [];  
  allGroot: Observable<Groot[]> = this.grootService.getAllGroot();
 
  randomIsbn: number = 6789;
  isbn = 'e4e8d3e0-3914-4458-bebf-4928947';
  
  author: string = "";
  title: string= "";
  name: string= "";
  type: string= "";

  validInputs: boolean = false;
  validation: string = "All 4 fields are required";
 
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

  // Filter by Genre function
  // Overwrites default list
  filterByDBGroot() {
    this.grootService.getFilteredGroot(this.genreFilter).subscribe(
       data  => {  
        this.grootList = data; 
        console.log(this.grootList); 
      },
      (data) => {
        return "no response, no groot?"
      }
    );
  } 


  addGroot() {
    this.validateInputFields();
    if (this.validInputs) {
      
      // Generate randomized last 4 digits for mock data
      this.randomIsbn = this.getRandomInt(this.randomIsbn);
      this.isbn = this.isbn + this.randomIsbn;
      console.log("randomized: " + this.isbn);

      this.grootService.addGroot(new Groot(this.isbn, this.author, this.title, this.name, this.type)).subscribe(
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

    if (
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

  validateFields(author: string, title: string, name: string, type: string): string {

    this.validateInputFields();
    if (!this.validInputs)
      return this.validation;
    else {
      return "";
    }

  }

}
