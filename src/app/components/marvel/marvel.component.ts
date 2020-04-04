import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/Character';
import { MarvelService } from '../../services/marvel.service'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css']
})
export class MarvelComponent implements OnInit {
  title = 'Guardians of the Galaxy API';
  constructor(private marvelService: MarvelService, ) { }

  ngOnInit() {
      // this.displayAllCharacters();
  }
    characterList: Character[] = [];  // :Groot[] = :Array:Groot
  allCharacters: Observable<Character[]> = this.marvelService.getCharacters();

  getCharacter() {
    console.log(this.marvelService.getCharacters());
  }
  // displayCharacters() {
  //   console.log(this.displayAllCharacters());
  // }
  characters = this.marvelService.getCharacters();

  id: number;
  name: string;
  type: string;

  displayAllCharacters() {
    this.allCharacters.subscribe(
      (response) => {
        this.characterList = response;
        console.log(this.characterList);
      },
      //function to execute when the Observabler receives
      //incorrect/faulty information -> call is unsuccessful.
      (response) => {
        return "Sorry it failed";
      }
    );
  }
    // grootList :Groot[] = [];  // :Groot8[] = :Array:Groot
  // allGroot :Observable<Groot[]> = this.pokeService.getAllGroot();


}
