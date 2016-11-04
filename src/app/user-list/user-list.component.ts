import { Component, OnInit } from '@angular/core';
import { UserlistService } from './userlist.service';
@Component({
  selector: 'app-user-list',
  template: `
    
    <div class="container ">
    <h1> User List</h1>
    <div class="col-xs-6 col-sm-3">
        <div class="table-responsive">
          <table class="table">
            <tr class="success" *ngFor = "let user of users">
              <td>{{user.name}}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  `,
  styleUrls: [],
  providers: [UserlistService]
})
export class UserListComponent implements OnInit {
  private users : Object ;

  constructor(private _userList : UserlistService) {
  }

  getUsers(){
    this._userList.getAllUsers('users/get')
      .subscribe(
        data => this.users =data,
        error => "invalid request"
      )
  }
  ngOnInit() {
      this.getUsers();
  }

}
