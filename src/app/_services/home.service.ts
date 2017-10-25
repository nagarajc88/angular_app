import { Injectable } from '@angular/core';
import { CoolLocalStorage } from 'angular2-cool-storage';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { apiUrl } from '../_constants/index';
import { Home } from '../_models/index';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';

@Injectable()
export class HomeService {
    localStorage: CoolLocalStorage;

    private baseUrl1 = apiUrl+"api/first-product-list/"; 
    private baseUrl2 = apiUrl+"api/second-product-list/";
    private baseUrl3 = apiUrl+"api/third-product-list/";
    private baseUrl4 = apiUrl+"api/popular1-product-list/";
    private baseUrl5 = apiUrl+"api/popular2-product-list/";
    private baseUrl6 = apiUrl+"api/popular3-product-list/";
    private baseUrl7 = apiUrl+"api/popular4-product-list/";
    private baseUrl8 = apiUrl+"api/popular5-product-list/";
    private baseUrl9 = apiUrl+"api/popular6-product-list/";
    
    selectedProducts = [];

    constructor(localStorage: CoolLocalStorage, private http: Http) { 
     this.localStorage = localStorage;
    }

    getFirstProductList() {
        return this.http.get(this.baseUrl1)
        .map(res => res.json())
        .catch(error => {
            console.log(error);
            return Observable.throw(error);
        });
    }
    getSecondProductList() {
        return this.http.get(this.baseUrl2)
        .map(res => res.json())
        .catch(error => {
            console.log(error);
            return Observable.throw(error);
        });
    }
    getThirdProductList() {
        return this.http.get(this.baseUrl3)
        .map(res => res.json())
        .catch(error => {
            console.log(error);
            return Observable.throw(error);
        });
    }

    getPopulat1ProductList() {
        return this.http.get(this.baseUrl4)
        .map(res => res.json())
        .catch(error => {
            console.log(error);
            return Observable.throw(error);
        });
    }

    getPopulat2ProductList() {
        return this.http.get(this.baseUrl5)
        .map(res => res.json())
        .catch(error => {
            console.log(error);
            return Observable.throw(error);
        });
    }

    getPopulat3ProductList() {
        return this.http.get(this.baseUrl6)
        .map(res => res.json())
        .catch(error => {
            console.log(error);
            return Observable.throw(error);
        });
    }


    getPopulat4ProductList() {
        return this.http.get(this.baseUrl7)
        .map(res => res.json())
        .catch(error => {
            console.log(error);
            return Observable.throw(error);
        });
    }

    getPopulat5ProductList() {
        return this.http.get(this.baseUrl8)
        .map(res => res.json())
        .catch(error => {
            console.log(error);
            return Observable.throw(error);
        });
    }

    getPopulat6ProductList() {
        return this.http.get(this.baseUrl9)
        .map(res => res.json())
        .catch(error => {
            console.log(error);
            return Observable.throw(error);
        });
    }
    
    getSelectedProducts() {
       return JSON.parse( this.localStorage.getItem('itemKey'));
    }

    addCart(product){
      this.selectedProducts.push(product);
      this.localStorage.setItem('itemKey', JSON.stringify(this.selectedProducts));
    }
}