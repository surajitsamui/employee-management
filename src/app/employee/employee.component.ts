import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})


export class EmployeeComponent implements OnInit {

  employees: Employee[];

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getEmployees().subscribe(
      response => { this.employees = response; }
    );
  }

  deleteEmployee(employee: Employee): void {
    if (window.confirm('Are sure you want to delete this item ?')) {
      this.httpClientService.deleteEmployee(employee)
        .subscribe(data => {
          this.employees = this.employees.filter(u => u !== employee);
        })
    };
  }
}

