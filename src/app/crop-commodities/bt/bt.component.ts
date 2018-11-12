import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt',
  templateUrl: './bt.component.html',
  styleUrls: ['./bt.component.css']
})
export class BTComponent implements OnInit {
flag:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  toggle(){
this.flag=!this.flag;
  }
}
