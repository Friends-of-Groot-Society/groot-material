import { Component, OnInit } from '@angular/core';
import { GrootService } from '../../services/groot.service';

@Component({
  selector: 'app-groot',
  templateUrl: './groot.component.html',
  styleUrls: ['./groot.component.css']
})
export class GrootComponent implements OnInit {
  title = 'Groot';
  constructor(private grootService: GrootService, ) { }

  ngOnInit() {
  
  }

  albums = this.grootService.getAlbums();
  getAlbums = this.grootService.getAlbums();

 
}
