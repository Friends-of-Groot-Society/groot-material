import { Injectable } from '@angular/core';
import { KeyService } from '../../services/auth/key.service';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment  as env  }from "src/environments/environment";
import { catchError, Observable, throwError } from "rxjs";
// import Moralis from 'moralis'.default();
// import { EvmChain } from '@moralisweb3/evm-utils'
import { AuthStore } from 'src/app/services/auth/auth-store.service';
import { Subject } from 'rxjs';
import { LoaderService } from '../layout/loader/loader.service';
import { Nft } from 'src/app/models/Nft';
import { User } from 'src/app/models/User';
import { NftRef } from 'src/app/models/NftRef';

@Injectable({
  providedIn: 'root'
})

export class NftsService {

  currUser : User;
  key: string = '';
  chain: string = 'ethereum';
  nftData: Nft; 
  nfts: Nft[] = [];

  nftsUpdated = new Subject<any[]>();
  nftDataUpdated = new Subject<any>();
  nftRefsUpdated = new Subject<NftRef>();
 

  constructor(
    private http: HttpClient,
    private keyService: KeyService,
    private loaderService: LoaderService,
    private authStore: AuthStore,
  ) {
    this.key = this.keyService.getMoralisKey();

  }

  findNftRefByName(name:string): Observable<NftRef> {
    return this.http.get<NftRef>(`${env.nftsURL}/api/nft-refs/${name}${env.test_env}`)
  }

  collectNftRefs(): Observable<any> {
    return this.http.get(`${env.nftsURL}/api/nft-refs${env.test_env}`)
    .pipe(
      catchError(err => {
        throw 'error in source. Details: ' + err;
      }))
     
  }
 
  collectNfts(): Observable<any> {
    return this.http.get(`${env.nftsURL}/api/nft${env.test_env}`)
    .pipe(
      catchError(err => {
        throw 'error in source. Details: ' + err;
      }))

  }


  replacePostNfts(chain: string, address: string) {
    if (!chain) {
      chain = this.chain;
    }
    this.http.post<Nft>(`${env.nftsURL}/api/nft${env.test_env}`, { chain: chain, address: address },
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
        this.nftDataUpdated.next(this.nftData); 
        
        this.nfts.push(this.nftData);
        this.nftsUpdated.next([...this.nfts]);
      }) 
  }
 
  getNftData() { 
    return this.nftData;
  }
  getAllNfts() {
    return [...this.nfts];
  }
 
  deleteNft(nftNamed: string) {
    this.nfts = this.nfts.filter((nft: Nft) => {
      return nft !== nftNamed;
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
