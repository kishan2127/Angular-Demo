import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sideBar/sidebar.component';
import { Bolder } from './sideBar/sidebar-directive';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {RegistrationComponent} from '../user-module/registration/registration.component';
import {UserManagmentModule} from '../user-module/user-managment.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    Bolder,
    HomeComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserManagmentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
