import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/Models/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
message:string;
p:Product;
id:string;
  constructor(private productservice:ProductService,
    private route:Router,
    private router:ActivatedRoute) 
  {
     this.id=this.router.snapshot.paramMap.get('id');
     
  }

  ngOnInit(): void {
    this.productservice.getproduct(this.id).subscribe(
      data=>{
        this.p=data;
      }
    )
  }


  Update(product:Product)
  {
    let id=product.pid;
    this.productservice.Editproduct(id,product).subscribe(
      data=>{
        this.message="Product updated successfully";
      }
    )
  }

}
