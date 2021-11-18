import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @Input() AppRating:number=0;


  strdata:string="data from Parent.......";
   jsonObj={
     fname:'sumit',
     id:9,
     status:true
   }

   name:string='';

  constructor() { }

  ngOnInit() {
  }

  onClick(value){
      this.name=value;
  }

}
