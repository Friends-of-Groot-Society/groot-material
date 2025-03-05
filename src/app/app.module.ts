import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
// DEVELOPMENT/PROD URL (replace file in angular.json) 
import { environment } from '../environments/environment';
import { MatDialogModule } from '@angular/material/dialog'; 
 
// SERVICES
import { StoreModule } from '@ngrx/store'; 
// LAYOUT  
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
import { UsersComponent } from './components/users/users.component';
import { AddressComponent } from './components/nft/address/address.component';
import { SearchAddressesComponent } from './components/chain/search-addresses/search-addresses.component';
import { PlacesContainerComponent } from './components/layout/landing/places-container/places-container.component';
import { PipeUppercase } from './utility/pipe-uppercase.pipe';
import { SafeHtmlPipe } from './utility/safe-html.pipe';
import { UpperCasePipe } from '@angular/common';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { NftCardListComponent } from './components/nft/nft-card-list/nft-card-list.component';
import { NftDialogComponent } from './components/nft/nft-dialog/nft-dialog.component'; 
import { AddressResolver } from './components/nft/address-resolver';
import { UserGuardService } from '../../cryptomaven-ui/src/app/services/auth/user-guard.service';
import { ErrorService } from './shared/error.service';
import { AdminuserComponent } from './components/users/adminuser.component';
import { AvailableChainsComponent } from './components/layout/landing/available-chains/available-chains.component';
import { UserCoinsComponent } from './components/layout/landing/user-coins/user-coins.component';
 import {ErrorModalComponent} from './shared/modal/error-modal/error-modal.component';
 import {NewProtoCoinComponent} from './components/dashboard/proto-coins/new-proto-coin/new-proto-coin.component';

import { ModalComponent } from './shared/modal/modal.component';
import { ControlComponent } from './shared/control/control.component';
import { ButtonComponent } from './shared/button/button.component';
 
 
@NgModule({
  declarations: [ 
    ModalComponent, 
    ControlComponent , 
    ButtonComponent,
    AvailableChainsComponent,
    UserCoinsComponent,
    NewProtoCoinComponent,
    UsersComponent, 
    AppComponent,  
    LoginComponent,
    RegisterComponent,   
    SidenavListComponent,
    MenuComponent,
    ContactusComponent, 
    FooterComponent,  
    AlertComponent, 
    ChainComponent, 
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
    AdminuserComponent, 
    SafeHtmlPipe,
    UsersComponent, 
    AppComponent,   
    LoginComponent,
    RegisterComponent,   
    SidenavListComponent,
    MenuComponent,
    ContactusComponent, 
    FooterComponent, 
    UsersComponent,
    AlertComponent, 
    ChainComponent, 
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
    AddressComponent,
    AdminuserComponent, 
    SafeHtmlPipe,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    AvailableChainsComponent, UserCoinsComponent, ErrorModalComponent,
    BrowserAnimationsModule, 
    provideFirebaseApp(() => initializeApp(environment.firebase)), 
    provideAuth(() => getAuth()), 
    provideDatabase(() => getDatabase()), 
    provideFirestore(() => getFirestore()), 
    provideFunctions(() => getFunctions()),
    // StoreModule.forRoot( reducers ),    
  ],
  providers: [  
    // ChainService, 
    //   ChainStore,
    //    AddressService,
    LoaderService,
    UpperCasePipe,
    AddressResolver,
    UserGuardService,
    SafeHtmlPipe,
    LoaderService, 
    ErrorService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ MatDialogModule]
})
export class AppModule { }
 