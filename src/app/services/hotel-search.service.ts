import { Injectable } from '@angular/core';
import { SessionModel } from '../models/session.model';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelSearchService {
  constructor(private sessionModel: SessionModel, private http: HttpClient ) {}


  createSession(check_in_date: string, check_out_date: string): Observable<any> {
      let sessionDate = this.sessionModel.getSessionData();
      sessionDate.stayPeriod.start =  check_in_date;
      sessionDate.stayPeriod.end = check_out_date;
      return this.http.post(environment.sessionUrl, sessionDate, {headers: this.getHeaders()});
  }

  getResults(){
    let resultData = this.sessionModel.getResultData();
    resultData.sessionId = localStorage.getItem('session-id');
    return this.http.post(environment.resultUrl, resultData, {headers: this.getHeaders()});
  }


  private getHeaders() {
      let headers: HttpHeaders = new HttpHeaders();
      headers = headers.append('oski-tenantId', 'Demo');
      headers = headers.append('Content-Type', 'application/json');
      return headers;
  }


}
