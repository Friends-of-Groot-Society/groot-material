import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NftsComponent } from './components/nft/nfts.component'; 
import { ChainComponent } from './components/chain/chain/chain.component';
import { LandingComponent } from './components/layout/landing/landing.component';

import { SearchAddressesComponent } from './components/chain/search-addresses/search-addresses.component';
import { MaterialModule } from './material.module';
 
import { ContactusComponent } from './components/layout/contactus/contactus.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';

import { UsersComponent } from './components/users/users.component';
import { HomeComponent } from './components/layout/home.component';
import { UserGuardService } from './services/auth/user-guard.service'
import { AdminGuardService } from './services/auth/admin-guard.service';
import { AddressResolver } from './components/nft/address-resolver';
import { AddressComponent } from './components/nft/address/address.component';
import { AdminuserComponent } from './components/users/adminuser.component';
import { ProtoCoinsComponent } from './components/dashboard/proto-coins/proto-coins.component';

const routes: Routes = [

  { path: '', component: ProtoCoinsComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'chains', component: ChainComponent },
  { path: 'chains/:id', component: ChainComponent },

  { path: 'LandingComponent', component: LandingComponent },
  { path: 'LandingComponent/:id', component: LandingComponent },


  { path: 'home', component: HomeComponent },

  { path: 'nfts', component: NftsComponent },
  { path: "search-addresses", component: SearchAddressesComponent }, 
 { path: 'addresses', component: AddressComponent}, 
  {
    path: 'addresses/:name', component: AddressComponent,
    resolve: {
      nftRef: AddressResolver
    }
  },
  { path: 'contact', component: ContactusComponent },
  // { path: 'servers', component: ChainServersComponent }, 

  { path: 'users', component: UsersComponent },//, canActivate: [AdminGuardService, UserGuardService] },
  { path: 'users/:email', component: UsersComponent },//, canActivate: [AdminGuardService, UserGuardService] },
  
  { path: 'admin/users', component: AdminuserComponent },//, canActivate: [AdminGuardService, UserGuardService] },
  { path: 'admin/users/:email', component: AdminuserComponent },//, canActivate: [AdminGuardService, UserGuardService] }, 
  // { path: 'tiles/:albumId', component: PhotosComponent },   
  { path: '**', redirectTo: '' },

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
