import { Component } from '@angular/core';
import { TokenService } from '../../TokenService';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'papalade';

  constructor(private tokenservice: TokenService, private router: Router) {}

  isAuth(): boolean {
    return this.tokenservice.getToken().length > 0;
  }

  logout(): void {
    this.tokenservice.removeToken();
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 250);
  }
}
