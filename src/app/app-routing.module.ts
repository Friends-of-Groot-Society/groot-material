import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
// import { GrootComponent } from './components/groot/groot.component';
import { NftsComponent } from './components/crypto/nfts.component';
import { NftAddComponent } from './components/crypto/nft-add/nft-add.component'; 
import { BookComponent } from './components/book/book.component';
import { PhotosComponent } from './components/photos/photos.component';
import { ChainServersComponent } from './components/chain-servers/chain-servers.component';
import { ChainComponent } from './components/chain-servers/chain/chain.component';

import { AboutComponent } from './components/layout/about/about.component';
import { MarvelComponent } from './components/marvel/marvel.component';
import { ContactusComponent } from './components/layout/contactus/contactus.component';
// import { GrootologueComponent } from './components/grootologue/grootologue.component';
// import { LoginComponent } from './components/users/login/login.component';
// import { RegisterComponent } from './components/users/register/register.component';
 
import { UsersComponent } from './components/users/users.component'; 

const routes: Routes = [ 

  // { path: '', component: GrootComponent },
  { path: '', component: NftsComponent },
  { path: 'add-nft', component: NftAddComponent },
  {path : 'about', component : AboutComponent},
  {path : 'contact', component : ContactusComponent},
  {path: 'servers', component: ChainServersComponent},
  // { path: 'marvel', component: MarvelComponent },
  // { path: 'marvel/:guardiansId', component: MarvelComponent },
  // {path : 'groot/:grootId', component : BookComponent},
 
  // { path: 'members', component: UsersComponent },
  { path: 'tiles/:albumId', component: PhotosComponent }, 
  // { path: 'search', component: NewsArticleSearchComponent },
   
  // {path : 'grootologue', component : GrootologueComponent},
  // {path : '*', redirectTo: '', pathMatch: 'full'},

]; 
@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule], 
  declarations: []
})
export class AppRoutingModule { }
