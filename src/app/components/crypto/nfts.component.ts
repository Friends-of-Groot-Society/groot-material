 
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { NftsService } from './nfts.service';
import { LoaderService } from '../../components/layout/loader/loader.service';

// import { Chain } from '../../models/Chain';
import { ChainStore } from 'src/app/services/chain-store.service';
@Component({
  selector: 'app-nfts',
  templateUrl: './nfts.component.html',
  styleUrls: ['./nfts.component.scss'],
  providers: [LoaderService]
  
})

export class NftsComponent implements OnInit, OnDestroy { 
  
  chain: string = 'ethereum'; // default chain
  // chains$!: Observable<Chain[]>;

  nfts: any;
  nftData: any;
  tokens: any = [];

  chainDataUpdated = new Subject<any[]>();
  private nftDataSubscription: Subscription = new Subscription;

  nftsUpdated = new Subject<any[]>();
  private nftSubscription: Subscription = new Subscription;
  
  constructor(
    private nftsService: NftsService,
    private store: ChainStore
  ) {
    this.nfts = this.loadNfts();
    this.nftData = this.showChainData();
  }

  ngOnInit(): void { 
    //  this.chains$ = this.store.selectAllChains();
    //  console.log("init",this.chains$)
 
    this.nftDataSubscription = this.nftsService.nftDataUpdated.subscribe(() => {
      this.nftData = this.nftsService.getNftData();
     }
     );
 
     this.nftSubscription = this.nftsService.nftsUpdated.subscribe(() => {
       this.nfts = this.nftsService.collectNfts();
     });
 
  }
  showChainData() {
    return this.nftData;
    console.log("chain", this.nftData);
  }
  // loadChains(): Observable<Chain[]> {
  //   this.chains$ = this.store.selectAllChains();
  //   console.log("loadchains")
  //   return this.chains$
  // }
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
          console.log(this.nfts[0]);
          this.nftsUpdated.next([...this.nfts]);
        }
      });
  }

  ngOnDestroy(): void {
    this.nftSubscription.unsubscribe();
  }

}
