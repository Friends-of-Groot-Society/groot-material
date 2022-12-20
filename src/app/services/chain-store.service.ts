import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, Subject, throwError, timer } from 'rxjs';

import { catchError, delayWhen, filter, map, shareReplay, tap, withLatestFrom } from 'rxjs/operators';
import { createHttpObservable } from '../utility/observable';
import { Chain } from '../models/Chain';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoaderService } from '../components/layout/loader/loader.service';
@Injectable({
    providedIn: 'root'
})


export class ChainStore {
    selectAddressesByChainId(id: number): any {
      throw new Error('Method not implemented.');
    }

    private subjectChain = new BehaviorSubject<Chain[]>([]);

    chains$: Observable<Chain[]> = this.subjectChain.asObservable();

    constructor(
        private httpClient: HttpClient,
        private loaderService: LoaderService,

    ) {
        // this.init();
        this.loadAllChains();
    }

    private loadAllChains() {
        const loadChains$ = this.httpClient.get<Chain[]>(`${environment.nft_url}/api/chains`)
            .pipe(
                map(res => res['data']), 
                catchError(err => {
                    console.log('error in source. Details: ' + err);
                    return throwError(() => 'error in source. Details: ' + err);
                }),
                tap(chains => this.subjectChain.next(chains)),
            )
        this.loaderService.showLoaderUntilCompleted(loadChains$).subscribe();
    }

    selectAllChains() {
        console.log("chainsSelct")
        console.log(this.chains$.subscribe())
        return this.noFilter();
    }
    selectEthereumChains() {
        return this.filterByChainName('ETHEREUM');
    }

    selectPolygonChains() {
        return this.filterByChainName('POLYGON');
    }

    selectChainById(chainId: number) {
        return this.chains$
            .pipe(
                map(chains => chains.find(chain => +chain.id == chainId)),
                filter(chain => !!chain)

            );
    }
    noFilter() {
        return this.chains$;
    }
 

    saveChain(chainId: number, changes): Observable<any> {

        const chains = this.subjectChain.getValue();

        const chainIndex = chains.findIndex(chain => +chain.id == chainId);

        const newChain: Chain = {
            ...chains[chainIndex],
            ...changes
        };

        const newChains: Chain[] = chains.slice(0);
        newChains[chainIndex] = newChain;

        this.subjectChain.next(newChains);

        return this.httpClient.put(`${environment.nft_url}/api/chains/${chainId}`, changes)
            .pipe(
                catchError(err => {

                    return throwError(err);
                }),
                shareReplay()
        // return from(fetch(`/api/chains/${chainId}`, {
        //     method: 'PUT',
        //     body: JSON.stringify(changes),
        //     headers: {
        //         'content-type': 'application/json'
        //     }
        // }));
            )
    }

    filterByChainName(searchTerm: string): Observable<Chain[]> {
        return this.chains$
        .pipe(
            map(chains => 
                chains.filter(chain => chain.name == searchTerm) 
            )) 
            }
  
    init() {
        const baseUrl = environment.nft_url;
        const http$ = createHttpObservable(`${baseUrl}/chains`);
        console.log(this.chains$.subscribe())
        http$
            .pipe(
                tap(() => console.log('HTTP request executed')),
                map(res => Object.values(res['data']))
            )
            .subscribe(
                chains => this.subjectChain.next(chains)
            );
    }


}


