import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ImageService, HomeService, AlertService, DetailService } from '../_services/index';
import { apiUrl } from '../_constants/index';
@Component({
    moduleId: module.id,
    templateUrl: 'detail.component.html'
})

export class DetailComponent implements OnInit {
 productDetails = [];
 apiUrl = apiUrl;
 constructor(
	 private route: ActivatedRoute,
	 private router: Router,
	 private image: ImageService,
	 private detail: DetailService
 ){}

 ngOnInit() {
    this.route.params.subscribe((params: Params) => {
        let pid = params['id'];
        this.getProductDetails(pid)
      });
 }

	 getProductDetails(pid) {
	   this.detail.getProductDetails(pid).subscribe( productDetails => {
          this.productDetails = productDetails;
          console.log(this.productDetails);
          console.log(this.productDetails[0]['product_id']);
         });
	 } 

}