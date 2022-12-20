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
import { ChainService } from '../../../services/chain-service';

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
    private chainService: ChainService
  ) {

  }


  ngOnInit(): void {
 
    const chainId = parseInt(this.route.snapshot.paramMap.get('chainId'));
    const chain$ = this.chainService.loadChainById(chainId)
      .pipe(
        catchError(err => throwError(() => new Error('Chain not found'))))
    const addresses$ = this.chainService.loadAllChainAddresses(chainId)
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
