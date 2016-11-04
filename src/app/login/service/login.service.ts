import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router} from '@angular/router';
import  'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  endPointURL = "http://localhost:3000/";
  //endPointURL = "https://my-login-rest.herokuapp.com/";
  constructor(private http:Http, private  _router:Router) {
  }
  Validator(routeUrl, details, options):any{
    return this.http.post(this.endPointURL+routeUrl, details, options).map(res => res.json())
      .do(data => this.actionMethod(data));
  }
  actionMethod(data):any{
    if(data.status){
      this._router.navigate(['/listuser']);
    }
  }
}
