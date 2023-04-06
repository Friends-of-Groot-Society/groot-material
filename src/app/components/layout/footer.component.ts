import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  dt = new Date();

  copyright = `      2021, ${this.dt.getFullYear()}             `;

  constructor() {}

  ngOnInit(): void {}
}
