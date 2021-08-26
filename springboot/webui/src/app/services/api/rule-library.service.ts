import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bcf_Rule_Library } from 'src/app/models/Bcf_Rule_Library';
import { RuleCopy } from 'src/app/models/RuleCopy';
import { Observable } from 'rxjs';
import { ApiRequestService } from './api-request.service';

@Injectable()
export class RuleLibraryService {
  private ruleLibraryBaseURL = 'api/rule-library';
  private copyRuleURL = 'api/rule-copy';
  
  constructor(
    private apiRequest: ApiRequestService
  ) {}

  copy(data: RuleCopy) {
    return this.apiRequest.post(this.copyRuleURL, data);
  }

  getAll(page?: number, size?: number): Observable<any> {
    //Create Request URL params
    let params: HttpParams = new HttpParams();
    params = params.append("page", typeof page === "number" ? page.toString() : "0");
    params = params.append("size", typeof size === "number" ? size.toString() : "1000");
    return this.apiRequest.get(this.ruleLibraryBaseURL, params);
  }

  getById(id: number): Observable<Bcf_Rule_Library> {
    const _http = this.ruleLibraryBaseURL + "/" + id;
    return this.apiRequest.get(_http);
  }

  save(rule: Bcf_Rule_Library): Observable<Bcf_Rule_Library> {
    return this.apiRequest.post(this.ruleLibraryBaseURL, rule);
  }

  update(id: number, rule: Bcf_Rule_Library): Observable<Bcf_Rule_Library> {
    const _http = this.ruleLibraryBaseURL + "/" + id;
    return this.apiRequest.put(_http, rule);
  }

}
