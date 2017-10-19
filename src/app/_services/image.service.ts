import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { apiUrl } from '../_constants/index';
import { Image } from '../_models/index';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';

@Injectable()
export class ImageService {
    private baseUrl = apiUrl+"api/banners/"; 
    constructor(private http: Http) { }

    getHomeBanners() {
        return this.http.get(this.baseUrl)
        .map(res => res.json())
        .catch(error => {
            console.log(error);
            return Observable.throw(error);
        });
    }
}