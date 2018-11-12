import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v-uf',
  templateUrl: './v-uf.component.html',
  styleUrls: ['./v-uf.component.css']
})
export class VUfComponent implements OnInit {
  flag:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  toggle(){
    this.flag=!this.flag;
      }

}
