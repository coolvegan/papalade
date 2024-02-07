import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private token: string = '';

  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem(this.token, token);
  }

  getToken(): string {
    if (typeof localStorage == undefined) {
      return '';
    }
    let t = localStorage.getItem(this.token);
    if (t != null) {
      return t;
    }
    return '';
  }

  removeToken(): void {
    localStorage.removeItem(this.token);
  }
}
