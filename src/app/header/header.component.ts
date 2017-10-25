import { Component, OnInit } from '@angular/core';
import { CoolLocalStorage } from 'angular2-cool-storage';

import { Router, ActivatedRoute } from '@angular/router';
import { HeaderService, HomeService } from '../_services/index';
import { apiUrl } from '../_constants/index';

import { User } from '../_models/index';
import { UserService } from '../_services/index';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  localStorage: CoolLocalStorage;
  token: User;
  currentUser: User;
  users: User[] = [];
  cartProducts= [];
  masterCategories:any;

  constructor(localStorage: CoolLocalStorage,
        private route: ActivatedRoute,
        private router: Router,
        private home: HomeService,
        private categorylist: HeaderService) {
        this.localStorage = localStorage;
        }

  ngOnInit() {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.token = this.currentUser;
      this.getMasterCategory();
      this.cartProducts = this.home.getSelectedProducts();
   }

   getMasterCategory(){
      this.categorylist.getMasterCategoryList().subscribe(masterCategories =>{
          this.masterCategories = masterCategories;
      });  
   }
   
 
   

}
