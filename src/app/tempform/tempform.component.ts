import { Component, OnInit } from '@angular/core';
import { Product } from 'src/Models/Product';

@Component({
  selector: 'app-tempform',
  templateUrl: './tempform.component.html',
  styleUrls: ['./tempform.component.css']
})
export class TempformComponent implements OnInit {
p:Product={pid:null,pname:"",price:null,qty:null,
dom:new Date(),suppid:null};
  constructor() { }

  ngOnInit(): void {
  }

  saveproduct(data:any):void
  {
    console.log(data);
    console.log(this.p);
  }
}
