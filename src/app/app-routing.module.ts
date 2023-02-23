import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; 
import { NftsComponent } from './components/nft/nfts.component';
import { PhotosComponent } from './components/photos/photos.component';
import { ChainComponent } from './components/chain/chain/chain.component'; 

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
import { NftRefResolver } from './components/nft/nft-ref-resolver';
import { NftRefComponent } from './components/nft/nft-ref/nft-ref.component';
import { AdminuserComponent } from './components/users/adminuser.component'; 

const routes: Routes = [ 
 
  { path: '', component: HomeComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'register', component: RegisterComponent }, 

  { path : 'chains', component : HomeComponent },
  { path:"search-addresses",    component: SearchAddressesComponent  },
  {  path: 'about',    component: AboutComponent  },
  { path: 'chains/:id',    component: ChainComponent  }, 


  { path : 'nfts', component : NftsComponent },   
  { path: 'nft-ref/:name',    component: NftRefComponent, 
    resolve: {
        nftRef: NftRefResolver
    }  },
  { path : 'contact', component : ContactusComponent },
  // { path: 'servers', component: ChainServersComponent }, 
 
  { path: 'user/:email', component: UsersComponent, canActivate: [UserGuardService]  },
  { path: 'admin/users', component: AdminuserComponent, canActivate:[AdminGuardService] },
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
