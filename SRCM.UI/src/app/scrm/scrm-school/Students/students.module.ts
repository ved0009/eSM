import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StudentsRoutingModule } from "./students-routing.module";
import { AllStudentsComponent } from "./all-students/all-students.component";
import { StudentsComponent } from "./students.component";
import { NewStudentsComponent } from "./new-students/new-students.component";
import { ManageFamiliesComponent } from "./manage-families/manage-families.component";
import { ActiceInActicveComponent } from "./actice-in-acticve/actice-in-acticve.component";
import { AdimissionLetterComponent } from "./adimission-letter/adimission-letter.component";
import { StudentIDCardComponent } from "./student-idcard/student-idcard.component";
import { PrintBasicListComponent } from "./print-basic-list/print-basic-list.component";
import { PromoteStudentsComponent } from "./promote-students/promote-students.component";
import { ThemetagsimportModule } from "../../../themetagsimport/themetagsimport.module";
import { ReactiveFormsModule } from "@angular/forms";
import { NbAccordionModule } from "@nebular/theme";
import { ViewStudentComponent } from './view-student/view-student.component';

@NgModule({
  declarations: [
    StudentsComponent,
    AllStudentsComponent,
    NewStudentsComponent,
    ManageFamiliesComponent,
    ActiceInActicveComponent,
    AdimissionLetterComponent,
    StudentIDCardComponent,
    PrintBasicListComponent,
    PromoteStudentsComponent,
    ViewStudentComponent
  ],
  imports: [CommonModule, StudentsRoutingModule,ThemetagsimportModule,ReactiveFormsModule,NbAccordionModule],
})
export class StudentsModule {}
