import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeaderService } from '../_services/index';
import { apiUrl } from '../_constants/index';

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
  masterCategories:any;

  constructor(private route: ActivatedRoute,
        private router: Router,
        private categorylist: HeaderService) {}

  ngOnInit() {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.token = this.currentUser;
      this.getMasterCategory();
   }

   getMasterCategory(){
      this.categorylist.getMasterCategoryList().subscribe(masterCategories => {
          this.masterCategories = masterCategories;
          //console.log(this.masterCategories[0]['subCategory']);
      });  
   }

}
