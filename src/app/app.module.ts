import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AppRoutingModule } from './app-routing.module';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { EmployeeService } from './employee/employee.service';
import { ReactiveFormComponent } from './reactive/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template/template-form/template-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ViewEmployeeComponent,
    CreateEmployeeComponent,
    ReactiveFormComponent,
    TemplateFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
