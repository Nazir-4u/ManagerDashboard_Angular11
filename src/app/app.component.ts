import { Component } from '@angular/core';
//import { from } from 'rxjs';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Resto';
  constructor(private route:Router){}
  userid:boolean=false;
  userlogin:boolean=true; 
  username:any=[];
  isLogin()
  {
    this.username=sessionStorage.getItem('user');
    console.warn('islogin user',this.username);
    
    if(this.username)
    {
      this.userid=true;
      this.userlogin=false;
    } 
    else{
      this.userid=false;
      this.userlogin=true;
    }
  }

  isLogout()
  {
    sessionStorage.setItem('user','');
    this.isLogin();
    this.route.navigate(['']);    
  }
}
