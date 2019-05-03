import { Component , OnInit } from '@angular/core';
import { UserInfo } from './sidebar.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements ngOnInit {
 model = new UserInfo();
  constructor(){}
title = 'SideBar';
}
