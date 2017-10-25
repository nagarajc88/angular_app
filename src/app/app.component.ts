import { Component } from '@angular/core';
import { CoolLocalStorage } from 'angular2-cool-storage';
import { User } from './_models/index';
import { UserService } from './_services/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  localStorage: CoolLocalStorage;

  title = 'app';
  constructor(localStorage: CoolLocalStorage) {
   this.localStorage = localStorage;
  }
  ngOnInit() { }

}
