import { Injectable } from '@angular/core';
import { CoolLocalStorage } from 'angular2-cool-storage';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { apiUrl } from '../_constants/index';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductsService { 
   localStorage: CoolLocalStorage;

   constructor(localStorage: CoolLocalStorage, private http: Http) { 
     this.localStorage = localStorage;
    }
 
    getCategoryProducts(id){
      return this.http.post(apiUrl+"api/category-product-list/",{ id: id })
            .map((response: Response) => {
                let categoryproductlist = response.json();
                return categoryproductlist;
            });
    }
}