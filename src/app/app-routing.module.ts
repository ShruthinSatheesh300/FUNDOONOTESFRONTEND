import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { SigninComponent } from './components/signin/signin.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { ArchivelistComponent } from './components/archivelist/archivelist.component';
import { TrashlistComponent } from './components/trashlist/trashlist.component';
import { AuthenticationGuard } from './authentication.guard';
const routes: Routes = [
  {path:'registration',component:RegistrationComponent},
  {path:'signin',component:SigninComponent},
  {path:'forgetPassword',component:ForgetPasswordComponent},
  {path: 'resetPassword/:token',component:ResetPasswordComponent},
  // {path: 'dashboard',component:DashboardComponent},

  {
    path: 'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],
    children: [
      {path:'', redirectTo:"/dashboard/getallnotes", pathMatch:'full' },
      // { path: 'takenote', component: TakenoteComponent },
       { path: 'getallnotes', component: GetAllNotesComponent },
       { path: 'archive', component: ArchivelistComponent},
       { path: 'trash', component: TrashlistComponent}
    ]
  
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
