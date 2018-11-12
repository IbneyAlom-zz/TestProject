import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent implements OnInit {
flag:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  toggle()
  {
    this.flag = !this.flag;
  }

}
