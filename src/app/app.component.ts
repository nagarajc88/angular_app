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
  constructor() {}
  ngOnInit() { }
}
