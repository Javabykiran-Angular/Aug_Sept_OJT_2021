import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private BaseUrl:string='http://localhost:8080/api/';

    constructor(private http:HttpClient) { }

    LoginCheck(obj){
       return (this.http.post(`${this.BaseUrl}logincheck`,obj));
    }

    GetAllEmployee(){
     return (this.http.get(`${this.BaseUrl}getallemployee`));
    }

    GetAllCountries(){
       return (this.http.get(`${this.BaseUrl}getallcountry`));
    }

    AddEmployee(obj){
          return (this.http.post(`${this.BaseUrl}addemployee`,obj,{responseType:'text'}));
    }


    
}
