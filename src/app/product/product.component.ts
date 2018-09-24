import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  data = 'IPhone X';

  constructor() {
    console.log('ProductComponent constructor');
  }

  ngOnInit() {
  }

}
