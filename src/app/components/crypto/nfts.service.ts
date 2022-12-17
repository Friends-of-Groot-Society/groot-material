import { Injectable } from '@angular/core';
import { KeyService } from '../../services/auth/key.service';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { catchError, Observable, throwError } from "rxjs";
// import Moralis from 'moralis'.default();
// import { EvmChain } from '@moralisweb3/evm-utils'

import { Subject } from 'rxjs';
import { LoaderService } from '../layout/loader/loader.service';

@Injectable({
  providedIn: 'root'
})

export class NftsService {
  collectChainData(): any {
    throw new Error('Method not implemented.');
  }
 

  chain: string = 'ethereum';
  nftData: any;
  tokens: any = [];
  nfts: any = [];

  nftsUpdated = new Subject<any[]>();
  chainDataUpdated = new Subject<any>();

  key: string = '';
  constructor(
    private http: HttpClient,
    private keyService: KeyService,
    private loaderService: LoaderService
  ) {
    this.key = this.keyService.getMoralisKey();

  }

  collectNfts(): Observable<any> {
    return this.http.get(`${environment.nft_url}/nft`)
    .pipe(
      catchError(err => {
        throw 'error in source. Details: ' + err;
      }))

  }

  replaceNfts(chain: string, address: string): Observable<any> {
    if (!chain) {
      chain = this.chain;
    }
    this.http.get(`${environment.nft_url}/nft/${chain}/${address}`)
      .pipe(
        catchError(err => {
          throw 'error in source. Details: ' + err;
        }))
      .subscribe((data: any) => {
        this.nftData = data;
        console.log(this.nftData);
        this.chainDataUpdated.next(this.nftData);
      });
    
    return this.nftData;
  }
  replacePostNfts(chain: string, address: string) {
    if (!chain) {
      chain = this.chain;
    }
    this.http.post(`${environment.nft_url}/nft`, { chain: chain, address: address },
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
        this.nftData = data;
        console.log(this.nftData);
        this.chainDataUpdated.next(this.nftData);
      })
    return this.nftData;
  }
  // addNft(nftName: string) {
  //   // this.nfts.push(...this.nfts);
  //   // this.nftsUpdated.next(this.nfts);
  //   this.nfts.push(nftName);
  //   this.nftsUpdated.next([...this.nfts]);
  // }
  getChainData() {
    console.log("chain", this.nftData);
    return this.nftData;
  }
  getTokens() {
    return [...this.tokens];
  }

  deleteNft(nftName: string) {
    this.nfts = this.nfts.filter((nft: string) => {
      return nft !== nftName;
    });
    this.nftsUpdated.next(this.nfts);
  }
  
  // Chain and its wrapper token address data
  networkData = [
    {
      "networkName": "Ethereum",
      "chainId": "0x1",
      "wrappedTokenAddress": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
    },
    {
      "networkName": "Polygon",
      "chainId": "0x89",
      "wrappedTokenAddress": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
    },
    {
      "networkName": "Binance",
      "chainId": "0x38",
      "wrappedTokenAddress": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
    },
    {
      "networkName": "Avalanche",
      "chainId": "0xa86a",
      "wrappedTokenAddress": "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7"
    },
    {
      "networkName": "Fantom",
      "chainId": "0xfa",
      "wrappedTokenAddress": "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83"
    },
    {
      "networkName": "Cronos",
      "chainId": "0x19",
      "wrappedTokenAddress": "0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23"
    }
  ]
}
