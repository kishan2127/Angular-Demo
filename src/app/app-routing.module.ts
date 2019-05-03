import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SidebarComponent} from './sideBar/sidebar.component';
import {ContactUsComponent} from "./contact-us/contact-us.component";

const routes: Routes = [

    {path: '', component: HomeComponent},
  {path: 'contact-us',component : ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
