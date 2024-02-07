import { Injectable } from '@angular/core';
import { ServiceTemplate } from './servicetemplate';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenValidService extends ServiceTemplate {
  private route: string = this.baseUrl + 'Alive';

  isValid(): boolean {
    var ergebnis = '';
    var response = this.httpClient.get(this.route, this.httpOptions).subscribe(
      (x) => {
        console.log('check');
        return true;
      },
      (error) => {
        console.log('error');

        return false;
      }
    );
    this.tokenservice.removeToken();
    return false;
  }
}
