import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from './service/login.service';
import {Headers, RequestOptions} from "@angular/http";

@Component({
  selector: 'app-login',
  templateUrl: 'login-form.html',
  styleUrls: ['./login.component.css'],
  providers: [NgForm, LoginService]
})
export class LoginComponent implements OnInit {
  shownClass: string;
  loginUser(form: NgForm){
    this.loginVerify(form.value);
  }
  constructor(private _loginService: LoginService) { }

loginVerify(details){
  let headers = new Headers({ 'content_type': 'application/json'});
  let options = new RequestOptions({headers: headers});
  this._loginService.Validator('users/login',details, options)
    .subscribe(
      data => this.setAlertMessage(data),
      error => "invalid login"
    )
}
  setAlertMessage(data){
  if(!data.status){
    this.shownClass ='';
  }
}
  ngOnInit() {
  this.shownClass = 'hidden';
  }

}
