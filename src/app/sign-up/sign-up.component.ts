import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {SignUpService} from './signUp.service';
import {Headers, RequestOptions} from "@angular/http";

@Component({
  selector: 'app-sign-up',
  templateUrl: 'sign-up-form.html' ,
  styleUrls: ['forms.css'],
  providers: [NgForm, SignUpService]
})
export class SignUpComponent implements OnInit {

  registerUser (form: NgForm) {
    this.usersSignUp(form.value);
  }
  constructor (private _signUpservice: SignUpService) {}

  usersSignUp(details){
    let headers = new Headers({ 'content_type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    this._signUpservice.registerNewUser('users/add', details, options)
      .subscribe(
        data =>data,
        error => 'invalid request'
      )
  }
  ngOnInit() {
  }

}
