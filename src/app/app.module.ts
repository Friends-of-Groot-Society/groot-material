import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { GrootComponent } from './components/groot/groot.component';
import { PhotosComponent } from './components/photos/photos.component';


import { StarwarsComponent } from './components/starwars/starwars.component';
import { MarvelComponent } from './components/marvel/marvel.component';
import { AboutComponent } from './components/about/about.component';
import { GrootedexComponent } from './components/grootedex/grootedex.component';
import { ContactusComponent } from './components/contactus/contactus.component';
 
import { GrootService } from './services/groot.service';
import { NavComponent } from './components/layout/nav/nav.component';
@NgModule({
  declarations: [
    AppComponent,
    GrootComponent,
    PhotosComponent,
    StarwarsComponent,
    MarvelComponent,
    AboutComponent,
    GrootedexComponent,
    ContactusComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ 
    GrootService
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

