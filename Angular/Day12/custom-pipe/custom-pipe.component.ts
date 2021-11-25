import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  strDescription:string="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, sint. Harum veritatis placeat molestiae odit ducimus sunt laboriosam nisi necessitatibus maxime hic, adipisci explicabo quibusdam rem, excepturi suscipit nesciunt dolore!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, sint. Harum veritatis placeat molestiae odit ducimus sunt laboriosam nisi necessitatibus maxime hic, adipisci explicabo quibusdam rem, excepturi suscipit nesciunt dolore!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, sint. Harum veritatis placeat molestiae odit ducimus sunt laboriosam nisi necessitatibus maxime hic, adipisci explicabo quibusdam rem, excepturi suscipit nesciunt dolore!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, sint. Harum veritatis placeat molestiae odit ducimus sunt laboriosam nisi necessitatibus maxime hic, adipisci explicabo quibusdam rem, excepturi suscipit nesciunt dolore!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, sint. Harum veritatis placeat molestiae odit ducimus sunt laboriosam nisi necessitatibus maxime hic, adipisci explicabo quibusdam rem, excepturi suscipit nesciunt dolore!";
  
  constructor() { }

  ngOnInit() {
  }

}
