import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  name:string='Sumit Raokhande';
  imgUrl:string='../../assets/bg1.jpeg';
  num1:number=2;
  constructor() { }

  ngOnInit() {
  }

}
