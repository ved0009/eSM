import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrmSchoolRoutingModule } from './scrm-school-routing.module';
import { ScrmSchoolComponent } from './scrm-school.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    ScrmSchoolComponent,
    DashboardComponent,

  ],
  imports: [
    CommonModule,
    ScrmSchoolRoutingModule
  ]
})
export class ScrmSchoolModule { }
