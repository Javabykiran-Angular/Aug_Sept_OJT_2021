import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-paramater',
  templateUrl: './query-paramater.component.html',
  styleUrls: ['./query-paramater.component.css']
})
export class QueryParamaterComponent implements OnInit {

  myjson={
    id:0,
    name:'',
    status:'false'
  }
  constructor(private routes:ActivatedRoute) { }

  ngOnInit() {
    this.GetDataFromURL();
  }

  GetDataFromURL(){
    this.routes.queryParamMap
    .subscribe((param)=>{
      this.myjson.id=+param.get("id");
      this.myjson.name=param.get("name");
      this.myjson.status=param.get("status");
    })
  }

}
