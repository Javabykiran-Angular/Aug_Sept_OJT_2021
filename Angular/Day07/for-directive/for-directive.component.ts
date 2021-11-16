import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-directive',
  templateUrl: './for-directive.component.html',
  styleUrls: ['./for-directive.component.css']
})
export class ForDirectiveComponent implements OnInit {

  //array of Object
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
