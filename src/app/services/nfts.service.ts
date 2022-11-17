import { Injectable } from '@angular/core';
import { KeyService } from './auth/key.service';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Observable, throwError } from "rxjs";
// import Moralis from 'moralis'.default();
// import { EvmChain } from '@moralisweb3/evm-utils'
 
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NftsService {
  // chainEth = EvmChain.ETHEREUM;
  // chainBsc= EvmChain.BSC;
  // chainPolygon = EvmChain.POLYGON;
  // chainAvalance  = EvmChain.AVALANCHE;
  // chainMumbai = EvmChain.MUMBAI; 
  // chainGoerli = EvmChain.GOERLI;


  nftItem: any ;
  tokens: any = [];
  nfts: any = [];
  image: string = "";
  name: string = "";
  
  nftsUpdated = new Subject<any[]>();
  key:string = '';
  constructor(
    private http: HttpClient,
    private keyService: KeyService
  ) {
  this.key = this.keyService.getMoralisKey();
  // this.connectNfts();
  }
  
  collectNfts() { 
    this.http.get(`${environment.nft_url}`)
    .subscribe((data:any) => {
      if(data != undefined){
        this.nftItem = data;
        console.log(data);

        this.tokens = data.tokens;
        console.log(this.tokens);
        console.log(this.tokens.length); 

        this.nfts = data.nfts;
        console.log(this.nfts); 
 
        this.nftsUpdated.next([...this.nfts]);
      }
      })
      return this.nfts;
      } 
 

  addNft(nftAddress: string) {
    this.nfts.push(nftAddress);
    this.nftsUpdated.next(this.nfts);
  }
  getFirstNftImage() {
    this.image = this.nfts[0].metadata.image;
    return this.image
  }
  getSecondNftImage() {
    this.image = this.nfts[1].metadata.image;
    return this.image
  }
  
  getFirstNftName() {
    this.name = this.nfts[0].metadata.name;
    return this.name
  }
  getSecondNftName() {
    this.name = this.nfts[1].metadata.name;
    return this.name
  }
  getTokens() {
    return [...this.tokens];
  }
  getNfts() {
    return [...this.nfts];
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
