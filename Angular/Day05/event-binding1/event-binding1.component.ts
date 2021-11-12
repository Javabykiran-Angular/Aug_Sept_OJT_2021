import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding1',
  templateUrl: './event-binding1.component.html',
  styleUrls: ['./event-binding1.component.css']
})
export class EventBinding1Component implements OnInit {

  count:number=0;
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    if(this.count==0){
      console.log("Click Event Occur....");
      this.count++;
    }
    
  }

  onImageClick(){
    console.log("on Image Click....");
  }

  onEvent(myevent){
    console.log(myevent);

    console.log("Data is ===========> "+myevent.target.value)

  }

  onClick1(inputname){
      console.log(inputname);
      console.log("Data is =====> "+inputname.value);
      inputname.style.background='green';
  }
  

}
