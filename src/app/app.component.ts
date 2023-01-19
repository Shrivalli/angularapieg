import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstprj';
  flag:boolean=false;
  constructor(public authservice:AuthService)
  {
   
  }

  logout():void
  {
    this.authservice.Logout();
  }
}
