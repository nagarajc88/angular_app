import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  token: User;
  currentUser: User;
  users: User[] = [];

  constructor() {

      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.token = this.currentUser;
  }

  ngOnInit() { }

}
