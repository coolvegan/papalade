import { Observable } from 'rxjs';
import { Lagerort } from './Lagergegenstand';
import { ServiceTemplate } from './servicetemplate';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LagerortService extends ServiceTemplate {
  lgOrt: string = this.baseUrl + 'Lagerort';

  getLagerOrte(): Observable<Lagerort[]> {
    this.headers.set('Security', this.tokenservice.getToken());
    var response = this.httpClient.get<Lagerort[]>(
      this.lgOrt,
      this.httpOptions
    );
    return response;
  }
}
