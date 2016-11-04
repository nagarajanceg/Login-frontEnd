import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import {UserListComponent} from "./user-list/user-list.component";

@NgModule({
  imports:[
    RouterModule.forRoot([
      { path:'signup' , component: SignUpComponent},
      { path:'login' , component: LoginComponent},
      { path:'listuser', component: UserListComponent}
    ])
  ],
  exports:[
    RouterModule
  ]
})

export  class AppRoutingModule {}
