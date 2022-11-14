import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NftsService } from '../../services/nfts.service';

@Component({
  selector: 'app-nfts',
  templateUrl: './nfts.component.html',
  styleUrls: ['./nfts.component.scss']
})

export class NftsComponent implements OnInit, OnDestroy {
   
  nftName: string = 'OneNFT';
  isDisabled: boolean = true;
  nfts!: any[]; 
  private nftSubscription: Subscription = new Subscription;
  
  constructor(
    private nftsService: NftsService
  ) { 
    setTimeout(() => {
      // this.name = 'TwoNFT';
      this.isDisabled = false;
      }, 3000); 
  }
  
    ngOnInit(): void {
      this.nfts = this.nftsService.getNfts();
      this.nftSubscription = this.nftsService.nftsUpdated.subscribe(() => {
        this.nfts = this.nftsService.getNfts();
      });
    }
   
  ngOnDestroy(): void {
    this.nftSubscription.unsubscribe();
  }

}
