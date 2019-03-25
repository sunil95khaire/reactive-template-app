import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employees: IEmployee[];  
  errorMessage: string;  
  isEdit: boolean;
  id: string;

  employee: IEmployee = new IEmployee();

  constructor(
    private service: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    //const id = this.route.snapshot.paramMap.get("id");
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.initialiseState(); // reset and set based on new parameter this time
  });

    this.isEdit = this.id != "0" && this.id != "null";
    if (this.isEdit) {
      this.employee = this.service.getEmployee(this.id);
    }
  }

  initialiseState(){
    this.employee = new IEmployee();
  }

  savePatient(empForm: NgForm): void {
    var emp = Object.assign({}, this.employee);
    this.isEdit ? this.service.updateEmployee(emp) : this.service.addEmployee(emp);
    this.navigateToEmployeeList();
  }

  navigateToEmployeeList() {
    this.router.navigate(["/home"]);
  }
}
