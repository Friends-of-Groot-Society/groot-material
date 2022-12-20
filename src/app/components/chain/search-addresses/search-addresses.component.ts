import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Chain} from '../../../models/Chain';
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
  concatAll, shareReplay
} from 'rxjs/operators';
import {merge, fromEvent, Observable, concat} from 'rxjs';
import {Address} from '../../../models/Address';
import {ChainService} from '../../../services/chain-service';


@Component({
  selector: 'app-search-addresses',
  templateUrl: './search-addresses.component.html',
  styleUrls: ['./search-addresses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchAddressesComponent implements OnInit {

  searchResults$ : Observable<Address[]>;
  address:Address;
  activeAddress:Address;

  constructor(private chainService: ChainService) { }

  ngOnInit(): void {
  }

  onSearch(search:string) {
    this.searchResults$  = this.chainService.searchAddresses(search);
}

openAddress(address:Address) {
  this.activeAddress= address;
}

onBackToSearch() {
  this.activeAddress = null;
}
}
