import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { NftsService } from '../../../services/nfts.service';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.scss']
})

export class NftComponent implements OnInit { 
  @Input('inputNft') nft: any;  
 
  @Output() nftDeleted = new EventEmitter();
  viewNft() {} 
    constructor(private nftsService: NftsService) { }

  ngOnInit(): void {
    // this.nft = this.nftsService.getNft(this.name);
            }
  onClicked() {
    // this.nftDeleted.emit(this.name);
    this.nftsService.deleteNft(this.nft.name);
  }
  nftData: any = {
    nftName: 'TwoNFT',
    description: 'This is the first NFT',
    image: 'assets/groot.png',
    price: 0.01,
    owner: '0x0f0c0000f0',
    contract: '0x00000000',
    tokenId: 0,
    isForSale: false,
    isForAuction: false,
    isForSwap: false,
    isForTrade: false,
    isForRent: false,
    isForLease: false,
    isForGift: false,
    isForLend: false,
    isForBorrow: false,
    isForDonate: false,
    isForExchange: false,
    isForBarter: false,
    isForPay: false,  
    isForTip: false,
    isForReward: false,
    isForRefund: false,
    isForReimburse: false,
    isForCompensate: false,
    isForBuy: false,
    isForSell: false,
    isForRentOut: false,
    isForLeaseOut: false,
    isForLendOut: false,
    isForBorrowOut: false,
    isForDonateOut: false,
    isForExchangeOut: false,
    isForBarterOut: false,
  };
}
