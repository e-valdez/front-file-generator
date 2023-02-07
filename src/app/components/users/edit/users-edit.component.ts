import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IUserResponse, UsersService } from '../../../services/user.service';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css'],
})
export class UsersEditComponent {
  username: string = '';
  password: string = '';
  nombre: string = '';
  email: string = '';
  userId: string = '';
  errorMessage: string = '';
  constructor(
    public userService: UsersService,
    public router: ActivatedRoute,
    public route: Router
  ) {}

  ngOnInit() {
    this.router.params.subscribe((p) => {
      this.userId = p.id;
    });
    this.getData(this.userId);
  }

  getData(userId: string) {
    this.userService.getUser(userId).subscribe(
      (data: IUserResponse) => {
        const { name, email, username, _id } = data;
        this.nombre = name;
        this.username = username;
        this.email = email;
        this.userId = _id;
      },
      (error: any) => {
        this.errorMessage = error.error.mensaje;
      }
    );
  }

  editar() {
    this.errorMessage = '';
    const user = {
      username: this.username,
      password: this.password,
      name: this.nombre,
      email: this.email,
    };
    this.userService.editarUser(this.userId, user).subscribe(
      (data: IUserResponse) => {
        this.route.navigateByUrl(`/profile/${this.userId}`);
      },
      (error: any) => {
        this.errorMessage = error.error.mensaje;
        if (error.status === 401) {
          this.route.navigateByUrl(`/error/unauthorized`);
        } else {
          this.route.navigateByUrl(`/error`);
        }
      }
    );
  }
}
