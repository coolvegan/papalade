import { catchError, throwError, tap } from 'rxjs';
import { LoginData } from './Lagergegenstand';
import { ServiceTemplate } from './servicetemplate';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends ServiceTemplate {
  lgLogin: string = this.baseUrl + 'Login';

  login(lg: LoginData): void {
    this.httpClient
      .post<any>(this.lgLogin, lg, this.httpOptions)
      .pipe(
        tap((response: LoginData) => {
          // Hier kannst du auf die erfolgreiche Antwort reagieren, wenn benötigt
          console.log('Erfolgreich eingeloggt:', response);
          this.tokenservice.setToken(String(response));
        }),
        catchError((error) => {
          // Hier wird die Fehlerbehandlung durchgeführt
          console.error('Fehler bei der Anmeldung:', error);
          this.tokenservice.removeToken(); // Token entfernen, wenn ein Fehler auftritt
          return throwError(error); // Wirf den Fehler erneut, damit ihn Komponenten oder Dienste, die auf das Observable zugreifen, verarbeiten können
        })
      )
      .subscribe();
  }
}
