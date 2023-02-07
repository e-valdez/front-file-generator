import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  basePath = 'https://back-file-generator.netlify.app/.netlify/functions/api';
  constructor(private http: HttpClient, private cookies: CookieService) {}

  login(user: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.basePath}/signin`, user);
  }
  register(user: IUserBody): Observable<any> {
    return this.http.post(`${this.basePath}/users`, user);
  }

  setToken(token: string) {
    this.cookies.set('token', token);
  }
  getToken() {
    return this.cookies.get('token');
  }

  getUserIdFromToken() {
    const helper = new JwtHelperService();
    const data = helper.decodeToken(this.getToken());
    return data.id;
  }

  getUser(id: string): Observable<IUserResponse> {
    const headers = {
      Authorization: this.getToken(),
    };
    return this.http.get<IUserResponse>(`${this.basePath}/users/${id}`, {
      headers,
    });
  }

  editarUser(userId: string, body: IUserBody): Observable<any> {
    const headers = {
      Authorization: this.getToken(),
    };
    return this.http.put(`${this.basePath}/users/${userId}`, body, {
      headers,
    });
  }

}

interface IUserBody {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface IUserResponse {
  _id: string;
  name: string;
  username: string;
  email: string;
  password: string;
}
