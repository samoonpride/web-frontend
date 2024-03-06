import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/services/storage/storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken = inject(StorageService).getToken();

    if (!authToken) {
      return next.handle(request);
    }

    const newReq = request.clone({headers:
      request.headers.append('Authorization', "Bearer " + authToken),
    });

    return next.handle(newReq);
  }

}
