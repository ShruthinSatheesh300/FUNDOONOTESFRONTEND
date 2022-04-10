import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  hide: boolean = true;
  user='1'
  constructor(private UserService: UserService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
    localStorage.setItem('SeesionUser',this.user)  
  }

  onSubmit() {
    this.submitted = true;

    let reqData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.UserService.loginService(reqData).subscribe((res: any) => {
      console.log(res);
  
      localStorage.setItem('token',res.data);
      console.log(res.data);
      
    })
    this.router.navigateByUrl('/dashboard')
  }

  onCreateAccount() {
    this.router.navigateByUrl('/registration');
  }


  showPassword() {
    this.hide = !this.hide;
  }

  onForgetPassword() {
    this.router.navigateByUrl('/forgetPassword');
  }

}
