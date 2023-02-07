import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IUserResponse, UsersService } from '../../../services/user.service';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css'],
})
export class UsersDetailComponent {
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
      this.userId = p['id'];
    });
    this.getData(this.userId);
  }

  editarUser() {
    this.route.navigateByUrl(`/profile/edit/${this.userId}`);
  }

  goToHome() {
    this.route.navigateByUrl("home");
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
}
