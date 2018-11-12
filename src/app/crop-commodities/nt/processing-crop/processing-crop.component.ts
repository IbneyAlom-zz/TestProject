import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-processing-crop',
  templateUrl: './processing-crop.component.html',
  styleUrls: ['./processing-crop.component.css']
})
export class ProcessingCropComponent implements OnInit {
  flag:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  toggle(){
    this.flag=!this.flag;
      }

}
