import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
// import { GrootComponent } from './components/groot/groot.component';
import { NftsComponent } from './components/crypto/nfts.component';
import { NftAddComponent } from './components/crypto/nft-add/nft-add.component'; 
import { BookComponent } from './components/book/book.component';
import { PhotosComponent } from './components/photos/photos.component';
import { ChainServersComponent } from './components/chain-servers/chain-servers.component';
import { ChainComponent } from './components/chain/chain/chain.component';
import { ChainsCardListComponent } from './components/chain/chains-card-list/chains-card-list.component';
import { ChainDialogComponent } from './components/chain/chain-dialog/chain-dialog.component';

import {SearchAddressesComponent} from './components/chain/search-addresses/search-addresses.component';
import { MaterialModule } from './material.module';

import { AboutComponent } from './components/layout/about/about.component';
import { MarvelComponent } from './components/marvel/marvel.component';
import { ContactusComponent } from './components/layout/contactus/contactus.component';
// import { GrootologueComponent } from './components/grootologue/grootologue.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
 
import { UsersComponent } from './components/users/users.component'; 
import { HomeComponent } from './components/layout/home.component';

const routes: Routes = [ 
 
  { path: '', component: HomeComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'register', component: RegisterComponent }, 
  { path : 'home', component : HomeComponent },
  { path:"search-addresses",    component: SearchAddressesComponent  },
  {  path: 'about',    component: AboutComponent  },
  { path: 'chains/:id',    component: ChainComponent  },

  { path : 'nfts', component : NftsComponent }, 
  { path : 'about', component : AboutComponent },
  { path : 'contact', component : ContactusComponent },
  // { path: 'servers', component: ChainServersComponent },
  // { path: 'marvel', component: MarvelComponent },
  // { path: 'marvel/:guardiansId', component: MarvelComponent },
  // {path : 'groot/:grootId', component : BookComponent},
 
  { path: 'users', component: UsersComponent },
  { path: 'tiles', component: PhotosComponent }, 
  // { path: 'tiles/:albumId', component: PhotosComponent }, 
  // { path: 'search', component: NewsArticleSearchComponent },
   
  // {path : 'grootologue', component : GrootologueComponent},
  {path : '**', redirectTo: '/' },

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
