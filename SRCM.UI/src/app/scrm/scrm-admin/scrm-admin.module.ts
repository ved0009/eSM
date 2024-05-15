import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrmAdminRoutingModule } from './scrm-admin-routing.module';
import { ProjectAdminDashboardComponent } from './project-admin-dashboard/project-admin-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ThemetagsimportModule } from '../../themetagsimport/themetagsimport.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddSchoolComponent } from './School/add-school/add-school.component';
import { UpdateSchoolComponent } from './School/update-school/update-school.component';
import { SchoolListsComponent } from './School/school-lists/school-lists.component';


@NgModule({
  declarations: [
    ProjectAdminDashboardComponent,
    ProfileComponent,
    AddSchoolComponent,
    UpdateSchoolComponent,
    SchoolListsComponent
  ],
  imports: [
    CommonModule,
    ScrmAdminRoutingModule,
    ThemetagsimportModule,
    ReactiveFormsModule
  ]
})
export class ScrmAdminModule { }
