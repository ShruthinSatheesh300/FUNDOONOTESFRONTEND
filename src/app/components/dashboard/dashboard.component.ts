import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  value = '';
  toggle = true;
  status = "Enable";
  filteredString:string = '';
  searchword: any

 
  
  

  constructor(private router: Router,private dataservice: DataService) { }

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
  searchtitle(event: any) {
    console.log(event.target.value);
    this.value = event.target.value
    let Ddata = {
      type: 'search',
      data: [this.value]
    }
    this.dataservice.changeData(Ddata)
  }
 

 
}