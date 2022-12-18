import { Component, Input, OnInit } from '@angular/core';
import { Address } from 'src/app/models/Address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styles: [`
  `]
})
export class AddressComponent implements OnInit {

  @Input() address: Address;

  
  constructor() { }

  ngOnInit(): void {
  }

}
