import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuild-pipe',
  templateUrl: './inbuild-pipe.component.html',
  styleUrls: ['./inbuild-pipe.component.css']
})
export class InbuildPipeComponent implements OnInit {

  strdata="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt itaque, totam rem esse natus eveniet rerum sit provident quisquam voluptatibus maiores sint dicta doloribus harum, eos error quia autem nostrum?";
  num2=-452.78956324557;

  mydate=new Date();
  constructor() { }

  ngOnInit() {
  }

}
