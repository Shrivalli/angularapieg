import { Component, OnInit } from '@angular/core';
import { Product } from 'src/Models/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-prdlist',
  templateUrl: './prdlist.component.html',
  styleUrls: ['./prdlist.component.css']
})
export class PrdlistComponent implements OnInit {
productlst:Product[];
  constructor(private productservice:ProductService) { }
  



  ngOnInit(): void {
    this.productservice.getproducts().subscribe(
      data=>{
        this.productlst=data;
        console.log(this.productlst);
      }
      
    )
  }

}
