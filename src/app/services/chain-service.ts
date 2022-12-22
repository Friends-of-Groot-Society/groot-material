import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Chain} from '../models/Chain';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import { Address } from '../models/Address';
import {environment} from '../../environments/environment';


@Injectable({
    providedIn:'root'
})
export class ChainService {
 

    constructor(private http:HttpClient) {

    }

    loadChainById(chainId:number) {
       return this.http.get<Chain>(`${environment.nft_url}/api/chains/${chainId}`)
            .pipe(
              shareReplay()
            );
    }

    loadAllChainAddresses(chainId:number): Observable<Address[]> {
        return this.http.get<Address[]>(`${environment.nft_url}/api/addresses`, {
            params: {
                pageSize: "10000",
                chainId: chainId.toString()
            }
        })
            .pipe(
                map(res => res["data"]),
                shareReplay()
            );
    }

    loadAllChains(): Observable<Chain[]> {
        return this.http.get<Chain[]>(`${environment.nft_url}/api/chains`)
            .pipe(
                map(res => res["data"]),
                shareReplay()
            );
    }


    saveChain(chainId:string, changes: Partial<Chain>):Observable<any> {
        return this.http.put(`${environment.nft_url}/api/chains/${chainId}`, changes)
            .pipe(
                shareReplay()
            );
    }


    searchAddresses(search:string): Observable<Address[]> {
        return this.http.get<Address[]>(`/api/addresses`, {
            params: {
                filter: search,
                pageSize: "100"
            }
        })
            .pipe(
                map(res => res["data"]),
                shareReplay()
            );
    }


}







