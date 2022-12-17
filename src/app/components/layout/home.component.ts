import { Component, OnInit,   ChangeDetectionStrategy  } from '@angular/core';
import { Chain  } from 'src/app/models/Chain';
import { Observable } from 'rxjs';
import {ChainStore } from '../../utility/chain-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  `.container-panel {
    max-width:400px;
    margin:0 auto;
  }
  `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
