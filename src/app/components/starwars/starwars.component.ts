import { Component, OnInit } from '@angular/core';
import { GrootService } from '../../services/groot.service'; 

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css']
})
export class StarwarsComponent implements OnInit {
  title = 'Star Wars';
  constructor(private grootService: GrootService,) { }

  ngOnInit() {
  }

}
