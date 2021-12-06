import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  strData:string='';
  constructor(private notificationService:NotificationService) { }

  ngOnInit() {
    this.GetDataFromNotification();
  }

  GetDataFromNotification(){
    this.notificationService.notification.subscribe((notificationdata)=>{
      this.strData=notificationdata;
    })
  }

}
