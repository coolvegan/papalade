
import { Observable } from "rxjs";
import { Lagerort } from "./Lagergegenstand";
import { ServiceTemplate } from "./servicetemplate";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})

export class LagerortService extends ServiceTemplate
{
  lgOrt: string = this.baseUrl + "Lagerort";

  getLagerOrte(): Observable<Lagerort[]>{
    var response = this.httpClient.get<Lagerort[]>(
      this.lgOrt,
      this.httpOptions
    );
    return response;
  }
}
