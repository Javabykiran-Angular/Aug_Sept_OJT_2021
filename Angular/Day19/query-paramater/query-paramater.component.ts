import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../notification.service';

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

  notificationData:string='';

  constructor(private routes:ActivatedRoute,
              private mynotification:NotificationService) { }

  ngOnInit() {
    this.ToDisplayNotificationData();
    this.GetDataFromURL();
  }

    ToDisplayNotificationData(){
        this.mynotification.notification.subscribe((notificationMSG)=>{
            this.notificationData=notificationMSG;
        })
    }



  GetDataFromURL(){
    this.routes.queryParamMap
    .subscribe((param)=>{
      this.myjson.id=+param.get("id");
      this.myjson.name=param.get("name");
      this.myjson.status=param.get("status");
    })
  }

  OnSend(inputName:string){
      this.mynotification.SendNotification(inputName);
  }

}
