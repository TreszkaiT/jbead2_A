import { AuthenticationDataService } from 'src/app/api/authentication';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthenticationDataServiceImpl, AuthenticationDataServiceMock } from './service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: AuthenticationDataService,           // a registration-form.service.ts construct-orában használom ezt
      useClass: AuthenticationDataServiceImpl,
      // I use mock service because I don't have backend application.
      // Please use real service instead at your development environment.
      //  AuthenticationDataServiceMock -- mockot, vagy Implementációt használjon
    },
  ],
})
export class AuthenticationDataModule {}
