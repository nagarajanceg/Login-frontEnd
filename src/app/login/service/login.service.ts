import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import  'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class LoginService {
  endPointURL = "http://localhost:3000/";
  constructor(private http:Http) {
    this.http = http;
  }
  Validator(routeUrl, details, options){
    return this.http.post(this.endPointURL+routeUrl, details, options).map(res => res.json());
  }
}
