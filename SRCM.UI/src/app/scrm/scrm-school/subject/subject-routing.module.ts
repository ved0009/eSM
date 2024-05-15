import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../../../pages/miscellaneous/not-found/not-found.component';
import { SubjectComponent } from './subject.component';
import { ClassessWithSubjectsComponent } from './classess-with-subjects/classess-with-subjects.component';
import { AssignSubjectComponent } from './assign-subject/assign-subject.component';


const routes: Routes = [
  {
    path: "",
    component: SubjectComponent,
    children: [
      {
        path: "classesswithsubject",
        component: ClassessWithSubjectsComponent,
      },

      {
        path: "assignsubject",
        component: AssignSubjectComponent,
      },
      {
        path: "",
        redirectTo: "classesswithsubject",
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
export class SubjectRoutingModule { }
