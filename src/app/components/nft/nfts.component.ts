 
import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subject, Subscription, tap } from 'rxjs';
import { Nft } from 'src/app/models/Nft';
import { NftsService } from './nfts.service';
import { LoaderService } from '../../components/layout/loader/loader.service';

// import { Chain } from '../../models/Chain';
import { ChainStore } from 'src/app/services/chain-store.service';
import { NftRef } from 'src/app/models/NftRef';
@Component({
  selector: 'app-nfts',
  templateUrl: './nfts.component.html',
  styles: [
  `.container-panel {
    max-width:400px;
    margin:0 auto;
  }
  `
  ],
  providers: [LoaderService]
  
})

export class NftsComponent implements OnInit, OnDestroy { 
  
  chain: string = 'ethereum'; // default chain
  // chains$!: Observable<Chain[]>;

  nfts: any;
  nftData: any;
  tokens: any = [];
  nftRefs:any;
  nftRefArrs: any = [];

  // chainDataUpdated = new Subject<any[]>();
  private nftDataSubscription: Subscription = new Subscription;

  nftsUpdated = new Subject<any[]>();
  nftRefsUpdated = new Subject<NftRef>();
  private nftSubscription: Subscription = new Subscription;
  private nftRefSubscription: Subscription = new Subscription;

  constructor(
    private nftsService: NftsService,
    private store: ChainStore
  ) {

    this.nfts = this.loadNfts();
    this.nftRefs = this.loadNftRefs();
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
 
     this.nftRefSubscription = this.nftsService.nftRefsUpdated.subscribe(() => {
      this.nftRefs = this.nftsService.collectNftRefs();
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
  loadNftRefs() {
 this.nftsService.collectNftRefs() 
    .pipe( 
      map(res => { 
        console.log("res")
        console.log(res)
        for(let i in res) {
          this.nftRefArrs.push({ ...res[i] });
        }
        // for (const key in res) {
        //   if (res.hasOwnProperty(key)) {
            // this.nftRefArrs.push({ ...res[key], name: key });
        //   }
        // }
        return this.nftRefArrs;          
      }),
      tap(
        (dataArray: any) => {
          if (dataArray != undefined) { 
            this.nftRefs = dataArray; 
            console.log("this.nftRefs")
            console.log(this.nftRefs); 
          }
        }
      ),
    ).subscribe();
  };

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
    this.nftDataSubscription.unsubscribe();
    this.nftRefSubscription.unsubscribe();
  }

}
