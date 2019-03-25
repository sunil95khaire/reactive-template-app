import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable, throwError, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _employeeUrl = './api/employee/employee.json';
  employess: IEmployee[] = [];
  isLoad: boolean = false;
  constructor(private _http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    if(!this.isLoad) {
      this.isLoad = true; 
      return this._http.get<IEmployee[]>(this._employeeUrl).pipe(tap(
        _emp => this.employess = _emp
      ), catchError(this.handleError));       
    }     
      
    return of(this.employess);
  }

  addEmployee(employee){
    employee.Id = this.employess[this.employess.length - 1].Id + 1;
    this.employess.push(employee);    
  }

  updateEmployee(employee){
    const emp = this.employess.find(e => e.Id == employee.Id);
    emp.FirstName = employee.FirstName;
    emp.LastName = employee.LastName;
    emp.Address = employee.Address;
    emp.Age = employee.Age;
  }

  getEmployee(id): IEmployee {
    return this.employess.find(e => e.Id == id);
  }

  private handleError(err) {
    return throwError(err);
  }
}
