import { environment } from './../../environments/environment';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor {

  constructor() {}

  intercept(
      req: HttpRequest<any>,
      next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
        setHeaders: {
            Authorization: `Basic ${environment.key}`
        }
    });
      return next.handle(req);
  }

}