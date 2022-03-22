import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  signupform: FormGroup;
    submitted = false;
    hide: boolean = true;

  constructor(private UserService:UserService, private formBuilder: FormBuilder,private router: Router) {
    this.signupform = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
     


   });
  }

  ngOnInit(): void {
  }

  
showPassword() {
    this.hide = !this.hide;
 }
onSubmit(){
 this.submitted= true;

 let reqData= {
   firstName: this.signupform.value.firstName,
   lastName: this.signupform.value.lastName,
   email: this.signupform.value.email,
   password: this.signupform.value.password,
  

 }
 this.UserService.registerService(reqData).subscribe((res:any)=>{
   console.log(res)
   this.router.navigateByUrl('/signin')
 }) 
}
onSignin(){
  this.router.navigateByUrl("/signin")
}
}

