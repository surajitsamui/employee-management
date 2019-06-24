import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee/employee';

@Injectable({providedIn:'root'})
export class HttpClientService {

  employee: Employee;
  constructor(private httpClient: HttpClient) {}

  getEmployees() {
    console.log("test call");
    return this.httpClient.get<Employee[]>('http://localhost:8091/angularEmployees');
  }
  public deleteEmployee(employee) {
    return this.httpClient.delete<Employee>("http://localhost:8091/angularEmployees" + "/" + employee.empId);
  }

  public createEmployee(employee) {
    return this.httpClient.post<Employee>("http://localhost:8091/angularEmployees", employee);
  }
}