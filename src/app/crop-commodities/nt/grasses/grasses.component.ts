import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grasses',
  templateUrl: './grasses.component.html',
  styleUrls: ['./grasses.component.css']
})
export class GrassesComponent implements OnInit {
  flag:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  toggle(){
    this.flag=!this.flag;
      }

}
