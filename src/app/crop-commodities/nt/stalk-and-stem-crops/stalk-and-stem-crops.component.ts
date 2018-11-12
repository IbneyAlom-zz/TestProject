import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stalk-and-stem-crops',
  templateUrl: './stalk-and-stem-crops.component.html',
  styleUrls: ['./stalk-and-stem-crops.component.css']
})
export class StalkAndStemCropsComponent implements OnInit {
  flag:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  toggle(){
    this.flag=!this.flag;
      }

}
