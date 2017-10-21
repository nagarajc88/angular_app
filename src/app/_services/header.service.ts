import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { apiUrl } from '../_constants/index';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';

@Injectable()
export class HeaderService { 
 
 constructor(private http: Http) { }

 getMasterCategoryList() {
        return this.http.get(apiUrl+'api/master-category')
            .map((response: Response) => {
                let masterCategory = response.json();
                return masterCategory;
            });
    }

}