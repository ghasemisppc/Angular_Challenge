import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/core/services/message.service';
import { ProgressService } from 'src/app/core/services/progress.service';
import { environment } from 'src/environments/environment';
import { Address } from '../../models/address';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  addressList: Array<Address> = [];

  constructor(private message: MessageService, private progress: ProgressService, private addressService: AddressService) { }

  ngOnInit() {
    this.getAddressList();
  }

  getAddressList() {
    this.progress.showProgressSpinner();
    this.addressService.get(`${environment.BaseUrl}/addresses`).subscribe(res => {
      this.addressList = res;
      this.progress.hideProgressSpinner();

      if (!this.addressList.length) {
        this.message.showOkMessage('Please run the generate script by "npm run generate"');
      }

    })
  }

  showMsg() {
    this.message.showOkMessage('This is a message!');
  }

  showProgressSpinner() {
    this.progress.showProgressSpinner();
    setTimeout(() => this.progress.hideProgressSpinner(), 2000);
  }

}
