import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap, catchError } from 'rxjs/operators';

import { Chain } from 'src/app/models/Chain';
import { NftRef } from '../models/NftRef';
import { Nft } from '../models/Nft';
import { User } from '../models/User';
import { NftsService } from '../components/nft/nfts.service';
import { AuthStore } from './auth/auth-store.service';
import { AdminAuthenticationService } from './auth/admin-authentication.service';
import { Subject, throwError } from 'rxjs';
import { shareReplay } from 'rxjs-compat/operator/shareReplay';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  currUser : User; 
  nftRef: NftRef;
  nftRefs = [];
  subjectNftRef = new Subject<NftRef>();

  constructor(
    private httpClient: HttpClient,
    private authStore: AuthStore,
    private adminAuth: AdminAuthenticationService,
    private nftService: NftsService,
  ) { }

  savePersistedNfts(chain: string, address: string) {
    this.currUser  = this.authStore.currentUserValue;
    let email = this.currUser.email;
    this.nftRef = {email, chain, address}
    this.httpClient.post<NftRef>(
      'https://friends-of-groot-default-rtdb.firebaseio.com/api/nft.json',
      this.nftRef
    )
    .pipe(
      tap(response => {
        this.nftRef.name = response.name;
        console.log(this.nftRef);
        // this.nftService.nftsUpdated.next(this.nftRef);
      })
    )
    .subscribe();
      
  }
  editPersistedNftRef(name: string, changes) {
    // const nft = this.nftService.getNftData(); 
    const nftRefs = this.nftRefs;
    const nftRef  = nftRefs.find(nftRef => nftRef.name === name);
    const newNftRef: NftRef = {
      ...nftRef,
      ...changes
    };
    // const newNftRefs: NftRef[] = nftRefs.map(nftRef => {
    //   if (nftRef.name === name) {
    //     return newNftRef;
    //   } else {
    //     return nftRef;
    //   }
    // });
  const  newNftRefs: NftRef[] = nftRefs.slice(0);
    newNftRefs.splice(nftRefs.indexOf(nftRef), 1, newNftRef);
    this.subjectNftRef.next(newNftRef);
    this.nftRefs = newNftRefs;


    return this.httpClient
    .put<NftRef>(
      `https://friends-of-groot-default-rtdb.firebaseio.com/api/nft/${name}.json`,
      changes)
      .pipe(
        catchError(err => {
          return throwError(err);
        }),
        tap(nftRef => {
          this.nftService.nftRefsUpdated.next(nftRef);
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
        'https://friends-of-groot-default-rtdb.firebaseio.com/api/nft.json'
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
  getAllNfts(id:string) {
    const Nfts = this.httpClient
      .get<Nft[]>(
        'https://friends-of-groot-default-rtdb.firebaseio.com/api/nft.json'
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
