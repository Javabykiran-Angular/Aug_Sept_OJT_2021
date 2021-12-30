import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  allCountry:any[]=[];
  issubmitDissabled:boolean=true;
  backendResponse:string='';

  @Input() parentdata=<Employee>{};

  constructor(private service:HttpService) { }

  ngOnInit() {
    this.getAllCountry();
  }

  getAllCountry(){
      this.service.GetAllCountries()
      .subscribe((response)=>{
        this.allCountry=(<any>response);
      })
  }

  onupdate(){
    this.issubmitDissabled=false;
    this.parentdata.updatedby=sessionStorage.getItem("username");
    this.parentdata.updateddtm=Date.now();
    this.service.updateEmployee(this.parentdata)
    .subscribe((response)=>{
        this.backendResponse=response;
    })
  }

}
