import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../../../pages/miscellaneous/not-found/not-found.component';
import { EmployeesComponent } from './employees.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { StafIdCardComponent } from './staf-id-card/staf-id-card.component';
import { JobLetterComponent } from './job-letter/job-letter.component';
 import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
  

const routes: Routes = [
  {
    path: "",
    component: EmployeesComponent,
    children: [
      {
        path: "allemployees",
        component: AllEmployeesComponent,
      },
      {
         path: "newemployees",
        component: AddNewEmployeeComponent,
      },
      { 
        path: "staffcard",
        component: StafIdCardComponent,
      },
      {
        path: "jobletter",
        component: JobLetterComponent,
      },
      {
        path: "",
        redirectTo: "allemployees",
        pathMatch: "full",
      },
      {
        path: "**",
        component: NotFoundComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
