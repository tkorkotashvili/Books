import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod'
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  env = environment;

  constructor(private http: HttpClient) { }
  apiPath = this.env.apiUrl;
  getNgBooks() {
    return this.http.get<any>(`${this.apiPath}?q=Angular`);
  }
}
