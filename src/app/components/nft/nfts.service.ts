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
import { Address } from 'src/app/models/Address';

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
  nftRefsUpdated = new Subject<Address>();
 

  constructor(
    private http: HttpClient,
    private keyService: KeyService,
    private loaderService: LoaderService,
    private authStore: AuthStore,
  ) {
    this.key = this.keyService.getMoralisKey();

  }
/////////////////////// NFT REF  
  findNftRefById(id:string): Observable<Address> {
    return this.http.get<Address>(`${env.nft_url}/addresses/${id}`)
    // return this.http.get<NftRef>(`${env.nftsURL}/api/nft-refs/${name}${env.test_env}`)
  }

  findNftRefByName(name:string): Observable<Address> {
    return this.http.get<Address>(`${env.nft_url}/addresses/${name}`)
    // return this.http.get<NftRef>(`${env.nftsURL}/api/nft-refs/${name}${env.test_env}`)
  }
  collectNftRefs(): Observable<any> {
    return this.http.get(`${env.nft_url}/addresses`)
    // return this.http.get(`${env.nftsURL}/api/nft-refs${env.test_env}`)
    .pipe(
      catchError(err => {
        throw 'error in source. Details: ' + err;
      }))
     
  }
 ///////////////
  collectNfts(): Observable<any> {
    return this.http.get(`${env.nftsURL}/api/nft${env.test_env}`)
    .pipe(
      catchError(err => {
        throw 'error in source. Details: ' + err;
      }))

  }


  chainNftData(chain: string, address: string) {
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
}