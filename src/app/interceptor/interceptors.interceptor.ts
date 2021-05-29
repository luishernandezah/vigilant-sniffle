import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import  Swal  from 'sweetalert2';

@Injectable()
export class InterceptorsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    return next.handle(req).pipe(catchError((error: HttpErrorResponse ) => {
      if(error.status >= 500){
        Swal.fire({
          title: 'Error Services ?',
          text: "No Fuiste Tu, Fui Yo por favor Reiniciar el servidor! puede ser error de validación en backend disculpame pero todavia falta",
          icon: 'warning',
          cancelButtonColor: '#d33',
        })
      }
      if(error.status == 0){
        Swal.fire({
          title: 'Error Services ?',
          text: "No Fuiste Tu, Fui Yo por favor Reiniciar el servidor!",
          icon: 'warning',
       
    
          cancelButtonColor: '#d33',
       
        })
      }
      console.log(error)
        return throwError (error);
      }
      
    ))
  }
}
