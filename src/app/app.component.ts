import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="container">
    <nav class="navbar navbar navbar-default">
      <div class="container-fluid">
        <div class ="navbar-header">
          <a href="#">Sample</a>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li><a routerLink = '/signup' routerLinkActive="active">signUp</a></li>
          <li><a routerLink = '/login' routerLinkActive="active">login</a></li>
        </ul>
        
      </div>
    </nav>
</div>
<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
