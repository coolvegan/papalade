import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private token: string = '';

  constructor() {}

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
