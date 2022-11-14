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
  nfts: any[] = [
    // 'NFT1',
    //  'NFT2', 
    //  'NFT3'
    {
      nftName: 'OneNFT',
      description: 'This is the first NFT',
      image: 'https://github.com/Friends-of-Groot-Society/groot-material/compare/prod?expand=1#diff-c0226f84c51292adb003e938cb24169611b56debacf1403b6d460e36b5d81a21',
      price: 0.01,
      owner: '0x0f0c0000f0',
      contract: '0x00000000',
      tokenId: 0,
      isForSale: false,
      isForAuction: false,
    },  
    {
      nftName: '2NFT',
      description: 'This is the first NFT',
      image: 'https://github.com/Friends-of-Groot-Society/groot-material/compare/prod?expand=1#diff-82ebe3abcc631ed48aff7a0fbe8c1e1bd36aeef7825a224580720d1d8c7c946b',
      price: 0.01,
      owner: '0x0f0c0000f0',
      contract: '0x00000000',
      tokenId: 0,
      isForSale: false,
      isForAuction: false,
    },  
    {
      nftName: '3NFT',
      description: 'This is the first NFT',
      image: 'https://s3.amazonaws.com/tmm.net/img/blueColorTriomphe.jpg',
      price: 0.01,
      owner: '0x0f0c0000f0',
      contract: '0x00000000',
      tokenId: 0,
      isForSale: false,
      isForAuction: false,
    },  
  ];
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
