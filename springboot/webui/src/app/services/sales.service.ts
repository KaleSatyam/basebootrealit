import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiRequestService } from './api/api-request.service';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  baseUrl = "api/";



  constructor(private apiRequest: ApiRequestService, private route: Router) {

  }

  addData(formData) {
    const _http = this.baseUrl + "addsales";
    return this.apiRequest.post(_http, formData)

  }

  getAllData() {
    const _http = this.baseUrl + "getsales";
    return this.apiRequest.get(_http);
  }

  getDataById(id: number) {
    let url = this.baseUrl + "getsales/" + id;
    console.log(url)
    return this.apiRequest.get(url);
  }

  updateData(id: number, data) {
    let url = this.baseUrl + "updatesales/" + id;
    console.log(data.value);
    //const body = JSON.stringify(data);
    return this.apiRequest.put(url, data);
    //this.route.navigate(['/home/sales-new/all']);
  }
}
