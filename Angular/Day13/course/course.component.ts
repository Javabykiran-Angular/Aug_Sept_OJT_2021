import { Component, OnInit } from '@angular/core';
import { courseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

    myCourse=[];
  constructor(private service:courseService) { 
  //  let service=new courseService();
   // this.myCourse=service.getCourse();
  }

  ngOnInit() {
  this.getall();
  }

  getall(){
    this.myCourse=this.service.getCourse();
  }



}
