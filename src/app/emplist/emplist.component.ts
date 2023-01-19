import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/Models/Employee';
import { AuthService } from '../auth.service';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
elist:Employee[];
username:string;
  constructor(private empservice:EmpService,
    private router:Router,
    private authservice:AuthService)
   {
    
   }

  ngOnInit(): void {
    this.username=localStorage.getItem("uname");
    this.elist=this.empservice.refreshList();
    console.log(this.elist);
  }

  Update(eid:any)
  {
    console.log(eid);
    this.router.navigate(['/edit/'+eid]);
  }

  Logout()
  {
    this.authservice.Logout();
  }

}
