import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NftsService } from './nfts.service';

@Component({
  selector: 'app-nfts',
  templateUrl: './nfts.component.html',
  styleUrls: ['./nfts.component.scss']
})

export class NftsComponent implements OnInit, OnDestroy {
   
  nftName: string = 'OneNFT';
  isDisabled: boolean = true;
  nfts: any[] = ['NFT1', 'NFT2', 'NFT3'];
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
  
  onAddNft(form: { valid: any; value: { nftName: string; }; }) {
    //this.nfts.push(this.name);
    if(form.valid) {
      this.nftsService.addNft(form.value.nftName);
    }
  }
  onDeleteNft(nftName: string) {
    this.nfts = this.nfts.filter(nft => { return nft !== nftName; });
    // this.nfts = this.nftsService.deleteNft(nftName);
  }
  ngOnDestroy(): void {
    this.nftSubscription.unsubscribe();
  }

}
