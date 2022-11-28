import { Injectable } from '@angular/core';
import { KeyService } from './auth/key.service';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { catchError, Observable, throwError } from "rxjs";
// import Moralis from 'moralis'.default();
// import { EvmChain } from '@moralisweb3/evm-utils'

import { Subject } from 'rxjs';
import { compileDeclareNgModuleFromMetadata } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

export class NftsService {
  collectChainData(): any {
    throw new Error('Method not implemented.');
  }
  // chainEth = EvmChain.ETHEREUM;
  // chainBsc= EvmChain.BSC;
  // chainPolygon = EvmChain.POLYGON;
  // chainAvalance  = EvmChain.AVALANCHE;
  // chainMumbai = EvmChain.MUMBAI; 
  // chainGoerli = EvmChain.GOERLI;

  chain: string = 'eth';
  nftData: any;
  tokens: any = [];
  nfts: any = [];
 
  nftsUpdated = new Subject<any[]>();
  chainDataUpdated = new Subject<any>();

  key: string = '';
  constructor(
    private http: HttpClient,
    private keyService: KeyService
  ) {
    this.key = this.keyService.getMoralisKey();
    
  }
 
  collectNfts():Observable<any>  { 
   return  this.http.get(`${environment.nft_url}/nft`)    
   .pipe(catchError(this.handleError)); 

  }

  replaceNfts(chain: string, address: string):Observable<any> {
    return this.http.get(`${environment.nft_url}/nft/${chain}/${address}`)
    .pipe(catchError(this.handleError)); 
  }
 
  addNft(nftName: string) {
    // this.nfts.push(...this.nfts);
    // this.nftsUpdated.next(this.nfts);
    this.nfts.push(nftName);
    this.nftsUpdated.next([...this.nfts]);
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
  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) { 
      console.error('An error occurred:', error.error.message);
    } else { 
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // returns an observable with a user-facing error message
    return throwError(() => new Error('Something bad happened; please try again later.'));
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
