import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { IEmployee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: IEmployee[];
  filteredemployees: IEmployee[];
  errorMessage: string = "";
  filterBy: string;

  constructor(private _empService: EmployeeService) { }

  ngOnInit() {
    this._empService.getEmployees()
      .subscribe(stocks => {
        this.employees = stocks;        
        this.filteredemployees = this.employees;
      },
        error => this.errorMessage = <any>error);
  }

  Delete(id) {
    this.filteredemployees = this.filteredemployees.filter(e => e.Id != id);
  }

  Search() {
    this.filteredemployees = this.employees.filter((emp: IEmployee) =>
      emp.FirstName.toLocaleLowerCase().indexOf(this.filterBy.toLocaleLowerCase()) !== -1);
  }
}
