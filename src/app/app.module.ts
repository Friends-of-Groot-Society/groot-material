import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
// DEVELOPMENT/PROD URL (replace file in angular.json) 
import { environment } from '../environments/environment';
 

// GROOT-MARVEL 
import { PhotosComponent } from './components/photos/photos.component'; 
 
// SERVICES
import { StoreModule } from '@ngrx/store';
 
// LAYOUT 
import { AboutComponent } from './components/layout/about/about.component'; 
import { ContactusComponent } from './components/layout/contactus/contactus.component';
import { FooterComponent } from './components/layout/footer.component';
import { HomeComponent } from './components/layout/home.component';
import { MenuComponent } from './components/layout/menu.component';
import { SidenavListComponent } from './components/layout/sidenav-list/sidenav-list.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { MaterialModule } from './material.module';

// import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { AlertComponent } from './utility/alert.component';
import { ChainServersComponent } from './components/chain-servers/chain-servers.component';
import { ConsoleComponent } from './components/chain-servers/console/console.component';
import { ChainComponent } from './components/chain/chain/chain.component';
import { ChainsCardListComponent } from './components/chain/chains-card-list/chains-card-list.component';
import { ChainDialogComponent } from './components/chain/chain-dialog/chain-dialog.component';
import { NftsComponent } from './components/nft/nfts.component';
import { NftComponent } from './components/nft/nft/nft.component';
import { NftAddComponent } from './components/nft/nft-add/nft-add.component';
import { ChaindataComponent } from './components/nft/chaindata/chaindata.component';
// import { reducers } from './reducers/app.reducer';
import { LoaderService } from './components/layout/loader/loader.service';
import { LoaderComponent } from './components/layout/loader/loader.component';
import { ServerComponent } from './components/chain-servers/server/server.component'; 
import { UsersComponent } from './components/users/users.component';
import { AddressComponent } from './components/chain/address/address.component';
import { SearchAddressesComponent } from './components/chain/search-addresses/search-addresses.component';
import { PipeUppercase } from './utility/pipe-uppercase.pipe';
import { UpperCasePipe } from '@angular/common';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { NftCardListComponent } from './components/nft/nft-card-list/nft-card-list.component';
import { NftDialogComponent } from './components/nft/nft-dialog/nft-dialog.component';
import { NftRefComponent } from './components/nft/nft-ref/nft-ref.component';
import { NftRefResolver } from './components/nft/nft-ref-resolver';
@NgModule({
  declarations: [
    AppComponent,
    // GrootComponent,
    PhotosComponent, 
    LoginComponent,
    RegisterComponent,  
    AboutComponent, 
    SidenavListComponent,
    MenuComponent,
    ContactusComponent, 
    FooterComponent, 
    UsersComponent,
    AlertComponent,
    ChainServersComponent,
    ConsoleComponent,
    ChainComponent,
    ServerComponent,
    NftsComponent,
    NftComponent,
    NftAddComponent,
    ChaindataComponent,
    LoaderComponent,
    HomeComponent,
    ChainsCardListComponent,
    ChainDialogComponent,
    AddressComponent,
    SearchAddressesComponent,
    PipeUppercase,
    NftCardListComponent,
    NftDialogComponent,
    NftRefComponent, 
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    BrowserAnimationsModule, provideFirebaseApp(() => initializeApp(environment.firebase)), provideAuth(() => getAuth()), provideDatabase(() => getDatabase()), provideFirestore(() => getFirestore()), provideFunctions(() => getFunctions()),
    // StoreModule.forRoot( reducers ),
  ],
  providers: [  
    LoaderService,
    UpperCasePipe,
    NftRefResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 