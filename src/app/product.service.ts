import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
p:Product;
plist:any;
url:string="https://localhost:44396/api/Product";
  constructor(private httpclient:HttpClient) {
    // this.plist=[
    //   {pid:1,pname:'abc',price:40,qty:5,dom:new Date('3/4/2020'),suppid:501},
    //   {pid:2,pname:'def',price:60,qty:8,dom:new Date('3/4/2021'),suppid:501},
    //   {pid:3,pname:'ghi',price:80,qty:6,dom:new Date('3/4/2022'),suppid:502}
    // ]
   }

  getproducts():Observable<Product[]>{
    this.plist=this.httpclient.get(this.url);
    return this.plist;
  }
    
}

