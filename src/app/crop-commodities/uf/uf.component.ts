import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uf',
  templateUrl: './uf.component.html',
  styleUrls: ['./uf.component.css']
})
export class UFComponent implements OnInit {
  flag:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  toggle(){
    this.flag=!this.flag;
      }

}
