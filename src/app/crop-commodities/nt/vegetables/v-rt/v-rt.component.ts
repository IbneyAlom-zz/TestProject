import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v-rt',
  templateUrl: './v-rt.component.html',
  styleUrls: ['./v-rt.component.css']
})
export class VRtComponent implements OnInit {
  flag:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  toggle(){
    this.flag=!this.flag;
      }
}
