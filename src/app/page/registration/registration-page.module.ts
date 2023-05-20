import { AuthenticationStoreService } from 'src/app/api/authentication';
import { AuthenticationStoreServiceImpl } from 'src/app/core/authentication/store/service';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegistrationFormComponent, RegistrationPageComponent } from './component';
import { RegistrationPageRoutingModule } from './registration-page-routing.module';

@NgModule({
  declarations: [RegistrationFormComponent, RegistrationPageComponent],
  imports: [
    CommonModule,
    RegistrationPageRoutingModule,                      // RegistrationPageRoutingModule is kell
    FormsModule,
    ReactiveFormsModule,
  ],
  // providers: [
  //   {
  //     provide: AuthenticationStoreService,
  //     useClass: AuthenticationStoreServiceImpl,
  //   }
  // ]
})
export class RegistrationPageModule {}
