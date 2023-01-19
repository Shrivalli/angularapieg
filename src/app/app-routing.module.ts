import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditempComponent } from './editemp/editemp.component';
import { EmpAddComponent } from './emp-add/emp-add.component';
import { EmplistComponent } from './emplist/emplist.component';
import { LoginComponent } from './login/login.component';
import { PrdlistComponent } from './prdlist/prdlist.component';
import { TempformComponent } from './tempform/tempform.component';
import { TotalComponent } from './total/total.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'total',component:TotalComponent},
  {path:'emplist',component:EmplistComponent},
  {path:'empadd',component:EmpAddComponent},
  {path:'tempform',component:TempformComponent},
  {path:'prdlist',component:PrdlistComponent},
  {path:'editprd/:id',component:EditProductComponent},
  {path:'deleteprd/:id',component:DeleteProductComponent},
  {path:'edit/:id',component:EditempComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
