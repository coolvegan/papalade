import { Injectable } from "@angular/core";
import { Lagergegenstand, LagergegenstandCreate } from "./Lagergegenstand";
import { Zeugs } from "./Storage";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class LgService {
  lgUrl : string = "http://192.168.178.48:3000/lagergegenstand"

  constructor(private httpClient: HttpClient){}

  getLagergegenstaende() : Observable<Lagergegenstand[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'ApiKey':'ChangeMe'
      })
    }
    var response = this.httpClient.get<Lagergegenstand[]>(this.lgUrl,httpOptions);
    return response;
  }

  createLagergegenstand(lg : LagergegenstandCreate){
    const httpOptions = {
      headers: new HttpHeaders({
        'ApiKey':'ChangeMe',
        'Content-Type': 'application/json'
      })
    }
    var response = this.httpClient.post<LagergegenstandCreate>(this.lgUrl,lg,httpOptions).subscribe();
    return response;
  }
}
