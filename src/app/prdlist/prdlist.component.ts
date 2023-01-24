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
message:string;
  constructor(private productservice:ProductService) { }
  



  ngOnInit(): void {
    if(localStorage.getItem("token")!=null)
    {
    
    this.productservice.getproducts().subscribe(
      data=>{
        this.productlst=data;
        console.log(this.productlst);
      });
    } 
    
    else{
      console.log('sorry u have not logged in');
    }
  }

  clickMethod(product: Product) {
    if(confirm("Are you sure to delete "+product.pname)) {
      this.productservice.Deleteproduct(product.pid).subscribe()
      {
      this.message="Product deleted Successfully";
      this.productlst = this.productlst.filter(item => item.pid !=product.pid);
      console.log(this.productlst.length);
      }
      
    }
  }
}
