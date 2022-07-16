import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent, HttpErrorResponse, HttpEvent, HttpClient, HttpHeaders } from "@angular/common/http";
import { MessageService } from 'src/app/core/services/message.service';


@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService implements HttpInterceptor {

  constructor(private message: MessageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

    return next.handle(this.addHeader(req)).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse) {
          switch ((<HttpErrorResponse>error).status) {
            case 0:
              this.handleError();
              return observableThrowError(error);
            default:
              return observableThrowError(error);
          }
        } else {
          return observableThrowError(error);
        }
      }));
  }

  addHeader(req: HttpRequest<any>): HttpRequest<any> {
    var clonedRequest = req.clone({ setHeaders: { 'Content-Type': 'application/json; charset=utf-8'}, responseType: "json" });
    return clonedRequest;
  }

  handleError() {
    this.message.showErrorMessage('Please run the server script by "npm run server"');
  }
}
