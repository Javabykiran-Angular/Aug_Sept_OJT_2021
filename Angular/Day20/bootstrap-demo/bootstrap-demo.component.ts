import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-demo',
  templateUrl: './bootstrap-demo.component.html',
  styleUrls: ['./bootstrap-demo.component.css']
})
export class BootstrapDemoComponent implements OnInit {

  arrObj=[
    {
      name:"samsung",
      price:25000,
      quantity:1
    },
    {
      name:"Motorolla",
      price:30000,
      quantity:1
    },
    {
      name:"OnePlus",
      price:37000,
      quantity:1
    },
    {
      name:"RealMe",
      price:29000,
      quantity:1
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
