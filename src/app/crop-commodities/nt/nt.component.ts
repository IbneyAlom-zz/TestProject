import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nt',
  templateUrl: './nt.component.html',
  styleUrls: ['./nt.component.css']
})
export class NTComponent implements OnInit {
flag:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  toggle(){
this.flag = !this.flag;
  }
}
