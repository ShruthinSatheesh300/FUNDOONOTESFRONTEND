import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPassword!: FormGroup;
  submitted = false;

  constructor(private UserService: UserService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.forgetPassword = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  onSubmit() {

    this.submitted = true;

    let reqData = {
      email: this.forgetPassword.value.email
    }
    console.log(this.forgetPassword.value);
    this.UserService.forgetPassService(reqData).subscribe((res: any) => {
      console.log(res);
    })
  }


}
