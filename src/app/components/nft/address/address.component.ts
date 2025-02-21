import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {  MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { Address } from 'src/app/models/Address';
import { MatCard } from '@angular/material/card';

import { NftsService } from '../nfts.service';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements  OnInit {
  @Input('inputAddress')   
  address: Address;
  @Input()
  addresses: Address[];
  
  @Output() addressDeleted = new EventEmitter();

  @ViewChild(MatPaginator)
  paginator: MatPaginator;


  @ViewChild(MatSort)
  sort: MatSort;

  loading = false;

  @ViewChild(MatCard)
  card: MatCard;


  constructor(private route: ActivatedRoute, private nftService: NftsService) { }
 

  
  ngOnInit(): void {
    this.address = this.route.snapshot.data["address"];
    console.log(this.address)
  }
  onClicked() {
    // this.nftDeleted.emit(this.name);
    // this.nftsService.deleteNft(this.nft.name);
    console.log(this.address);
  } 
}
