import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { ApiRequestService } from 'ff/src/app/services/api/api-request.service';
import { Observable } from 'rxjs';

import { ApiRequestService } from './api-request.service';

@Injectable({
  providedIn: 'root'
})
export class SalesNewService {

  private baseURL = 'api/';
  constructor(private apiRequest: ApiRequestService) { }

  getAll(page?: number, size?: number): Observable<any> {
    console.log("calling get ");

    //Create Request URL params
    let me = this;
    let params: HttpParams = new HttpParams();
    params = params.append('page', typeof page === "number" ? page.toString() : "0");
    params = params.append('size', typeof size === "number" ? size.toString() : "1000");
    // get all
    // return this.apiRequest.get('api/instructors');
    // paginated data
    return this.apiRequest.get(this.baseURL+"getsales", params);

  }

  create(sales): Observable<any> {
    console.log("in the addsales service "+sales);
    
    const _http = this.baseURL + "addsales";
    return this.apiRequest.post(_http, sales)
   
  }
  

  getDataById(id: number) {
    let url = this.baseURL + "getsales/" + id;
    console.log(url)
    return this.apiRequest.get(url);
  }


  update(id: number, sales): Observable<any> {
    const _http = this.baseURL + "getsales/" + id;
    return this.apiRequest.put(_http, sales);
  }
}
