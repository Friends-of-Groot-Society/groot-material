import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { NftsService } from '../../services/nfts.service';

@Component({
  selector: 'app-nfts',
  templateUrl: './nfts.component.html',
  styleUrls: ['./nfts.component.scss']
  
})

export class NftsComponent implements OnInit, OnDestroy { 
  nfts: any  ; 
  nftData: any;
  tokens: any = [];
  nftsUpdated = new Subject<any[]>();
  private nftSubscription: Subscription = new Subscription; 
  
  constructor(
    private nftsService: NftsService
  ) {
    this.nfts = this.loadNfts();
    this.nftData = this.showChainData();
  }

  ngOnInit(): void { 


    // this.nftSubscription = this.nftsService.chainDataUpdated.subscribe(() => {
    //   this.nfts = this.nftsService.collectNfts(); 
    // });
         
    this.nftSubscription = this.nftsService.nftsUpdated.subscribe(() => {
      this.nfts = this.nftsService.collectNfts(); 
      this.nftData = this.showChainData();
    });
 
  }
showChainData( ) {
return this.nftData;
console.log("chain",this.nftData);
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
       console.log(this.nfts[0]); 
       this.nftsUpdated.next([...this.nfts]);
     }
   }); }

  ngOnDestroy(): void {
    this.nftSubscription.unsubscribe();
  }

}
