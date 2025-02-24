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
  currUser: User;
  address: Address;
  email: string;
  nftData: any;

  addresses: Address[];
  subjectAddress = new Subject<Address>();

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
  saveNftsToAws(chain: string, address: string) {
    // this.currUser  = this.authStore.currentUserValue;
    this.email = localStorage.getItem('email');
    this.nftData = this.nftService.getNftCoin();
    console.log("nftData", this.nftData);
    this.address = { chain, address, email: this.email, coins: this.nftData }
    this.httpClient.post<Coin>(
      `${environment.nft_url}/coinNft`,
      // 'https://friends-of-groot-default-rtdb.firebaseio.com/api/nft.json',
      this.address
    )
      .pipe(
        tap(response => {
          this.address.id = response.id;
          console.log(this.address);
          this.nftService.nftsUpdated.next([this.address]);
        })
      )
      .subscribe();

  }
  savePersistedNfts(chain: string, address: string) {
    // this.currUser  = this.authStore.currentUserValue;
    this.email = localStorage.getItem('email');
    this.nftData = this.nftService.getNftCoin();
    console.log("nftData", this.nftData);
    this.address = { chain, address, email: this.email, coins: this.addresses.map(add => add.coins).flat() }
    this.httpClient.post<Address>(
      `${environment.nft_url}/addresses`,
      // 'https://friends-of-groot-default-rtdb.firebaseio.com/api/nft.json',
      this.address
    )
      .pipe(
        tap(response => {
          this.address.id = response.id;
          console.log(this.address);
          this.nftService.nftsUpdated.next([this.address]);
        })
      )
      .subscribe();

  }
  editPersistedAddress(id: number, changes) {
    // const nft = this.nftService.getNftData();
    const addresses = this.addresses;
    const addressId = addresses.find(address => address.id === id);
    const newAddress: Address = {
      ...changes
    };
    // const newAddresss: Address[] = addresss.map(address => {
    //   if (address.name === name) {
    //     return newAddress;
    //   } else {
    //     return address;
    //   }
    // });
    const newAddresses: Address[] = addresses.slice(0);
    newAddresses.splice(addresses.indexOf(addressId), 1, newAddress);
    this.subjectAddress.next(newAddress);
    this.address = newAddress;


    return this.httpClient
      .put<Address>(
        `${environment.nft_url}/addresses`,
        // `https://friends-of-groot-default-rtdb.firebaseio.com/api/nft/${name}.json`,
        changes)
      .pipe(
        catchError(err => {
          return throwError(err);
        }),
        tap(address => {
          this.nftService.addressUpdated.next(address);
        }),
        // shareReplay()
      )
    // .subscribe(response => {
    //   console.log(response);
    // } );
  }

  getAllAddresss() {
    return this.httpClient
      .get(
        `${environment.nft_url}/addresses`,
        // 'https://friends-of-groot-default-rtdb.firebaseio.com/api/nft.json'
      )
      .pipe(
        map(res => {
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              this.addresses.push({ ...res[key] });//, id: key });
            }
          }
          console.log(this.addresses);
          return this.addresses;
        }
        ),
        tap(addresss => {
          console.log(this.addresses)
          this.nftService.nftsUpdated.next(this.addresses);
        })
      )
  }

  getNftById(id: string) {
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
              , tokens: nft.tokens ? nft.tokens : []
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
