import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/Models/Employee';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.css']
})
export class EmpAddComponent implements OnInit {
//e:Employee={eid:101,ename:'vandhana',salary:8000,doj:new Date('2/3/2020')};
e:Employee={eid:null,ename:'',salary:null,doj:new Date()};
  constructor(private empservice:EmpService) {
    
   }

  ngOnInit(): void {
  }

  save(empform:any):void{
    this.e=empform;
    this.empservice.addemp(this.e);
    console.log(this.e);
    console.log(empform);
  }
}
