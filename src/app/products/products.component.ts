import { Component, OnInit } from '@angular/core';
import { CoolLocalStorage } from 'angular2-cool-storage';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ImageService, AlertService, ProductsService } from '../_services/index';
import { apiUrl } from '../_constants/index';
@Component({
    moduleId: module.id,
    templateUrl: 'products.component.html'
})

export class ProductsComponent implements OnInit {
 localStorage: CoolLocalStorage;
 categotyProductList = [];
 apiUrl = apiUrl;
 constructor(
   localStorage: CoolLocalStorage,
	 private route: ActivatedRoute,
	 private router: Router,
	 private image: ImageService,
	 private categoryproducts: ProductsService
 ){
    this.localStorage = localStorage;
  }

 ngOnInit() { 
     this.route.params.subscribe((params: Params) => {
        let cid = params['id'];
        this.CategoryProducts(cid)
      });
 }

 CategoryProducts(cid){
     this.categoryproducts.getCategoryProducts(cid).subscribe( categotyProductList => {
          this.categotyProductList = categotyProductList;
          console.log(this.categotyProductList);
         });
   } 

}