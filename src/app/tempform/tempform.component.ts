import { Component, OnInit } from '@angular/core';
import { Product } from 'src/Models/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-tempform',
  templateUrl: './tempform.component.html',
  styleUrls: ['./tempform.component.css']
})
export class TempformComponent implements OnInit {
p:Product={pid:null,pname:"",price:null,qty:null,
dom:new Date(),suppid:null};
message:string;
  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
  }

  saveproduct(data:any):void
  {
   this.productservice.addproduct(data).subscribe(
     data=>{
       this.message="Product Added Successfully";
    }
   ) 
    console.log(data);
    console.log(this.p);
  }

  clear()
  {
    
  }
}
