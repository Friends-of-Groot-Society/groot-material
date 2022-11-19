import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
 
import { Subscription } from 'rxjs';
import { NftsService } from '../../../services/nfts.service';

@Component({
  selector: 'app-nft-add',
  templateUrl: './nft-add.component.html',
  styleUrls: ['./nft-add.component.scss']
})

export class NftAddComponent implements OnInit, OnDestroy {
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  nftAddress: string = "";
  chain: string = 'eth'; // default chain
  nfts: any[] = [   ];
  private nftSubscription: Subscription = new Subscription;
  
  constructor(
    private nftsService: NftsService
  ) {     }
  
    ngOnInit(): void {
      this.nfts = this.nftsService.getNfts();
      this.nftSubscription = this.nftsService.nftsUpdated.subscribe(() => {
        this.nfts = this.nftsService.getNfts();
      });
    }
  
    menuMethod() {
      this.trigger.openMenu();
    }

    replaceNft(form: { valid: any; value: { chain: string, nftAddress: string; }; }) {
    
      if(form.valid) {
        this.nftsService.replaceNfts(this.chain, form.value.nftAddress);
      }
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
