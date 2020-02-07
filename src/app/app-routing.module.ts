import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrootComponent } from './components/groot/groot.component';
import { PhotosComponent } from './components/photos/photos.component';

import { AboutComponent } from './components/about/about.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { GrootedexComponent } from './components/grootedex/grootedex.component';

const routes: Routes = [
  { path: '', component: GrootComponent },
  { path: 'photos/:albumId', component: PhotosComponent },
  
  {path : 'about', component : AboutComponent},
  {path : 'contact', component : ContactusComponent},
  {path : 'grootedex', component : GrootedexComponent},
  {path : '*', redirectTo: '', pathMatch: 'full'}
]; 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
