import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import { Router} from '@angular/router';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class SignUpService {
    endPointURL = "http://localhost:3000/";
  //endPointURL = "https://my-login-rest.herokuapp.com/";
  constructor(private http: Http, private _router: Router) {
  }
  registerNewUser(routeval, data, options):any{
    return this.http.post(this.endPointURL+routeval, data, options)
                .map(res => res.json())
      .do(data => this.registerAction(data));
  }
  registerAction(data): void{
    if(data.status){
      this._router.navigate(['/login']);
    }
  }
}
