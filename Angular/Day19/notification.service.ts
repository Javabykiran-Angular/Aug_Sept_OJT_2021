import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

    // notification=new Subject<string>();
    notification=new BehaviorSubject('Welcome');

  constructor() { }

  SendNotification(data:string){
    this.notification.next(data);
  }



}


