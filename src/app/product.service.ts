import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
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

  getproduct(id:string):Observable<Product>
  {
    return this.httpclient.get<Product>(this.url+"/GetProdById?id="+id);
  }
  addproduct(p:Product):Observable<Product>
  {
    return this.httpclient.post<Product>(this.url,p,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
    });
  }

    Editproduct(id:number,p:Product):Observable<Product>
  {
    return this.httpclient.put<Product>(this.url+"?id="+id,p,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
    });
  }
    
  Deleteproduct(id:number):Observable<Product>
  {
    return this.httpclient.delete<Product>(this.url+"?id="+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
      
    });
    this.getproducts();
  }

  private manageError(err_response:HttpErrorResponse)
  {
    if(err_response.error instanceof ErrorEvent)
    console.error('Client Side Error:',err_response.error.message);
    else
    console.error('Server Side Error:',err_response);

    return throwError('There is a little problem while processing your request.Sorry for the inconvenience');
    
  }

}

