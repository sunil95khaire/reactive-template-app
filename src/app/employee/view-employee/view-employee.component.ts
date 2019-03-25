import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  employee: IEmployee; // = new IEmployee();
  employees: IEmployee[];

  constructor(private service: EmployeeService, private route: ActivatedRoute,
    private router: Router, private location: Location) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.employee = this.service.getEmployee(id);
  }

  goBack(){
    this.location.back();
  }

  editEmployee() {
    this.router.navigate(['/create', this.employee.Id]);
  }

  save(emp) {
    console.log(emp);
  }

  back(){
    this.location.back();
  }
}

