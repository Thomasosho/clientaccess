import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SwalMixinService } from './swal-mixin.service';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  apiURL = environment.apiURL;
  token: string;

  header: HttpHeaders;
  headerFile: HttpHeaders;
  headerNoAuth: HttpHeaders;

  constructor(private http: HttpClient, private swal: SwalMixinService) {
    this.token = localStorage.getItem('token');
    this.header = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: this.token,
    });
    this.headerFile = new HttpHeaders({
      Authorization: this.token,
    });

    this.headerNoAuth = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
  }

  postRequestFile(url, data) {
    return this.http.post(`${this.apiURL + url}`, data, {
      headers: this.headerFile,
    });
  }

  postRequestNoAuth(url, data) {
    return this.http.post(`${this.apiURL + url}`, data, {
      headers: this.headerNoAuth,
    });
  }

  getRequestNoAuth(url) {
    return this.http.get(`${this.apiURL + url}`, {
      headers: this.headerNoAuth,
    });
  }

  getRequest(url) {
    return this.http.get(`${this.apiURL + url}`);
  }

  getRequestImAuth(getUrl, token) {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token,
    });
    return this.http.get(`${this.apiURL + getUrl}`, { headers: header });
  }

  postRequest(url, data) {
    return this.http.post(`${this.apiURL + url}`, data);
  }

  postRequestImAuth(url, data, token) {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token,
    });
    return this.http.post(`${this.apiURL + url}`, data, { headers: header });
  }

  putRequest(url, data) {
    return this.http.put(`${this.apiURL + url}`, data, {
      headers: this.header,
    });
  }

  deleteRequest(deleteUrl) {
    return this.http.delete(`${this.apiURL}${deleteUrl}`, {
      headers: this.header,
    });
  }

  downloadFile(url): Observable<Blob> {
    return this.http.get(url, { responseType: 'blob' });
  }
}
