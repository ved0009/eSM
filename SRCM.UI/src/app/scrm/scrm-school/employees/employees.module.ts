import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from '../employees/employees.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { StafIdCardComponent } from './staf-id-card/staf-id-card.component';
import { JobLetterComponent } from './job-letter/job-letter.component';
 import { ThemetagsimportModule } from '../../../themetagsimport/themetagsimport.module';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
  

@NgModule({
  declarations: [
    EmployeesComponent,
    AllEmployeesComponent,
    StafIdCardComponent,
     JobLetterComponent,
    AddNewEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    ThemetagsimportModule,
    ReactiveFormsModule
 
    JobLetterComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
   ]
})
export class EmployeesModule { }
