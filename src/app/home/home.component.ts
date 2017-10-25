import { Component, OnInit } from '@angular/core';
import { CoolLocalStorage } from 'angular2-cool-storage';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageService, HomeService, AlertService } from '../_services/index';
import { apiUrl } from '../_constants/index';

declare var $: any;

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})
 
export class HomeComponent implements OnInit {
    localStorage: CoolLocalStorage;
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
    cartProducts:any;
    apiUrl = apiUrl;
    constructor(
          localStorage: CoolLocalStorage,
          private route: ActivatedRoute,
          private router: Router,
          private home: HomeService,
          private image: ImageService,
          private alertService: AlertService
        ){
          this.localStorage = localStorage;
        }

    ngOnInit() {
        this.image.getHomeBanners().subscribe( images => {
          this.images = images;
         });

        this.home.getFirstProductList().subscribe( firstproductlist => {
          this.firstproductlist = firstproductlist;
         });

       this.home.getSecondProductList().subscribe( secondproductlist => {
          this.secondproductlist = secondproductlist;
         }); 

       this.home.getThirdProductList().subscribe( thirdproductlist => {
          this.thirdproductlist = thirdproductlist;
         });  

       this.home.getPopulat1ProductList().subscribe( firstpopularproductlist => {
          this.firstpopularproductlist = firstpopularproductlist;
         }); 
         
      this.home.getPopulat2ProductList().subscribe( secondpopularproductlist => {
          this.secondpopularproductlist = secondpopularproductlist;
         }); 
         
      this.home.getPopulat3ProductList().subscribe( thirdpopularproductlist => {
          this.thirdpopularproductlist = thirdpopularproductlist;
         }); 
         
      this.home.getPopulat4ProductList().subscribe( fourpopularproductlist => {
          this.fourpopularproductlist = fourpopularproductlist;
         }); 
         
      this.home.getPopulat5ProductList().subscribe( fivepopularproductlist => {
          this.fivepopularproductlist = fivepopularproductlist;
         }); 
         
      this.home.getPopulat6ProductList().subscribe( sixpopularproductlist => {
          this.sixpopularproductlist = sixpopularproductlist;
         }); 
         
      this.cartProducts = this.home.getSelectedProducts();            
    }

    addToCart(product){
      this.home.addCart(product);
      this.cartProducts = this.home.getSelectedProducts();
      var i = this.cartProducts.length;
      $("#mini-count").html(i);
    }
   
}