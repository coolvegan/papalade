import { Component } from '@angular/core';
import { LoginService } from '../../../LoginService';
import { TokenService } from '../../../TokenService';
import { LoginData } from '../../../Lagergegenstand';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private lgService: LoginService,
    private tokenservice: TokenService,
    private router: Router
  ) {
    this.ts = tokenservice;
  }
  username = '';
  password = '';
  ts: TokenService;

  login(): void {
    let lg: LoginData = {
      username: this.username,
      password: this.password,
    };
    this.lgService.login(lg);

    setTimeout(() => {
      this.router.navigate(['/zutaten']);
    }, 750);
  }
  test(): void {
    console.log(this.ts.getToken());
  }
}
