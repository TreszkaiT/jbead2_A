import { AuthenticationStoreService } from 'src/app/api/authentication';
import {
    AuthenticationStoreServiceImpl
} from 'src/app/core/authentication/store/service/authentication-store.service.impl';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginFormComponent, LoginPageComponent } from './component';
import { LoginPageRoutingModule } from './login-page-routing.module';

@NgModule({
  declarations: [LoginFormComponent, LoginPageComponent],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: AuthenticationStoreService,
      useClass: AuthenticationStoreServiceImpl,
    }
  ]
})
export class LoginPageModule {}
