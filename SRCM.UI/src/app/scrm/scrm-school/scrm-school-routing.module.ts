import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "../../pages/miscellaneous/not-found/not-found.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ScrmSchoolComponent } from "./scrm-school.component";

const routes: Routes = [
  {
    path: "",
    component: ScrmSchoolComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "Students",
        loadChildren: () =>
          import("./Students/students.module").then((m) => m.StudentsModule),
      },
      {
        path: "Class",
        loadChildren: () =>
          import("./classes/classes.module").then((m) => m.ClassesModule),
      },
      {
        path: "Subject",
        loadChildren: () =>
          import("./subject/subject.module").then((m) => m.SubjectModule),
      },
      {
        path: "Employees",
        loadChildren: () =>
          import("./employees/employees.module").then((m) => m.EmployeesModule),
      },
    ],
  },

  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScrmSchoolRoutingModule {}
