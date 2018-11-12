import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v-nt',
  templateUrl: './v-nt.component.html',
  styleUrls: ['./v-nt.component.css']
})
export class VNtComponent implements OnInit {
  flag:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  toggle(){
    this.flag=!this.flag;
      }
}
