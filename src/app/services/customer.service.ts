import {Injectable, OnInit, OnDestroy} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  info: string;

  constructor() {
    console.log('CustomerService constructor');
  }

  getInfo() {
    return this.info;
  }

  setInfo(info) {
    this.info = info;
  }
}
