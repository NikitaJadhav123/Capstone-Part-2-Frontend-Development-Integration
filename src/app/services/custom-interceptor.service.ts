import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class CustomInterceptorService {

  
  
  constructor(private authService: AuthserviceService) { }
  apisToSkip = ['auth/login', 'v1/auth/register'];
  
  skipRoute(api, request) {
    console.log(request);
    if (request.url.indexOf(api) > -1) {// added to cope with existing design of endpoints.
      return true;
    } 
    //else {
    //  if (request.method === 'GET' && request.url.indexOf('bookings') < 0) {
    //    return true;
    //  }
      return false;
   //}
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const skipToken = this.apisToSkip.find((api) =>
      this.skipRoute(api, req)
    );
    if (skipToken) {
      return next.handle(req);
    }
    req = req.clone({
      headers: req.headers.set(
        'X-ACCESS-TOKEN',
        this.authService.getToken()
      ),
    });
    console.log('token added');
    console.log(req);
    return next.handle(req);
  
  }
}
