import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
	token: any;

  constructor(private httpService: HttpService) { 
    this.token=localStorage.getItem('token')
  }

  takeNoteService(reqData:any){
    this.token=localStorage.getItem('token')

    let header = {
			headers: new HttpHeaders({
				'Content-type': 'application/json',
        'Authorization':  'Bearer ' + this.token		
      	})
		}
    return this.httpService.postService('/note', reqData, true, header)
  }

  getAllNotesservice() {


    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':  'Bearer ' + this.token		
      })

    }
    return this.httpService.getService('/note',true,headers)
  }
  updateNoteService(reqData:any,id:any) {
    console.log(reqData,id);
    


    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':  'Bearer ' + this.token		
      })

    }
    return this.httpService.putService('/note/'+ id,reqData,true,headers)
  }
}
