import { Component, OnInit, EventEmitter , Output, OnDestroy} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
 
import { ActivatedRoute } from '@angular/router';
 


@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit { // }, OnDestroy {
  @Output() closeSidenav = new EventEmitter<void>();

  variable = ''; 

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute, 
    ) { }

  ngOnInit() {
    this.variable = this.route.snapshot.params['name']; 
  }


  onClose() {
    this.closeSidenav.emit();
  }
 
}
