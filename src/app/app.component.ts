import {Component} from '@angular/core';
import {CustomerService} from './services/customer.service';
import {OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Service Provider Demo';
  info: string;

  constructor(private customerService: CustomerService) {
    console.log('APP COMPONENT CONSTRUCTOR');
    this.customerService.setInfo('AppComponent Info');
    this.info = this.customerService.getInfo();
  }

  ngOnInit() {
    console.log('APP COMPONENT INIT');
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
