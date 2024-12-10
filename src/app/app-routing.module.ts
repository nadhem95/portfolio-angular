import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { NadhemHazemComponent } from './nadhem.hazem/nadhem.hazem.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';

/*import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';*/
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo:'/home', pathMatch: 'full'},
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'nadhem.hazem', component: NadhemHazemComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo:'/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
