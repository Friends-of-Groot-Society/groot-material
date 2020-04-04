import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrootComponent } from './components/groot/groot.component';
import { BookComponent } from './components/book/book.component';
import { PhotosComponent } from './components/photos/photos.component';

import { AboutComponent } from './components/layout/about/about.component';
import { MarvelComponent } from './components/marvel/marvel.component';
import { ContactusComponent } from './components/layout/contactus/contactus.component';
import { GrootologueComponent } from './components/grootologue/grootologue.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
 
import { UsersComponent } from './components/users/users.component';
import { NewsPageComponent } from './components/news-page/news-page.component';
import { NewsArticleSearchComponent } from './components/news-article-search/news-article-search.component';
 
const routes: Routes = [ 

  { path: '', component: GrootComponent },
  { path: 'marvel', component: MarvelComponent },
  { path: 'marvel/:guardiansId', component: MarvelComponent },
  {path : 'groot/:grootId', component : BookComponent},

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'members', component: UsersComponent },
  { path: 'photos/:albumId', component: PhotosComponent },
  { path: 'news', component: NewsPageComponent },
  { path: 'search', component: NewsArticleSearchComponent },
   
  {path : 'grootologue', component : GrootologueComponent},

  {path : 'about', component : AboutComponent},
  {path : 'contact', component : ContactusComponent},
  {path : '*', redirectTo: '', pathMatch: 'full'}
]; 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
