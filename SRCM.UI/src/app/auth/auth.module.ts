import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { MiscellaneousModule } from '../pages/miscellaneous/miscellaneous.module';
import { NbButtonModule, NbCardModule, NbInputModule, NbLayoutModule, NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbLayoutModule,
    MiscellaneousModule,
    ReactiveFormsModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule
  ]
})
export class AuthModule { }
