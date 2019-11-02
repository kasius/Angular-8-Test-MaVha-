import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

export const BASE_URL_CRUD = environment.production;

@Injectable()
export class AppService {

  // variables
  public endpoint = '/';

  constructor(
    public http: HttpClient
  ) { }

  public generateHeaders(): HttpHeaders {
    // Establecemos cabeceras
    let token = '';
    if (localStorage.getItem('jwtToken')) {
      token = localStorage.getItem('jwtToken');
    }
    let headers = null;
    if (token) {
      headers = new HttpHeaders({ 'Content-Type': 'application/json', Authorization: token });
    } else {
      headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    }
    return headers;
  }

  get(url: any, type: any = 'json'): Observable<any> {
    const headers = this.generateHeaders();
    return this.http.get(url, { headers, responseType: type });
  }

  getNormal(url: any, type: any = 'json'): Observable<any> {
    return this.http.get(url);
  }

  post(url: any, object: any, type: any = 'json'): Observable<any> {
    const headers = this.generateHeaders();
    return this.http.post(url, object, { headers, responseType: type });
  }

  post2(url: any, object: any, type: any = 'json'): Observable<any> {
    return this.http.post(url, object);
  }

  patch(url: any, data: any, type: any = 'json'): Observable<any> {
    const headers = this.generateHeaders();
    return this.http.patch(url, data, { headers, responseType: type });
  }

  upload(url: any, formData: FormData): Observable<any> {
    const headers = this.generateHeaders();
    return this.http.post(url, formData, { headers });
  }


  postLogin(url: any, object: any): Observable<any> {
    return this.http.post(url, object);
  }

  put(url: any, object: any, type: any = 'json'): Observable<any> {
    const headers = this.generateHeaders();
    return this.http.put(url, object, { headers, responseType: type });
  }

  delete(url: any, type: any = 'json'): Observable<any> {
    const headers = this.generateHeaders();
    return this.http.delete(url, { headers, responseType: type });
  }

  generate(url: any, object: any): Observable<any> {
    const headers = this.generateHeaders();
    return this.http.post(url, object, { headers, responseType: 'blob' });
  }
}
