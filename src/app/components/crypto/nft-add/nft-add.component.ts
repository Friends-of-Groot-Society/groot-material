import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
 
import { Observable, Subject, Subscription , of} from 'rxjs';
import { NftsService } from '../nfts.service';
import { Store } from '@ngrx/store';
import { MORALIS_CHAINS } from '../../../utility/constants';
import { Chain } from '../../../models/Chain';
import * as fromChains from '../../../reducers/chain.reducer';

@Component({
  selector: 'app-nft-add',
  templateUrl: './nft-add.component.html',
  styleUrls: ['./nft-add.component.scss']
}) 
export class NftAddComponent implements OnInit { 
  chains$!: Observable<Chain[]>;   
  chain: string = 'eth'; // default chain
  nftData: any;
  tokens: any = [];
  nfts: any;
  image: string = "";
  name: string = "";
  description: string = ""; 
  nftDataUpdated = new Subject<any>();
  nftsUpdated = new Subject<any[]>();
  key: string = ''; 
  nftAddress: string = "";  
 
  // private nftSubscription: Subscription = new Subscription;
  
  constructor(
    private nftsService: NftsService,
    // private store: Store<fromChains.State>
  ) {   
    this.chains$ = of(MORALIS_CHAINS)
     }
  
    ngOnInit(): void {
      // this.chains$ = this.store.select(fromChains.getAvailableChains)
    
    }
   
    formReplaceNft(form: { valid: any; value: { chain: string, nftAddress: string; }; }) { 
      console.log(form.value.chain, form.value.nftAddress);
      if(form.valid) {
      this.nftsService.replacePostNfts(form.value.chain, form.value.nftAddress) 
        return this.nftData;
      } 
    } 
  // onAddNft(form: { valid: any; value: { nftAddress: string; }; }) {
  //   //this.nfts.push(this.name);
  //   if(form.valid) {
  //     this.nftsService.addNft(form.value.nftAddress);
  //   }
  // }
  // onDeleteNft(nftAddress: string) {
  //   this.nfts = this.nfts.filter((nft: string) => { return nft != nftAddress; });
  //   // this.nfts = this.nftsService.deleteNft(nftName);
  // }
  // ngOnDestroy(): void {
  //   this.nftSubscription.unsubscribe();
  // }

}
