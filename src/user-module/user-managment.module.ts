import {NgModule} from '@angular/core';
import {AppComponent} from "../app/app.component";
import {HeaderComponent} from "../app/header/header.component";
import {FooterComponent} from "../app/footer/footer.component";
import {SidebarComponent} from "../app/sideBar/sidebar.component";
import {Bolder} from "../app/sideBar/sidebar-directive";
import {HomeComponent} from "../app/home/home.component";
import {ContactUsComponent} from "../app/contact-us/contact-us.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app/app-routing.module";
import {FormsModule} from "@angular/forms";
import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  declarations: [RegistrationComponent],
  imports: [

  ],
  exports :[RegistrationComponent],
  providers: []
})

export class UserManagmentModule {

}
