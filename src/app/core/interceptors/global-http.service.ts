import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
  HttpClient
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
// import { SnackBarService, MessageEnum } from '@core/services/mat-services/snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalHttpService {

  constructor(private router: Router,
    // private snackBarService: SnackBarService
  ) { }

  // http intercepter
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        // console.log('event : ', event);
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.Forbidden || error.status === HttpStatusCode.Unauthorized) {
          // this.snackBarService.showSnackBarComponent(MessageEnum.Unauthorized, MessageEnum.SessionExpired, 10, 'error');
          this.router.navigate(['/auth/login']);
        }
        console.error('apierror : ', error);
        return throwError(error);
      }));
  }

}

export enum HttpStatusCode {
  Unauthorized = 401,
  Forbidden = 403
}
