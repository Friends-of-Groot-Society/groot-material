import { Injectable } from '@angular/core';
import { KeyService } from '../../services/auth/key.service';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment  as env  }from "src/environments/environment";
import { catchError, Observable, throwError } from "rxjs";
// import Moralis from 'moralis'.default();
// import { EvmChain } from '@moralisweb3/evm-utils'
import { AuthStore } from 'src/app/services/auth/auth-aws-store.service';
import { Subject } from 'rxjs';
import { LoaderService } from '../layout/loader/loader.service';
import { Coin } from 'src/app/models/Coin';
import { User } from 'src/app/models/User'; 
import { Address } from 'src/app/models/Address';

@Injectable({
  providedIn: 'root'
})

export class NftsService {

  currUser : User;
  key: string = '';
  chain: string = 'ethereum';
  coin: Coin; 
  nftCoins: Coin[] = [];

  nftsUpdated = new Subject<any[]>();
  nftDataUpdated = new Subject<any>();
 addressUpdated = new Subject<Address>();
 

  constructor(
    private http: HttpClient,
    private keyService: KeyService,
    private loaderService: LoaderService,
    private authStore: AuthStore,
  ) {
    this.key = this.keyService.getMoralisKey();

  }
/////////////////////// NFT REF  
 

  findAddressById(id:string): Observable<Address> {
    return this.http.get<Address>(`${env.nft_url}/nfts/${id}`) 
    // return this.http.get<NftRef>(`${env.nftsURL}/api/nft-refs/${name}${env.test_env}`)
  }
  
  nftRefsUpdated(): Observable<any> {
    return this.http.get(`${env.nft_url}/addresses`)
    // return this.http.get(`${env.nftsURL}/api/nft-refs${env.test_env}`)
    .pipe(
      catchError(err => {
        throw 'error in source. Details: ' + err;
      }))
     
  }
 
  getNftCoin() { 
    return this.coin;
  }


  collectNftRefs() {
    return this.http.get(`${env.nft_url}/addresses${env.test_env}`)
    .pipe(
      catchError(err => {
        throw 'error in source. Details: ' + err;
      })) 
  }
  getAllNfts() {
    return this.http.get(`${env.nft_url}/nfts${env.test_env}`)
    .pipe(
      catchError(err => {
        throw 'error in source. Details: ' + err;
      })) 
    // return [...this.nfts];
  }
 
  deleteNft(id: number) {
    this.nftCoins = this.nftCoins.filter((nft: Coin) => {
      return nft.id !== id;
    });
    this.nftsUpdated.next(this.nftCoins);
  } 

 ///// nftFromChain //////////
  collectNftsFromChain(): Observable<any> {
    return this.http.get(`${env.nftFromChain}/nft${env.test_env}`)
    .pipe(
      catchError(err => {
        throw 'error in source. Details: ' + err;
      })) 
  } 

  chainNftData(chain: string, address: string) {
    if (!chain) {
      chain = this.chain;
    }
    this.http.post<Coin>(`${env.nftFromChain}/nft${env.test_env}`, { chain: chain, address: address },
      {
        headers: new HttpHeaders({
          Accept: 'application/json'
        })
      })
      .pipe(
        catchError(err => {
          throw 'error in source. Details: ' + err;
        }))
      .subscribe((data: any) => {
        this.coin = data;
        console.log(this.coin);
        this.nftDataUpdated.next(this.coin); 
        
        this.nftCoins.push(this.coin);
        this.nftsUpdated.next([...this.nftCoins]);
      }) 
  }
 
}
