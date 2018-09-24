import { Component, OnInit, OnDestroy } from '@angular/core';
import {CustomerService} from '../services/customer.service';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css'],
})
export class GrandchildComponent implements OnInit, OnDestroy {

  info: string;

  constructor(private customerService: CustomerService) {
    console.log('GRANDCHILD COMPONENT CONSTRUCTOR');
    this.customerService.setInfo('GrandchildComponent Info');
    this.info = this.customerService.getInfo();
  }

  ngOnInit() {
    console.log('GRANDCHILD COMPONENT INIT');
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
