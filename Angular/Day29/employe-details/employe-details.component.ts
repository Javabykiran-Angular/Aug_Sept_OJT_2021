import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employe-details',
  templateUrl: './employe-details.component.html',
  styleUrls: ['./employe-details.component.css']
})
export class EmployeDetailsComponent implements OnInit {

  id:number=0;

  empobj=<Employee>{}

  constructor(private route:ActivatedRoute,
              private service: HttpService) { }

  ngOnInit() {
    this.GetDataFromURL();
    console.log(this.id)
    this.GetDataFromServer();
  }
  GetDataFromURL(){
      this.route.paramMap
      .subscribe((param)=>{
        this.id=+param.get("id")
      })
  }

  GetDataFromServer(){
      this.service.getParticularEmployee(this.id)
      .subscribe((response)=>{
        console.log(response)

        this.empobj=(<Employee>response);

      })
  }

}
