import { Injectable } from '@angular/core';
import { Employee } from '../employee/employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({providedIn:'root'})
export class HttpClientService {

  employee: Employee;
  constructor(private httpClient: HttpClient) {}

  
     getEmployees()
  {
    let username='javainuse'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    
       return this.httpClient.get<Employee[]>('http://localhost:8091/angularEmployees',{headers});
  }

  public deleteEmployee(employee) {
    let username='javainuse'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.delete<Employee>("http://localhost:8091/angularEmployees" + "/"+ employee.empId,{headers});
  }

  public createEmployee(employee) {
    let username='javainuse'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.post<Employee>("http://localhost:8091/angularEmployees", employee,{headers});
  }
}