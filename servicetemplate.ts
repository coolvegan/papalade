import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './TokenService';

@Injectable({
  providedIn: 'root',
})
export class ServiceTemplate {
  protected tokenservice: TokenService;
  constructor(protected httpClient: HttpClient, tokenservice: TokenService) {
    this.tokenservice = tokenservice;
  }
  protected headers = new HttpHeaders({
    ApiKey: 'ChangeMe',
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
  });

  protected baseUrl = 'http://localhost:5218/';

  protected httpOptions = {
    headers: this.headers,
  };

  protected getHeader(): HttpHeaders {
    return new HttpHeaders({
      ApiKey: 'ChangeMe',
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      Security: this.tokenservice.getToken(),
    });
  }
}
