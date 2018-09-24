import { Component, OnInit, OnDestroy } from '@angular/core';
import {CustomerService} from '../services/customer.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [CustomerService]
})
export class ChildComponent implements OnInit, OnDestroy {
  info: string;

    constructor(private customerService: CustomerService) {
    console.log('CHILD COMPONENT CONSTRUCTOR');
    this.customerService.setInfo('ChildComponent Info');
    this.info = this.customerService.getInfo();
}

  ngOnInit() {
    console.log('CHILD COMPONENT INIT');
  }

  setSVCInfo(newInfo: string) {
    this.customerService.setInfo(newInfo);
  }

  getSVCInfo() {
    this.info = this.customerService.getInfo();
  }

ngOnDestroy() {
}
}
