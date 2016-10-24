import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports:[
    RouterModule.forRoot([
      { path:'signup' , component: SignUpComponent},
      { path:'login' , component: LoginComponent}
    ])
  ],
  exports:[
    RouterModule
  ]
})

export  class AppRoutingModule {}
