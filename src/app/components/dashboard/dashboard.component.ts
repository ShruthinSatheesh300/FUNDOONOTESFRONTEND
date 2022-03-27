import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  value = '';
  toggle = true;
  status = "Enable";
  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logOut() {
    this.router.navigateByUrl('/signin')
  }
  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? "Enable" : "Disable";
  }
  onnote(){
    this.router.navigateByUrl('/dashboard/getallnotes')
  }

 
}