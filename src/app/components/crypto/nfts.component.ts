import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NftsService } from '../../services/nfts.service';

@Component({
  selector: 'app-nfts',
  templateUrl: './nfts.component.html',
  styleUrls: ['./nfts.component.scss']
})

export class NftsComponent implements OnInit, OnDestroy { 
  nfts: any[] = [];
  private nftSubscription: Subscription = new Subscription;

  constructor(
    private nftsService: NftsService
  ) {
    this.nfts = this.nftsService.collectNfts();
  }

  ngOnInit(): void {
    this.nfts = this.nftsService.collectNfts();
    this.nftSubscription = this.nftsService.nftsUpdated.subscribe(() => {
      this.nfts = this.nftsService.collectNfts();
    });
  }

  ngOnDestroy(): void {
    this.nftSubscription.unsubscribe();
  }

}
