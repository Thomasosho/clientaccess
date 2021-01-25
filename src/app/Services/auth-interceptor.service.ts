import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authReq = req;
    const authToken = localStorage.getItem('token');
    if (authToken && !this.isPublicUrl(req)) {
      authReq = req.clone({
        headers: req.headers.set('Authorization', authToken),
      });
    }
    return next.handle(authReq);
  }

  isPublicUrl(req: HttpRequest<any>){
    const { url } = req;
    const path = url.split('/');
    const lastPath = path[path.length - 1];
    const isPublic =
      lastPath.toLocaleLowerCase().includes('public');
    return isPublic;
  }
}
