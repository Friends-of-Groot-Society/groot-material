import { Component, HostListener,  inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { SET_MENU_STATE } from './reducers/menu-reducer'; 
import { LoaderService } from './components/layout/loader/loader.service';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { ErrorService } from './shared/error.service';
import { ErrorModalComponent } from './shared/modal/error-modal/error-modal.component';
import { AvailableChainsComponent } from './components/layout/landing/available-chains/available-chains.component';
import { UserCoinsComponent } from './components/layout/landing/user-coins/user-coins.component';
 
@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], 
  providers: [LoaderService, ErrorService]

})
export class AppComponent {
  menuOpen: boolean = false;
  title = 'Friends of Groot Society';
  showLoadingIndicator = true;

  private errorService = inject(ErrorService); 
  error = this.errorService.error;


  constructor(

    // private store: Store<any>,
  ) {
    // store.pipe(select('menuState'))
    //   .subscribe(menuOpen => {
    //     this.menuOpen = menuOpen;
    //   })
  }

@HostListener('document:click', ['$event'])
  public onClick(event: { target: { className: string | string[]; }; }) {
    const isOutside = !event.target.className.includes("menu-button") &&
      !event.target.className.includes("material-icons") &&
      !event.target.className.includes("mat-drawer-inner-container")
    if (isOutside) {
      this.menuOpen = false;
      // this.store.dispatch({ type: SET_MENU_STATE, payload: this.menuOpen });
    }
  }
          // constructor(private _router: Router) {
          //   this._router.events.subscribe((routerEvent: Event) => {
          //     if(routerEvent instanceof NavigationStart) {
          //       this.showLoadingIndicator = true;
          //     }
          //     if(routerEvent instanceof NavigationEnd || 
          //       routerEvent instanceof NavigationCancel || 
          //       routerEvent instanceof NavigationError) {
          //       this.showLoadingIndicator = false;
          //     }
          //   });
          //   const array = [1,2,3];
          // }
}