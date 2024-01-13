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

  getLagergegenstaendeFuerOrt(ort:string): Observable<Lagergegenstand[]> {
    var response = this.httpClient.get<Lagergegenstand[]>(
      this.lgUrl+"?lagerOrt="+ort,
      this.httpOptions,
    );
    return response;
  }

  getLagergegenstaendeBySubString(str:string): Observable<Lagergegenstand[]> {
    var response = this.httpClient.get<Lagergegenstand[]>(
      this.lgUrl+"?nameHasSubstring="+str,
      this.httpOptions,
    );
    return response;
  }

  createLagergegenstand(lg: LagergegenstandCreate){
    this.httpClient.post<LagergegenstandCreate>(
      this.lgUrl,
      lg,
      this.httpOptions,
    ).subscribe();
  }
  updateLagergegenstand(id: number, lg: LagergegenstandCreate){
    this.httpClient.put<LagergegenstandCreate>(
      this.lgUrl+"/"+id,
      lg,
      this.httpOptions,
    ).subscribe();
  }
}
