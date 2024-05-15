import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassesRoutingModule } from './classes-routing.module';
import { ClassesComponent } from '../classes/classes.component';
import { AllClassesComponent } from './all-classes/all-classes.component';
import { NewClassesComponent } from './new-classes/new-classes.component';


@NgModule({
  declarations: [
    ClassesComponent,
    AllClassesComponent,
    NewClassesComponent
  ],
  imports: [
    CommonModule,
    ClassesRoutingModule
  ]
})
export class ClassesModule { }
