import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

import { Chain } from 'src/app/models/Chain';
import { Nft } from '../models/Nft';
import { NftsService } from '../components/crypto/nfts.service';
import { AuthStore } from './auth/auth-store.service';
import { AdminAuthenticationService } from './auth/admin-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(
    private httpClient: HttpClient,
    private authStore: AuthStore,
    private adminAuth: AdminAuthenticationService,
    private nftService: NftsService,
  ) { }

  storeNft() {
    const nft = this.nftService.getNftData();
    this.httpClient
    .put<Nft>('',
    nft)
    .subscribe(response => {
      console.log(response);
    } );
  }
  getAllNfts(id:string) {
    const Nfts = this.httpClient
      .get<Nft[]>(
        ''
      )
      .pipe(
        map(nfts => {
          return nfts.map(nft => {
            return {
              nft,
              tokens: nft.tokens ? nft.tokens : []
            };
          });
        }),
        tap(nfts => {
          this.nftService.nftsUpdated.next(nfts);
        })
      )
  }

   
}
