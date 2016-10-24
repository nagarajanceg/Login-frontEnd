import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class SignUpService {
    endPointURL = "http://localhost:3000/";

  constructor(private http: Http) {
      this.http = http;
  }
  getAllUsers(routeval){
    return this.http.get(this.endPointURL+routeval)
                .map(res => res.json());
  }
  registerNewUser(routeval, data, options){
    return this.http.post(this.endPointURL+routeval, data, options)
                .map(res => res.json());
  }
}
