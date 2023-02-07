import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  constructor(public userService: UsersService, public router: Router) {}

  login() {
    this.errorMessage = '';
    const user = { username: this.username, password: this.password };
    this.userService.login(user).subscribe(
      (data: ILoginResponse) => {
        this.userService.setToken(data.token);
        this.router.navigateByUrl('/home');
      },
      (error: any) => {
        this.errorMessage = error.error.message;
      }
    );
  }

  registrar() {
    this.router.navigateByUrl('/signup');
  }
}

export interface ILoginResponse {
  token: string;
}
