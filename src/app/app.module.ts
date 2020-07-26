import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor } from './helpers';
import { TitleCasePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
  
// DEVELOPMENT/PROD URL (replace file in angular.json) 
import { environment } from '../environments/environment';

// NEWS
import { NewsPageComponent } from './components/news-page/news-page.component';
import { NewsArticleSearchComponent } from './components/news-article-search/news-article-search.component';
import { NewsArticleResultsComponent } from './components/news-article-results/news-article-results.component';
import { NewsToolBarComponent } from './components/news-tool-bar/news-tool-bar.component';

// GROOT-MARVEL
import { GrootComponent } from './components/groot/groot.component';
import { PhotosComponent } from './components/photos/photos.component'; 
import { StarwarsComponent } from './components/starwars/starwars.component';
import { MarvelComponent } from './components/marvel/marvel.component';
import { BookComponent } from './components/book/book.component'; 
import { GrootologueComponent } from './components/grootologue/grootologue.component';

// LAYOUT
import { NavComponent } from './components/layout/nav/nav.component';
import { ContactusComponent } from './components/layout/contactus/contactus.component';
import { AboutComponent } from './components/layout/about/about.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';

// SERVICES
import { BookService } from './services/book.service';
import { GrootService } from './services/groot.service';
import { NewsService } from './services/news.service';
import { PipeCapitalizeCategoryPipe } from './utility/pipe-capitalize-category.pipe';

// STORE
import { StoreModule } from '@ngrx/store';
import {  reducers} from './reducers'; //, metaReducers 


import { LayoutModule } from '@angular/cdk/layout';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
// import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatNativeDateModule } from '@angular/material/core';
import { UsersComponent } from './components/users/users.component';
import { AlertComponent } from './utility/alert.component'; 

@NgModule({
  declarations: [
    AppComponent,
    GrootComponent,
    PhotosComponent,
    StarwarsComponent,
    MarvelComponent,
    AboutComponent,
    GrootologueComponent,
    ContactusComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    BookComponent,
    NewsPageComponent,
    NewsArticleSearchComponent,
    NewsArticleResultsComponent,
    NewsToolBarComponent,
    PipeCapitalizeCategoryPipe,
    UsersComponent,
    AlertComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    LayoutModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatSelectModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    StoreModule.forRoot(reducers
    //  ,{
    //   metaReducers,
    //   runtimeChecks: {
    //     strictStateImmutability: true,
    //     strictActionImmutability: true
    //   }
    // }
    )
  ],
  providers: [ 
    BookService,
    GrootService,
    NewsService,
    TitleCasePipe,
     { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
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

