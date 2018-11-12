import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuts-and-seeds',
  templateUrl: './nuts-and-seeds.component.html',
  styleUrls: ['./nuts-and-seeds.component.css']
})
export class NutsAndSeedsComponent implements OnInit {
  flag:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  toggle(){
    this.flag=!this.flag;
      }

}
