import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrootComponent } from './components/groot/groot.component';
import { BookComponent } from './components/book/book.component';
import { PhotosComponent } from './components/photos/photos.component';

import { AboutComponent } from './components/about/about.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { GrootologueComponent } from './components/grootologue/grootologue.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
const routes: Routes = [


  { path: '', component: GrootComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'photos/:albumId', component: PhotosComponent },
  
  {path : 'about', component : AboutComponent},
  {path : 'book', component : BookComponent},
  {path : 'book/:bookId', component : BookComponent},
  {path : 'contact', component : ContactusComponent},
  {path : 'grootedex', component : GrootologueComponent},
  {path : '*', redirectTo: '', pathMatch: 'full'}
]; 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
