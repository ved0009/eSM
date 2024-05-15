import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectComponent } from '../subject/subject.component';
import { ClassessWithSubjectsComponent } from './classess-with-subjects/classess-with-subjects.component';
import { AssignSubjectComponent } from './assign-subject/assign-subject.component';


@NgModule({
  declarations: [
    SubjectComponent,
    ClassessWithSubjectsComponent,
    AssignSubjectComponent
  ],
  imports: [
    CommonModule,
    SubjectRoutingModule
  ]
})
export class SubjectModule { }
