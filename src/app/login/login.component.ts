import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgModule } from '@angular/core'
import { RestoService } from '../resto.service';
import { from } from 'rxjs';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private resto: RestoService, private comp: AppComponent, private route: Router) { }
  login = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  loginResto() {
    console.warn(this.login.value);

    this.resto.loginManager(this.login.value).subscribe((result) => {
      // console.warn('ddd', result);
      if (Object.keys(result).length !== 0) {
        //  console.warn('user name',JSON.stringify(result[0].name));

        sessionStorage.setItem("user", result[0].name);
        alert('login success');
        this.login.reset({});

        this.comp.isLogin();
        this.route.navigate(['dashboard']);
      }
      else {
        localStorage.setItem("user", null);
        alert('Failed');
      }
    })
  }

  ngOnInit(): void {
  }
  
  get email() { return this.login.get('email'); }
  get password() { return this.login.get('password'); }
}
