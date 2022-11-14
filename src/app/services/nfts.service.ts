import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NftsService {
  private nfts: any[] = ['NFT1', 'NFT2', 'NFT3'];
  nftsUpdated = new Subject<any[]>();

  addNft(nftName: string) {
    this.nfts.push(nftName);
    this.nftsUpdated.next(this.nfts);
  }
  getNfts() {
    return [...this.nfts];
  }
  deleteNft(nftName: string) {
    this.nfts = this.nfts.filter(nft => {
      return nft !== nftName;
    });
    this.nftsUpdated.next(this.nfts);
  }

  constructor() { }
}
