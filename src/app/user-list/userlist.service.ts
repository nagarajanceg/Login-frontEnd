import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class UserlistService {
  endPointURL = "http://localhost:3000/";
  constructor(private http: Http) { }

  getAllUsers(routeUrl){
    return this.http.get(this.endPointURL+routeUrl)
      .map(res => res.json());
      //.do(data => console.log(data));
  }
}
