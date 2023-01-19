import { Injectable } from '@angular/core';
import { Employee } from 'src/Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  e:Employee={eid:101,ename:"Ram",salary:10000,doj:new Date('3/4/2020')};
  empid:number;

  elist:Employee[]=[
    {eid:101,ename:"Ram",salary:10000,doj:new Date('3/4/2020')},
    {eid:102,ename:"Jagan",salary:12000,doj:new Date('3/4/2021')},
    {eid:103,ename:"Vidarth",salary:14000,doj:new Date('3/4/2022')},
    {eid:104,ename:"Janani",salary:16000,doj:new Date('3/7/2020')}
  
  ]
  refreshList():Employee[]
{
  return this.elist;
}

addemp(e:Employee):void
{
  this.elist.push(e);
}

findemp(id:string):any{
  this.empid=Number(id);
this.e=this.elist.find(x=>x.eid==this.empid);
return this.e;
}
  constructor() { }
}
