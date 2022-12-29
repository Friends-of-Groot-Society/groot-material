import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {  MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { NftRef } from 'src/app/models/NftRef';

import { NftsService } from '../nfts.service';
@Component({
  selector: 'app-nft-ref',
  templateUrl: './nft-ref.component.html',
  styleUrls: ['./nft-ref.component.scss']
})
export class NftRefComponent implements  OnInit {
  // @Input('inputNftRef') 
  // nftRef: any;    
  // @Input()
  // nftRefs: NftRef[];
  // @Output() nftRefDeleted = new EventEmitter();

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort;
  nftRef: NftRef;
  loading = false;


  constructor(private route: ActivatedRoute, private nftService: NftsService) { }
 

  
  ngOnInit(): void {
    this.nftRef = this.route.snapshot.data["nftRef"];
    console.log(this.nftRef)
  }
  onClicked() {
    // this.nftDeleted.emit(this.name);
    // this.nftsService.deleteNft(this.nft.name);
    console.log(this.nftRef);
  } 
}
