import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
 
import { Observable, Subject, Subscription , of} from 'rxjs';
import { NftsService } from '../nfts.service';
import { Store } from '@ngrx/store';
import { Constant } from '../../../models/Constant';
import { Chain } from '../../../models/Chain';
import * as fromChains from '../../../reducers/chain.reducer';

@Component({
  selector: 'app-nft-add',
  templateUrl: './nft-add.component.html',
  styles: [`
  #button {
    transform:translate(100px, 10px);
}

  `]
}) 
export class NftAddComponent implements OnInit { 

  chains$!: Observable<Chain[]>;   
  chain: string = 'ethereum'; // default chain
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
    this.chains$ = of(Constant.MORALIS_CHAINS)
     }
  
    ngOnInit(): void {
      // this.chains$ = this.store.select(fromChains.getAvailableChains)
    
    }
 
   
   saveForm(form: { valid: any; value: { chain: string, nftAddress: string; }; }) { 
  
    console.log( this.nftsService.getNftData())  
    } 
    
    formReplaceNft(form: { valid: any; value: { chain: string, nftAddress: string; }; }) { 
      console.log(form.value.chain, form.value.nftAddress);
      if(form.valid) {
     this.nftData =  this.nftsService.replacePostNfts(form.value.chain, form.value.nftAddress)  
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
