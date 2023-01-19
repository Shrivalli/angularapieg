import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TotalComponent } from './total/total.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpAddComponent } from './emp-add/emp-add.component';
import { TempformComponent } from './tempform/tempform.component';
import { EditempComponent } from './editemp/editemp.component';
import { PrdlistComponent } from './prdlist/prdlist.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TotalComponent,
    EmplistComponent,
    EmpAddComponent,
    TempformComponent,
    EditempComponent,
    PrdlistComponent,
    EditProductComponent,
    DeleteProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
