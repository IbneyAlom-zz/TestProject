import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crop-commodities',
  templateUrl: './crop-commodities.component.html',
  styleUrls: ['./crop-commodities.component.css']
})
export class CropCommoditiesComponent implements OnInit {

  flag:boolean=true;
  constructor() { }

  ngOnInit() {
  }
  toggle(){
    this.flag = !this.flag;
  }

}
