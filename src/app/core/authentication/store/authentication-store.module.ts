import { AuthenticationStoreService, AUTHENTICATION_FEATURE_KEY } from 'src/app/api/authentication';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AuthenticationStoreServiceImpl } from './service/authentication-store.service.impl';
import { AuthenticationEffects } from './state/authentication.effects';
import { authenticationReducer } from './state/authentication.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(AUTHENTICATION_FEATURE_KEY, authenticationReducer),
    EffectsModule.forFeature([AuthenticationEffects]),
  ],
  providers: [
    {
      provide: AuthenticationStoreService,
      useClass: AuthenticationStoreServiceImpl,      //  AuthenticationDataServiceMock -- mockot, vagy Implementációt használjon
    },
    
  ],
})
export class AuthenticationStoreModule {}
