import { Injectable } from "@angular/core";
import { ServiceTemplate } from "./servicetemplate";
import { Observable } from "rxjs";
import { Lagergegenstand } from "./Lagergegenstand";
import { LagergegenstandCreate } from "./Lagergegenstand";

@Injectable({
  providedIn: "root",
})

export class LgService extends ServiceTemplate {
  lgUrl: string = this.baseUrl + "Lagergegenstand";

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
    );
    return response;
  }
}
