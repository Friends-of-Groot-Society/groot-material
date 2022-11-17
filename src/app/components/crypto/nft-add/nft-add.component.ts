import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NftsService } from '../../../services/nfts.service';

@Component({
  selector: 'app-nft-add',
  templateUrl: './nft-add.component.html',
  styleUrls: ['./nft-add.component.scss']
})

export class NftAddComponent implements OnInit, OnDestroy {
   
  nftName: string = 'OneNFT';
  isDisabled: boolean = true;
  nfts: any[] = [   ];
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
  
  onAddNft(form: { valid: any; value: { nftAddress: string; }; }) {
    //this.nfts.push(this.name);
    if(form.valid) {
      this.nftsService.addNft(form.value.nftAddress);
    }
  }
  onDeleteNft(nftAddress: string) {
    this.nfts = this.nfts.filter(nft => { return nft !== nftAddress; });
    // this.nfts = this.nftsService.deleteNft(nftName);
  }
  ngOnDestroy(): void {
    this.nftSubscription.unsubscribe();
  }

}
