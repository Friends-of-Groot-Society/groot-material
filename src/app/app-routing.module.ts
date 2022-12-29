import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; 
import { NftsComponent } from './components/nft/nfts.component';
import { NftAddComponent } from './components/nft/nft-add/nft-add.component';  
import { PhotosComponent } from './components/photos/photos.component';
import { ChainServersComponent } from './components/chain-servers/chain-servers.component';
import { ChainComponent } from './components/chain/chain/chain.component';
import { ChainsCardListComponent } from './components/chain/chains-card-list/chains-card-list.component';
import { ChainDialogComponent } from './components/chain/chain-dialog/chain-dialog.component';

import {SearchAddressesComponent} from './components/chain/search-addresses/search-addresses.component';
import { MaterialModule } from './material.module';

import { AboutComponent } from './components/layout/about/about.component';
import { ContactusComponent } from './components/layout/contactus/contactus.component'; 
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
 
import { UsersComponent } from './components/users/users.component'; 
import { HomeComponent } from './components/layout/home.component';
import { UserGuardService } from './services/auth/user-guard.service'
import { AdminGuardService } from './services/auth/admin-guard.service';

import { NftCardListComponent } from './components/nft/nft-card-list/nft-card-list.component';
const routes: Routes = [ 
 
  { path: '', component: NftCardListComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'register', component: RegisterComponent }, 
  { path : 'home', component : HomeComponent },
  { path:"search-addresses",    component: SearchAddressesComponent  },
  {  path: 'about',    component: AboutComponent  },
  { path: 'nftRef/:name',    component: NftCardListComponent  },
  { path: 'chains/:id',    component: ChainComponent  }, 
  { path : 'nfts', component : NftsComponent },  
  { path : 'contact', component : ContactusComponent },
  // { path: 'servers', component: ChainServersComponent }, 
 
  { path: 'users', component: UsersComponent, canActivate: [UserGuardService]  },
  { path: 'admin/users', component: UsersComponent, canActivate:[AdminGuardService] },
  { path: 'members', component: PhotosComponent, canActivate:[UserGuardService] }, 
  // { path: 'tiles/:albumId', component: PhotosComponent },   
  {path : '**', redirectTo: '' },

]; 
@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule,
    MaterialModule
  ],
  exports: [RouterModule], 
  declarations: []
})
export class AppRoutingModule { }
