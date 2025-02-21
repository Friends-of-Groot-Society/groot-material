import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap, catchError } from 'rxjs/operators';

import { Chain } from 'src/app/models/Chain';
import { Address } from '../models/Address';
import { Coin } from '../models/Coin';
import { User } from '../models/User';
import { NftsService } from '../components/nft/nfts.service';
import { AuthStore } from './auth/auth-aws-store.service';
import { AuthFirebaseStoreService } from './auth/auth-firebase-store.service';
import { Subject, throwError } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  currUser : User;
  nftRef: Address;
  email:string;
  nftData:any;

  nftRefs: Address[];
  subjectNftRef = new Subject<Address>();

  nftCoins: Coin[];
  subjectNftCoin = new Subject<Coin>();
  constructor(
    private httpClient: HttpClient,
    private authStore: AuthStore,
    private adminAuth: AuthFirebaseStoreService,
    private nftService: NftsService,
  ) {

    this.email = localStorage.getItem('email');
   }
   saveNftsToAws(chain: string, address: string ) {
    // this.currUser  = this.authStore.currentUserValue;
    this.email = localStorage.getItem('email');
    this.nftData = this.nftService.getNftCoin();
    console.log("nftData", this.nftData);
    this.nftRef = {chain, address, email: this.email, nftCoins: this.nftData}
    this.httpClient.post<Coin>(
      `${environment.nft_url}/coinNft`,
      // 'https://friends-of-groot-default-rtdb.firebaseio.com/api/nft.json',
      this.nftRef
    )
    .pipe(
      tap(response => {
        this.nftRef.id = response.id;  
        console.log(this.nftRef);
        this.nftService.nftsUpdated.next([this.nftRef]);
      })
    )
    .subscribe();

  }
  savePersistedNfts(chain: string, address: string ) {
    // this.currUser  = this.authStore.currentUserValue;
    this.email = localStorage.getItem('email');
    this.nftData = this.nftService.getNftCoin();
    console.log("nftData", this.nftData);
    this.nftRef = {chain, address, email: this.email, nftCoins: this.nftRefs.map(nftRef => nftRef.nftCoins).flat()}
    this.httpClient.post<Address>(
      `${environment.nft_url}/addresses`,
      // 'https://friends-of-groot-default-rtdb.firebaseio.com/api/nft.json',
      this.nftRef
    )
    .pipe(
      tap(response => {
        this.nftRef.id = response.id;
        console.log(this.nftRef);
        this.nftService.nftsUpdated.next([this.nftRef]);
      })
    )
    .subscribe();

  }
  editPersistedNftRef(name: string, changes) {
    // const nft = this.nftService.getNftData();
    const nftRefs = this.nftRefs;
    const nftRef  = nftRefs.find(nftRef => nftRef === name);
    const newNftRef: Address = {
      ...nftRefs,
      ...changes
    };
    // const newNftRefs: NftRef[] = nftRefs.map(nftRef => {
    //   if (nftRef.name === name) {
    //     return newNftRef;
    //   } else {
    //     return nftRef;
    //   }
    // });
  const  newNftRefs: Address[] = nftRefs.slice(0);
    newNftRefs.splice(nftRefs.indexOf(nftRef), 1, newNftRef);
    this.subjectNftRef.next(newNftRef);
    this.nftRefs = newNftRefs;


    return this.httpClient
    .put<Address>(
      `${environment.nft_url}/addresses`,
      // `https://friends-of-groot-default-rtdb.firebaseio.com/api/nft/${name}.json`,
      changes)
      .pipe(
        catchError(err => {
          return throwError(err);
        }),
        tap(nftRef => {
          this.nftService.addressUpdated.next(nftRef);
        }),
        // shareReplay()
      )
    // .subscribe(response => {
    //   console.log(response);
    // } );
  }

  getAllNftRefs() {
    return  this.httpClient
      .get(
        `${environment.nft_url}/addresses`,
        // 'https://friends-of-groot-default-rtdb.firebaseio.com/api/nft.json'
      )
      .pipe(
        map(res => {
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              this.nftRefs.push({ ...res[key]});//, id: key });
            }
          }
          return this.nftRefs;
        }
        ),
        tap(nftRefs => {
          console.log(nftRefs)
          this.nftService.nftsUpdated.next(nftRefs);
        })
      )
  }
 
  getNftById(id:string) {
    const Nfts = this.httpClient
      .get<Coin[]>(
        `${environment.nft_url}/coin/${id}`,
        // 'https://friends-of-groot-default-rtdb.firebaseio.com/api/nft.json'
      )
      .pipe(
        map(nfts => {
          return nfts.map(nft => {
            return {
              nft
              ,tokens: nft.tokens ? nft.tokens : []
            };
          });
        }
        ),
        tap(nfts => {
          this.nftService.nftsUpdated.next(nfts);
        })
      )
  }


}
