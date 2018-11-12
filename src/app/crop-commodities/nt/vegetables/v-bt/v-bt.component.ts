import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v-bt',
  templateUrl: './v-bt.component.html',
  styleUrls: ['./v-bt.component.css']
})
export class VBtComponent implements OnInit {
  flag:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  toggle(){
    this.flag=!this.flag;
      }

}
