import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  public get headers() {
    var header: HttpHeaders | undefined | null;
   // header = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    //header = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8', 'X-SGH-AuthToken': this.browserStorageService.accessToken() });
    header = new HttpHeaders();
    return header;
  }

  public get httpOptions() {
    var httpOption: any;
    //httpOption = { headers: this.headers, responseType: "json" };
    return httpOption;
  }

  constructor(public http: HttpClient) { }

  public get(apiUrl: string): Observable<any> {
    return this.http.get(apiUrl, this.httpOptions)
      .pipe(
        map(res => res)
      )
  }
}
