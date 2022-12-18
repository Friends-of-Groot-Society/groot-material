import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chain } from '../../../models/Chain';
import {
  debounceTime,
  distinctUntilChanged,
  startWith,
  tap,
  delay,
  map,
  concatMap,
  switchMap,
  withLatestFrom,
  concatAll, shareReplay, catchError
} from 'rxjs/operators';
import { merge, fromEvent, Observable, concat, throwError, combineLatest } from 'rxjs';
import { Address } from '../../../models/Address';
import { ChainStore } from '../../../utility/chain-store.service';

interface ChainData {
  chain: Chain;
  addresses: Address[];
}

@Component({
  selector: 'app-chain',
  templateUrl: './chain.component.html',
  styleUrls: ['./chain.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChainComponent implements OnInit {

  data$: Observable<ChainData>;

  constructor(
    private route: ActivatedRoute,
    private chainStore: ChainStore
  ) {

  }


  ngOnInit(): void {
    // this.data$ = this.route.params.pipe(
    //   map(params => params['chainId']),
    //   tap(chainId => console.log(chainId)),
    //   switchMap(chainId => this.chainStore.selectChainById(chainId)),
    //   tap(chain => console.log(chain)),
    //   switchMap(chain => this.chainStore.selectAddressesByChainId(chain.id)),
    //   tap(addresses => console.log(addresses)),
    //   map(addresses => ({addresses, chain})),
    //   tap(chainData => console.log(chainData)),
    //   shareReplay(1)
    // );
    const chainId = parseInt(this.route.snapshot.paramMap.get('chainId'));
    const chain$ = this.chainStore.selectChainById(chainId)
      .pipe(
        catchError(err => throwError(() => new Error('Chain not found'))))
    const addresses$ = this.chainStore.selectAddressesByChainId(chainId)
      .pipe(
        startWith([])
      );
    this.data$ = combineLatest([chain$, addresses$])
      .pipe(
        // map(([chain, addresses]) => {
          map(([  addresses]) => {
            return { addresses }
          // return { chain, addresses }
        }),
        tap(console.log)
      )
  }

}
