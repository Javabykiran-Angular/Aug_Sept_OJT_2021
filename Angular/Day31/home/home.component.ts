import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  EmpData:any[]=[];
  isRadioClick:boolean=false;

  modalRef: BsModalRef;  

  config = {
    animated: true,
    
    ignoreBackdropClick: true,
    class: "alert alert-danger"
  };
  
  empobj=<Employee>{};
  constructor(private service:HttpService,
              private router:Router,
              private modalservice:BsModalService) { }

  ngOnInit() {
    this.GetAllEmoloyee();
  }

  GetAllEmoloyee(){
      this.service.GetAllEmployee()
      .subscribe((response)=>{
        console.log(response);
        this.EmpData=(<any>response);
      })
  }

  onAddEmployee(){
      this.router.navigate(["/addEmployee"]);
  }
  onRadioClick(item){
    this.isRadioClick=true;
    // console.log(item);
    this.empobj=item;
  }

  radioCheck(){
    if(this.isRadioClick==true){
      return true;
    }else{
      return false;
    }
  }

  onEdit(popup: TemplateRef<any>){
      if(this.radioCheck()){
        //logic

        this.modalRef= this.modalservice.show(popup,this.config)


      }else{
        alert("Please select a record to upadte...");
      }


  }



}
