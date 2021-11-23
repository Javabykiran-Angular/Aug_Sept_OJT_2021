import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Output() ChildStrEvent = new EventEmitter();

  strData:string='String Data from child.....';

   @Output()  ChildJsonEvent=new EventEmitter();

  @Output() ChildArrayEvent=new EventEmitter();

   jsonObj={
     clothtype:'cotton',
     brand:'Allen Soley',
     pricerange:'2000-5000'
   }

   stringArray=["Kids","Women","Men"];

  constructor() { }

  ngOnInit() {
  }

  onSendStr(){
    this.ChildStrEvent.emit(this.strData);
    this.ChildJsonEvent.emit(this.jsonObj);
    this.ChildArrayEvent.emit(this.stringArray);

  }

}
