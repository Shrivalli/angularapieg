import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
message:string="Good Day!!!";
age:number;
validuser:boolean;
username:string;
password:string;
returnUrl:String;
  constructor(private authservice:AuthService,
      private router:Router,
      private route:ActivatedRoute)
     { 

    
  }

  ngOnInit(): void {
    this.authservice.Logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  Login()
  {
    this.validuser= this.authservice.Login(this.username,this.password);
    if(this.validuser==true)
    {
      localStorage.setItem("uname",this.username);
      this.router.navigate(['emplist']);
    }
    else
    {
      this.message="Sorry! Invalid User";
    }
  }

  

}
