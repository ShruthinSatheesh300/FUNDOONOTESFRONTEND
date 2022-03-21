import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { SigninComponent } from './components/signin/signin.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {path:'registration',component:RegistrationComponent},
  {path:'signin',component:SigninComponent},
  {path:'forgetPassword',component:ForgetPasswordComponent},
  {path: 'resetPassword',component:ResetPasswordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
