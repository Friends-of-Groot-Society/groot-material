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
import { StarwarsComponent } from './components/starwars/starwars.component';
import { MarvelComponent } from './components/marvel/marvel.component';
import { BookComponent } from './components/book/book.component'; 
  
// SERVICES
import { BookService } from './services/book.service';
import { GrootService } from './services/groot.service'; 
import { StoreModule } from '@ngrx/store';
 
// LAYOUT 
import { SidenavListComponent } from './components/layout/sidenav-list/sidenav-list.component';
import { MenuComponent } from './components/layout/menu.component';
import { ContactusComponent } from './components/layout/contactus/contactus.component';
import { AboutComponent } from './components/layout/about/about.component'; 
import { FooterComponent } from './components/layout/footer.component';
import { MaterialModule } from './material.module';

// import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { UsersComponent } from './components/users/users.component';
import { ChainServersComponent } from './components/chain-servers/chain-servers.component';
import { ChainComponent } from './components/chain-servers/chain/chain.component';
import { ServerComponent } from './components/chain-servers/server/server.component'; 
import { AlertComponent } from './utility/alert.component';
import { NftsComponent } from './components/crypto/nfts.component';
import { NftComponent } from './components/crypto/nft/nft.component';
import { NftAddComponent } from './components/crypto/nft-add/nft-add.component';
import { ChaindataComponent } from './components/crypto/chaindata/chaindata.component';
import { reducers } from './reducers/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    // GrootComponent,
    PhotosComponent,
    StarwarsComponent,
    // MatFormField,
    MarvelComponent,
    AboutComponent, 
    SidenavListComponent,
    MenuComponent,
    ContactusComponent, 
    FooterComponent,
    BookComponent, 
    UsersComponent,
    AlertComponent,
    ChainServersComponent,
    ChainComponent,
    ServerComponent,
    NftsComponent,
    NftComponent,
    NftAddComponent,
    ChaindataComponent 
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    BrowserAnimationsModule,
    StoreModule.forRoot( reducers ),
  ],
  providers: [ 
    BookService,
    GrootService, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
////////////////////////////////////////////////////////
// 5fbd9e22b0c348faa25fd3d07bee8248

// private key
// dce73dc128d232d3a6c22decdf3b5f272bbc5178

// http(s)://gateway.marvel.com/.
// GET /v1/public/charactersFetches lists of characters.
// GET /v1/public/characters/{characterId}
// GET /v1/public/characters/{characterId}/series
// GET /v1/public/stories/{storyId}/characters

// GET /v1/public/comics/{comicId}/characters

// 	Request Url: http://gateway.marvel.com/v1/public/comics
// 	Request Method: GET
// 	Params: {
// 	  "apikey": "your api key",
// 	  "ts": "a timestamp",
// 	  "hash": "your hash"
// 	}
// 	Headers: {
// 	  Accept: */*
// 	}
// Initial response:

// Status Code: 200
// Access-Control-Allow-Origin: *
// Date: Wed, 18 Dec 2013 22:00:55 GMT
// Connection: keep-alive
// ETag: f0fbae65eb2f8f28bdeea0a29be8749a4e67acb3
// Content-Length: 54943
// Content-Type: application/json


// 	Subsequent request:

// 	Request Url: http://gateway.marvel.com/v1/public/comics
// 	Request Method: GET
// 	Params: {
// 	  "apikey": "your api key",
// 	  "ts": "a timestamp",
// 	  "hash": "your hash"
// 	}
// 	Headers: {
// 	  Accept: */*
// 	  If-None-Match: f0fbae65eb2f8f28bdeea0a29be8749a4e67acb3
// 	}


// Subsequent response:

// Status Code: 304
// Access-Control-Allow-Origin: *
// Date: Wed, 18 Dec 2013 22:03:20 GMT
// Connection: keep-alive
// ETag: f0fbae65eb2f8f28bdeea0a29be8749a4e67acb3

// 	Cross-origin requests and JSONP
// 	Responses returned by the Marvel Comics API are compliant with the W3C CORS specification, which allows any properly-authorized requests to be made from any origin domain. This means that you should not need to wrap calls in JSONP callbacks in order to make calls from browser-based applications. If you do prefer to use JSONP, however, all endpoints will accept a callback parameter to all endpoints that will wrap results in a JSONP wrapper.

// 	Examples
// 	Without a callback:

// 	Request: GET http://gateway.marvel.com/v1/public/comics?apikey=yourAPIKEY
// 	Response:
// 	{
// 	  "code": 200,
// 	  "status": "Ok",
// 	  "etag": "f0fbae65eb2f8f28bdeea0a29be8749a4e67acb3",
// 	  "data": {
// 	  … [other data points]
// 	}

// "thumbnail": {
//   "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73",
//   "extension": "jpg"
// }

