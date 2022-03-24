import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { SigninComponent } from './components/signin/signin.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TakenoteComponent } from './components/takenote/takenote.component';

const routes: Routes = [
  {path:'registration',component:RegistrationComponent},
  {path:'signin',component:SigninComponent},
  {path:'forgetPassword',component:ForgetPasswordComponent},
  {path: 'resetPassword/:token',component:ResetPasswordComponent},
  {path: 'dashboard',component:DashboardComponent},
  {path: 'dashboard/takenote',component:TakenoteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
