import { Observable, of } from 'rxjs';                                                                // of() Creation operátor Observable-t készít;; emittál érétket
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
export class AuthenticationStoreServiceImpl extends AuthenticationStoreService {
  public constructor(private store: Store<AuthenticationPartialState>) {            // Dependency Injecion
    super();                                                                        // explicit konstruktor hozzáadásakor ehhez meg kell hívni a super ősosztályt
  }

  public dispatchLogin(loginModel: LoginModel): void {
    this.store.dispatch(authenticationActions.login({ loginModel }));
  }

  public dispatchRegistrationAction(
    registrationModel: RegistrationModel
  ): void {
    this.store.dispatch(authenticationActions.register({ registrationModel }));
  }

  public isLoggedIn$(): Observable<boolean> {
    return this.store.pipe(select(authenticationSelectors.isAuthenticated));
  }

  public selectAuthenticatedUser$(): Observable<UserEntity | null> {
    return this.store.pipe(
      select(authenticationSelectors.selectAuthenticatedUser)
    );
  }
}
