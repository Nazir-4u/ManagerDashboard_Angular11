import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Employees} from './employees';

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  rootUrl = "http://localhost:3000/";
  dashboardURL="http://localhost:3000/employee";

  constructor(private http: HttpClient) { }
 endPoint: string; 

  registerManager(data) {
    return this.http.post(this.rootUrl + "users", data);
  }

  loginManager(data) {
    // console.warn(data.email);
    // console.warn(this.rootUrl + `users?email=${data.email}&password=${data.password}`);
    return this.http.get(this.rootUrl + `users?email=${data.email}&password=${data.password}`);
  }

  getDashList() {
    console.warn('ggg',this.http.get(this.dashboardURL));
    
    return this.http.get<Employees[]>(this.dashboardURL);
  }
}
