import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NbSpinnerService } from '@nebular/theme';
import { finalize, tap } from 'rxjs/operators';
import { DialongService } from '../Dialong/dialong.service';
import { ToasterService } from '../Toaster/toaster.service';
import { webToasterPosition } from '../Toaster/ToastSettings';
import { Router } from '@angular/router';
import { LoaderService } from '../loader.service';



@Injectable()
export class LoaderInterceptorInterceptor implements HttpInterceptor {

  constructor(private spinnerService:  LoaderService
    ,private _dl:ToasterService,private _router:Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  this.spinnerService.showLoad();
    return next.handle(request)
     .pipe(
      tap(
        (event: HttpEvent<any>) => {
          // // Check if the response is an HTTP response
          // if (event instanceof HttpResponse) {
          // }
        },
        (error: any) => {
           if (error instanceof HttpErrorResponse) {
            if (error.status===401) {
              this._dl.showToast(webToasterPosition.toasterTopLeftPosition,'danger','Please login again');
              // this._router.navigateByUrl('/auth');
            }
            if (error.statusText === 'Unknown Error') {
              this._dl.showToast(webToasterPosition.toasterTopLeftPosition,'danger','Server down please try after some times !');
              // this._router.navigateByUrl('/auth');
            }
          }
        }
      ),
       finalize(() => {
        // setTimeout(() => {
          this.spinnerService.hideLoad();
        // }, 8000);

       })
     );
 }
  }

