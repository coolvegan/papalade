import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ServiceTemplate {
  protected baseUrl = "http://localhost:5218/";

  httpOptions = {
    headers: new HttpHeaders({
      "ApiKey": "ChangeMe",
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Access-Control-Allow-Origin": "*",
    }),
  };

  constructor(protected httpClient: HttpClient) {
  }
}
