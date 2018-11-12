import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-crop',
  templateUrl: './food-crop.component.html',
  styleUrls: ['./food-crop.component.css']
})
export class FoodCropComponent implements OnInit {
  flag:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  toggle(){
    this.flag=!this.flag;
      }

}
