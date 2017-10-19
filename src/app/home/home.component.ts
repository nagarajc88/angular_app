import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageService, HomeService, AlertService } from '../_services/index';
import { apiUrl } from '../_constants/index';
@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})
 
export class HomeComponent implements OnInit {
    images = [];
    firstproductlist = [];
    secondproductlist = [];
    thirdproductlist = [];
    firstpopularproductlist = [];
    secondpopularproductlist = [];
    thirdpopularproductlist = [];
    fourpopularproductlist = [];
    fivepopularproductlist = [];
    sixpopularproductlist = [];
    apiUrl = apiUrl;
    constructor(private route: ActivatedRoute,
        private router: Router,
        private productlist: HomeService,
        private image: ImageService,
        private alertService: AlertService){}
    ngOnInit() {

        this.image.getHomeBanners().subscribe( images => {
          this.images = images;
         });

        this.productlist.getFirstProductList().subscribe( firstproductlist => {
          this.firstproductlist = firstproductlist;
         });

       this.productlist.getSecondProductList().subscribe( secondproductlist => {
          this.secondproductlist = secondproductlist;
         }); 

       this.productlist.getThirdProductList().subscribe( thirdproductlist => {
          this.thirdproductlist = thirdproductlist;
         });  

       this.productlist.getPopulat1ProductList().subscribe( firstpopularproductlist => {
          this.firstpopularproductlist = firstpopularproductlist;
         }); 
         
      this.productlist.getPopulat2ProductList().subscribe( secondpopularproductlist => {
          this.secondpopularproductlist = secondpopularproductlist;
         }); 
         
      this.productlist.getPopulat3ProductList().subscribe( thirdpopularproductlist => {
          this.thirdpopularproductlist = thirdpopularproductlist;
         }); 
         
      this.productlist.getPopulat4ProductList().subscribe( fourpopularproductlist => {
          this.fourpopularproductlist = fourpopularproductlist;
         }); 
         
      this.productlist.getPopulat5ProductList().subscribe( fivepopularproductlist => {
          this.fivepopularproductlist = fivepopularproductlist;
         }); 
         
      this.productlist.getPopulat6ProductList().subscribe( sixpopularproductlist => {
          this.sixpopularproductlist = sixpopularproductlist;
         }); 
         
                  
    }
   
}