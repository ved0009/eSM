import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "../../../pages/miscellaneous/not-found/not-found.component";
import { StudentsComponent } from "./students.component";
import { AllStudentsComponent } from "./all-students/all-students.component";
import { NewStudentsComponent } from "./new-students/new-students.component";
import { ManageFamiliesComponent } from "./manage-families/manage-families.component";
import { ActiceInActicveComponent } from "./actice-in-acticve/actice-in-acticve.component";
import { AdimissionLetterComponent } from "./adimission-letter/adimission-letter.component";
import { StudentIDCardComponent } from "./student-idcard/student-idcard.component";
import { PrintBasicListComponent } from "./print-basic-list/print-basic-list.component";
import { PromoteStudentsComponent } from "./promote-students/promote-students.component";
import { ViewStudentComponent } from "./view-student/view-student.component";

const routes: Routes = [
  {
    path: "",
    component: StudentsComponent,
    children: [
      {
        path: "allstudent",
        component: AllStudentsComponent,
      },

      {
        path: "newstudent",
        component: NewStudentsComponent,
      },
      {
        path: "viewstudent/:id",
        component: ViewStudentComponent,
      },

      {
        path: "managefamilies",
        component: ManageFamiliesComponent,
      },

      {
        path: "activeinactive",
        component: ActiceInActicveComponent,
      },

      {
        path: "admissionletter",
        component: AdimissionLetterComponent,
      },

      {
        path: "studentcard",
        component: StudentIDCardComponent,
      },
      {
        path: "printbasiclist",
        component: PrintBasicListComponent,
      },
      {
        path: "promotestudent",
        component: PromoteStudentsComponent,
      },

      {
        path: "",
        redirectTo: "allstudent",
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
  exports: [RouterModule],
})
export class StudentsRoutingModule {}
