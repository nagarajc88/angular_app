import { Component } from '@angular/core';
import { User } from './_models/index';
import { UserService } from './_services/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  token: User;
  currentUser: User;
  users: User[] = [];
   $: any;

  constructor() {

      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.token = this.currentUser;
  }

  ngOnInit() { }
}
