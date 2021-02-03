import { Component, OnInit } from '@angular/core';
import { from, Observable, Subject } from 'rxjs';
import { RestoService } from '../resto.service';
import { Employees } from '../employees';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  collection: any = [];
  employees: Employees[] = [];
  name: any;
  constructor(private resto: RestoService) { }
  private searchTerms = new Subject<string>();
  public ClientName = '';
  getDashList() {
    this.resto.getDashList().subscribe((result) => {
      this.employees = result;
    })
  }

  ngOnInit(): void {
    this.getDashList();
  }

  Search() {
    if (this.name == "" || this.name == undefined) {
      this.ngOnInit();
    }
    else {
      //alert(this.name);
      this.employees = this.employees.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }
}
