import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { TokenServiceService } from "../TokenService/token-service.service";
import { NbSpinnerService } from "@nebular/theme";
@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  constructor(private _token: TokenServiceService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
     const token = this._token.GetJwtToken();
    if (token) {
      const authReq = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`),
      });
      return next.handle(authReq);
    } else {
      // If token is not available, proceed with the original request
      return next.handle(request);
    }

  }
}
