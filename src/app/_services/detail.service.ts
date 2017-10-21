import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { apiUrl } from '../_constants/index';
import { Detail } from '../_models/index';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';

@Injectable()
export class DetailService { 
 
 constructor(private http: Http) { }

 getProductDetails(id) {
        return this.http.post(apiUrl+'api/product-details',{ id: id })
            .map((response: Response) => {
                let productDetails = response.json();
                return productDetails;
            });
    }

}