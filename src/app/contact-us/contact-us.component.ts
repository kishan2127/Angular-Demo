import { Component, OnInit } from '@angular/core';
import {UserInfo} from "../sideBar/sidebar.model";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  constructor(){}
  title = 'SideBar';
  onSubmit = false;
  model = new UserInfo();
  ngOnInit(): void {

  }
  onClickSubmit() {
    this.onSubmit = true;
    console.log(this.model);

  }

}
