import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassesRoutingModule } from './classes-routing.module';
import { ClassesComponent } from '../classes/classes.component';
import { AllClassesComponent } from './all-classes/all-classes.component';
import { NewClassesComponent } from './new-classes/new-classes.component';
import { NbActionsModule, NbInputModule, NbListModule } from '@nebular/theme';
import { ThemetagsimportModule } from '../../../themetagsimport/themetagsimport.module';
import { ReactiveFormsModule } from '@angular/forms';
 import { EditClassComponent } from './edit-class/edit-class.component';
 

@NgModule({
  declarations: [
    ClassesComponent,
    AllClassesComponent,
     NewClassesComponent,
    EditClassComponent
 
    NewClassesComponent
   ],
  imports: [
    CommonModule,
    ClassesRoutingModule,
    
    NbInputModule,
    NbListModule,
    NbActionsModule,
    NbActionsModule,
    ThemetagsimportModule,
    ReactiveFormsModule
  
  
  ]
})
export class ClassesModule { }
