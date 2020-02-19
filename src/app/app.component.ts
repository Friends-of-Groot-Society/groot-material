import { Component, HostListener } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { SET_MENU_STATE } from './reducers/menu-reducer';

// import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuOpen: boolean;
  title = 'Friends of Groot Society';
  showLoadingIndicator = true;

  constructor(
    private store: Store<any>,
  ) {
    store.pipe(select('menuState'))
      .subscribe(menuOpen => {
        this.menuOpen = menuOpen;
      })
  }

@HostListener('document:click', ['$event'])
  public onClick(event) {
    const isOutside = !event.target.className.includes("menu-button") &&
      !event.target.className.includes("material-icons") &&
      !event.target.className.includes("mat-drawer-inner-container")
    if (isOutside) {
      this.menuOpen = false;
      this.store.dispatch({ type: SET_MENU_STATE, payload: this.menuOpen });
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