import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
 resetPassword!: FormGroup;
  submitted = false;
  hide: boolean = true;
  token: any

  constructor(private activatedRoute:ActivatedRoute,private UserService:UserService,private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.resetPassword = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
  })
  this.token=this.activatedRoute.snapshot.paramMap.get('token')
}
  
showPassword() {
  this.hide = !this.hide;
}
onSubmit() {
    
  this.submitted = true;
  
  let reqData = {
    password: this.resetPassword.value.password

  }
  console.log(this.token);
  this.UserService.resetPassService(reqData,this.token).subscribe((res: any) => {
    console.log(res);
  })
  this.router.navigateByUrl('/signin')
}

}
