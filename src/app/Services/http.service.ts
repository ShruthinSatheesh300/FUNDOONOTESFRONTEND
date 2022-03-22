import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = environment.baseurl

  constructor(private httpClient: HttpClient) { }

  postService(url: string, reqData: any, token: boolean = false, headers: any) {
    return this.httpClient.post(this.baseUrl + url, reqData, token && headers)
  }

  getService(url: string, reqData: any, token: boolean = false, headers: any) {
    return this.httpClient.post(this.baseUrl + url, reqData, token && headers)
  }

  putService(url: string, reqData: any, token: boolean = false, headers: any) {
    return this.httpClient.put(this.baseUrl + url, reqData, token && headers)
  }
  // PutService(url: string, reqData: any, token: boolean = false, headers: any) {
  //   return this.httpClient.put(this.baseUrl + url, reqData, token && headers)
  // }
}
