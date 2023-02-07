import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class FilesGeneratorService {
  basePath = 'https://backend-file-generator.netlify.app/.netlify/functions/api';
  constructor(private http: HttpClient, private cookies: CookieService) {}

  getFileData(type: string): Observable<IFileData> {
    return this.http.get<IFileData>(`${this.basePath}/${type}`);
  }

}

export interface IFileData {
  file_name: string;
  data: any;
}
