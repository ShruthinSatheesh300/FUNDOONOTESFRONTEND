import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
@Injectable({
	providedIn: 'root'
})
export class UserService {
	token: any;

	constructor(private httpService: HttpService) {this.token=localStorage.getItem('token') }

	registerService(reqData: any) {
		let header = {
			headers: new HttpHeaders({
				'Content-type': 'application/json',
				// 'Authorization': 'token'
			})
		}

		return this.httpService.postService('/users/userregister', reqData, false, header);
	}

	loginService(reqData: any) {
		let header = {
			headers: new HttpHeaders({
				'Content-type': 'application/json',
				// 'Authorization': 'token'
			})
		}
		return this.httpService.postService('/users/login', reqData, false, header);

	}

	forgetPassService(reqData: any) {
		let header = {
			headers: new HttpHeaders({
				'Content-type': 'application/json',
				// 'Authorization': 'token'
			})
		}
		return this.httpService.postService('/users/forgot', reqData, false, header);

	}

	
	resetPassService(reqData: any, token: any) {
		let headers = {
		  headers: new HttpHeaders({
			 'content-Type': 'application/json',
			  'Authorization':  'Bearer ' + token
		  })
		}
		return this.httpService.putService('/users/setpass', reqData, true, headers);
	 }
}