import { Observable } from 'rxjs';
import { Excel } from './Lagergegenstand';
import { ServiceTemplate } from './servicetemplate';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExcelService extends ServiceTemplate {
  lgOrt: string = this.baseUrl + 'Excel';

  getExcel(): Observable<Excel> {
    this.headers.set('Security', this.tokenservice.getToken());
    var response = this.httpClient.get<Excel>(this.lgOrt, this.httpOptions);
    return response;
  }
}
