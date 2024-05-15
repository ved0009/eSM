import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAccordionModule, NbActionsModule, NbButtonModule, NbCalendarModule, NbCardModule, NbCheckboxModule, NbContextMenuModule, NbDatepickerModule, NbIconModule, NbInputModule, NbListModule, NbRadioModule, NbRouteTabsetModule, NbSelectModule, NbStepperModule, NbTabsetModule, NbUserModule } from '@nebular/theme';
import { FormsRoutingModule } from '../pages/forms/forms-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { LayoutRoutingModule } from '../pages/layout/layout-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    NbAccordionModule,
    NbInputModule,
    NbSelectModule,
    NbCalendarModule,
    NbSelectModule,
    NbContextMenuModule,
    ReactiveFormsModule
  ],
  exports:[
    CommonModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbListModule,
    LayoutRoutingModule,
    NbAccordionModule
   ]
})
export class ThemetagsimportModule { }
