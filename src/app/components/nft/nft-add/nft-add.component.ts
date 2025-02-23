import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
 
import { Observable, Subject, Subscription , of} from 'rxjs';
import { NftsService } from '../nfts.service';
import { Store } from '@ngrx/store';
import { AuthStore } from 'src/app/services/auth/auth-aws-store.service';
import { AuthFirebaseStoreService } from 'src/app/services/auth/auth-firebase-store.service';
import { DataStorageService } from 'src/app/services/data-storage.service'; 
import { Constant } from '../../../models/Constant';
import { Chain } from '../../../models/Chain';
import * as fromChains from '../../../reducers/chain.reducer';

@Component({
  selector: 'app-nft-add',
  templateUrl: './nft-add.component.html',
  styles: [`
  button {
    margin-right:5px;
  }
  #button {
    transform:translate(70px, 10px); 
}

  `]
}) 
export class NftAddComponent implements OnInit { 

  chains$!: Observable<Chain[]>;   
  chain: string = 'ethereum'; // default chain 
  owner: string = "";
  nftData: any;
  tokens: any = [];
  nfts: any;
  image: string = "";
  name: string = "";
  description: string = ""; 
  nftDataUpdated = new Subject<any>();
  nftsUpdated = new Subject<any[]>();
  key: string = ''; 
  address: string = "";  
 
  // private nftSubscription: Subscription = new Subscription;
  
  constructor( 
    private nftsService: NftsService,
    public authStore: AuthStore,
    // private store: Store<fromChains.State>
    public adminAuthenticationService: AuthFirebaseStoreService,
    private dataStore: DataStorageService,
  ) {   
    this.chains$ = of(Constant.MORALIS_CHAINS)
     }
  
    ngOnInit(): void {
      // this.chains$ = this.store.select(fromChains.getAvailableChains)
    
    }
 
   
   saveForm(form: { valid: any; value: { chain: string, address: string; }; }) { 
    console.log("saveForm")
    console.log( this.nftsService.getNftCoin())  
    if(form.valid) {
      this.nftData =  this.dataStore.savePersistedNfts(form.value.chain, form.value.address)  
      console.log(this.nftData);
       } 
    } 
    
    chainCheckNft(form: { valid: any; value: { chain: string, address: string}; }) { 
      if(form.valid) {
     this.nftData =  this.nftsService.chainNftData(form.value.chain, form.value.address );
     console.log(form.value.chain, form.value.address);
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
