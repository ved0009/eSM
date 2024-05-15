import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from '../employees/employees.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { StafIdCardComponent } from './staf-id-card/staf-id-card.component';
import { JobLetterComponent } from './job-letter/job-letter.component';


@NgModule({
  declarations: [
    EmployeesComponent,
    AllEmployeesComponent,
    StafIdCardComponent,
    JobLetterComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
