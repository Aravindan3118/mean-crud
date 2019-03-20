import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { MaterialModule } from './employee/shared/material/material.module';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [EmployeeComponent, EmployeeListComponent, CreateEmployeeComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    MaterialModule,FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    EmployeeComponent
  ],
  entryComponents:[CreateEmployeeComponent]
})
export class EmployeesModule { }
