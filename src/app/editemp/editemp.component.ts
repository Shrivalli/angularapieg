import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Employee } from 'src/Models/Employee';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.css']
})
export class EditempComponent implements OnInit {
e:Employee;
id:string;
  constructor(private empservice:EmpService,private Activatedroute:ActivatedRoute,
    private router:Router) 
    {
     const id=this.Activatedroute.snapshot.paramMap.get('id');
      console.log(this.id);
      this.e=this.empservice.findemp(id);
    }

  ngOnInit(): void {
  }

 

}
