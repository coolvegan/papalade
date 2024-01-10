import { Injectable } from "@angular/core";
import { Lagergegenstand, LagergegenstandCreate, Lagerort } from "./Lagergegenstand";
import { Zeugs } from "./Storage";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class LgService {
  lgUrl: string = "http://localhost:5218/Lagergegenstand";
  lgOrt: string = "http://localhost:5218/Lagerort";


  httpOptions = {
    headers: new HttpHeaders({
      "ApiKey": "ChangeMe",
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Access-Control-Allow-Origin": "*",
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getLagergegenstaende(): Observable<Lagergegenstand[]> {
    var response = this.httpClient.get<Lagergegenstand[]>(
      this.lgUrl,
      this.httpOptions,
    );
    return response;
  }

  createLagergegenstand(lg: LagergegenstandCreate) {
    var response = this.httpClient.post<LagergegenstandCreate>(
      this.lgUrl,
      lg,
      this.httpOptions,
    ).subscribe();
    return response;
  }

  getLagerOrte(): Observable<Lagerort[]>{
    var response = this.httpClient.get<Lagerort[]>(
      this.lgOrt,
      this.httpOptions
    );
    return response;
  }

}
