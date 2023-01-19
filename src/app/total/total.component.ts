import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {
first:number;
second:number;
result:number;
  constructor() { }

  ngOnInit(): void {
  }

  add():void{
  this.result=this.first+this.second;
  console.log(this.result);
  }

}
