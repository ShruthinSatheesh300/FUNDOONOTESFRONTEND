import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardServiceService } from './auth-guard-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
   constructor(private Authguardservice: AuthGuardServiceService, private router: Router){}
  canActivate () : boolean{
  if (!this.Authguardservice.gettoken()) {  
    this.router.navigateByUrl("/signin");  
}  
return this.Authguardservice.gettoken();  
}  
}
  

