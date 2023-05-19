import { Observable, of } from 'rxjs';
import {
  AuthenticationStoreService,
  LoginModel,
  RegistrationModel,
} from 'src/app/api/authentication';
import { UserEntity } from 'src/app/api/user';

import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as authenticationActions from '../state/authentication.action';
import { AuthenticationPartialState } from '../state/authentication.reducer';
import * as authenticationSelectors from '../state/authentication.selectors';

@Injectable()
export class AuthenticationStoreServiceMock extends AuthenticationStoreService {
  public constructor(private store: Store<AuthenticationPartialState>) {
    super();
  }

  public dispatchLogin(loginModel: LoginModel): void {
    this.store.dispatch(authenticationActions.login({ loginModel }));
  }

  public dispatchRegistrationAction(
    registrationModel: RegistrationModel
  ): void {
    this.store.dispatch(authenticationActions.register({ registrationModel }));
  }

  public selectAuthenticatedUser$(): Observable<UserEntity | null> {
    return this.store.pipe(
      select(authenticationSelectors.selectAuthenticatedUser)
    );
  }

  public isLoggedIn$(): Observable<boolean> {
    return this.store.pipe(
      select(authenticationSelectors.isAuthenticated)
    );
  }
}
