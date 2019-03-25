import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { TemplateFormComponent } from './template/template-form/template-form.component';
import { ReactiveFormComponent } from './reactive/reactive-form/reactive-form.component';

const routes : Routes = [
  { path: 'home', component: EmployeeComponent },
  { path: 'reactive', component: ReactiveFormComponent },
  { path: 'template', component: TemplateFormComponent },
  { path: 'detail/:id', component: ViewEmployeeComponent },
  { path: 'create/:id', component: CreateEmployeeComponent },
  { path: '', redirectTo: '/home', pathMatch:'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})

export class AppRoutingModule { }
