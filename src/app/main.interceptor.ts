import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  private _token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmE3NTk3YzJjMzkxNDA5MGI0ZTI4ZGY3MGJjY2U2NyIsInN1YiI6IjYyOTNjZDkwM2ZmMmRmMThjOThjYTk0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VuMMyLfwd188DfXyOsh3diivfukUrHHrFhl209tWYbg';

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {Authorization: `Bearer ${this._token}`}
    })
    return next.handle(request);
  }
}
