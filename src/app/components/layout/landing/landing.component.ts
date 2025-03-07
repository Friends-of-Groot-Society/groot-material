import { Component, Input, Output, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { CommonModule, NgFor } from '@angular/common';
import { Address } from '../../../models/Address';
import { AddressService } from '../../../../../cryptomaven-ui/src/app/services/address.service';
import { Coin } from '../../../models/Coin';  
import { environment } from 'src/environments/environment'; 

@Component({
  selector: 'app-places',
  // standalone: true,
  // imports: [],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  // providers: [AddressService],
})
 
export class LandingComponent {
  @Input()
  landings: Address[] | undefined;

  @Output()x
  selectedLanding: Address | undefined;
  // selectedLanding: EventEmitter<Address> = new EventEmitter<Address>();

  userCoins: Subject<Coin[]> = new Subject<Coin[]>();
  baseUrl: string;
  coins: Coin[] = [];

  constructor(@Inject(AddressService) private addressService: AddressService ) { }
  ngOnInit() {
    this.baseUrl = environment.nft_url;
    this.addressService.loadUserCoins("1", "error from LandingComponent NgOniti").subscribe(coins => {
      this.userCoins.next(coins);
    });
  }

  onSelectCoin(coin: Coin) {
    const subscription = this.addressService.editCoinFromUserCoins(coin, "1").subscribe({
      next: (coin) => {
        console.log('coin edited from user coins');
        console.log(coin);
      },
      error: (error) => {
        console.log('error adding coin to user coins');
      }
    });

  }

  }
 
  