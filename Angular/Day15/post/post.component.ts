import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any[]=[];

  constructor(private service:HttpService) { }

  ngOnInit() {
    this.GetAllPost();
  }

  GetAllPost(){
    this.service.getPost()
    .subscribe((response)=>{
      console.log(response);
      this.posts=(<any>response);

    })
  }

  onPost(mytitle,mybody){
      let obj={
        title:mytitle,
        body:mybody
      }

      this.service.PostData(obj)
      .subscribe((response)=>{
        console.log(response);
      })
  }


  onDelete(id){
    this.service.DeletePost(id)
    .subscribe((response)=>{
      console.log(response);
    })
  }

}
