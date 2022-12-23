import { Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthStore } from 'src/app/services/auth/auth-store.service';
import { AdminAuthenticationService } from 'src/app/services/auth/admin-authentication.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {  
  @Output() sidenavToggle = new EventEmitter<void>();
  variable: string = '';
  isAuth$: Observable<boolean> | undefined;

  constructor(
    private route: ActivatedRoute,
    public authStore: AuthStore, 
    public adminAuth: AdminAuthenticationService
  ) { }

  ngOnInit() {
    this.variable = this.route.snapshot.params['name'];

  }
  logout() {
    this.authStore.logout();
    this.adminAuth.logout();
  }
  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

}
