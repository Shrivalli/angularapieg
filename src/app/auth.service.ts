import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
islogged:boolean;
username:string;
password:string;
  constructor(private router:Router) { }

  Login(username:string,password:string):any
  {
    if(username=='admin' && password=='abcd')
    {
      this.islogged=true;
      return true;
      
    }
    else
    {
      this.islogged=false;
       return false;
    }
  }

  Logout()
  {
    this.islogged=false;
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
