import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService extends BaseService {

  constructor(public http: HttpClient) {
    super(http)
  }
}
