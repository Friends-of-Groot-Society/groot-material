import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
 
import { Observable, Subject, Subscription } from 'rxjs';
import { NftsService } from '../../../services/nfts.service';
import { Store } from '@ngrx/store';

import { Chain } from '../../../models/Chain';
import * as fromChains from '../../../reducers/chain.reducer';

@Component({
  selector: 'app-nft-add',
  templateUrl: './nft-add.component.html',
  styleUrls: ['./nft-add.component.scss']
}) 
export class NftAddComponent implements OnInit, OnDestroy {
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  chains$!: Observable<Chain[]>;

  chain: string = 'eth'; // default chain
  nftData: any;
  tokens: any = [];
  nfts: any 
  image: string = "";
  name: string = "";
  description: string = ""; 
  nftsUpdated = new Subject<any[]>();
  key: string = ''; 
  nftAddress: string = "";
 
 
  private nftSubscription: Subscription = new Subscription;
  
  constructor(
    private nftsService: NftsService,
    private store: Store<fromChains.State>
  ) {  
    this.nfts = this.loadNfts()
     }
  
    ngOnInit(): void {
      // this.chains$ = this.store.select(fromChains.getAvailableChains)
 

      this.nftSubscription = this.nftsService.nftsUpdated.subscribe(() => {
        this.nfts = this.nftsService.collectNfts();
      });
    }
  
  
    menuMethod() {
      this.trigger.openMenu();
    }

    formReplaceNft(form: { valid: any; value: { chain: string, nftAddress: string; }; }) {
    
      if(form.valid) {
        this.nftsService.replaceNfts(this.chain, form.value.nftAddress)
        .subscribe((data: any) => {
          if (data != undefined) {
            this.nftData = data;
            console.log("this.nftData")
            console.log(this.nftData);
  
            this.tokens = data.tokens; 
  
            this.nfts = data.nfts;
            console.log(this.nfts);
            console.log(this.nfts[0])
            this.nftsUpdated.next([...this.nfts]);
          }
        })
        return this.nfts;
      }

    }

  onAddNft(form: { valid: any; value: { nftAddress: string; }; }) {
    //this.nfts.push(this.name);
    if(form.valid) {
      this.nftsService.addNft(form.value.nftAddress);
    }
  }
  loadNfts() {
    this.nfts = this.nftsService.collectNfts() 
    .subscribe((data: any) => {
      if (data != undefined) {
        this.nftData = data;
        console.log("this.nftData")
        console.log(this.nftData);

        this.tokens = data.tokens; 

        this.nfts = data.nfts;
        console.log(this.nfts);
        console.log(this.nfts[0])
        this.nftsUpdated.next([...this.nfts]);
      }
    }); 
  }
  onDeleteNft(nftAddress: string) {
    this.nfts = this.nfts.filter((nft: string) => { return nft != nftAddress; });
    // this.nfts = this.nftsService.deleteNft(nftName);
  }
  ngOnDestroy(): void {
    this.nftSubscription.unsubscribe();
  }

}
