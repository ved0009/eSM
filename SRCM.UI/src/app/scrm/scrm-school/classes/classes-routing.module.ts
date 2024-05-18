import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../../../pages/miscellaneous/not-found/not-found.component';
import { ClassesComponent } from './classes.component';
import { AllClassesComponent } from './all-classes/all-classes.component';
import { NewClassesComponent } from './new-classes/new-classes.component';
import { EditClassComponent } from './edit-class/edit-class.component';


const routes: Routes = [
  {
    path: "",
    component: ClassesComponent,
    children: [
      {
        path: "allclass",
        component: AllClassesComponent,
      },

      {
        path: "newclass",
        component: NewClassesComponent,
      },
      {
        path: "editClass/:id",
        component: EditClassComponent,
      },

      {
        path: "",
        redirectTo: "allclass",
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
export class ClassesRoutingModule { }
