import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUserResponse, UsersService } from '../../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  username: string = '';
  password: string = '';
  nombre: string = '';
  email: string = '';
  errorMessage: string = '';
  constructor(public userService: UsersService, public router: Router) {}

  login() {
    this.errorMessage = '';
    const user = {
      username: this.username,
      password: this.password,
      name: this.nombre,
      email: this.email,
    };
    this.userService.register(user).subscribe(
      (data: IUserResponse) => {
        const { _id } = data;
        this.router.navigateByUrl(`/login`);
      },
      (error: any) => {
        this.errorMessage = error.error.mensaje;
      }
    );
  }
}
