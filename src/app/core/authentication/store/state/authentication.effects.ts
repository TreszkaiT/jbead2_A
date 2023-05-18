import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthenticationDataService } from 'src/app/api/authentication';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as authenticationActions from './authentication.action';

@Injectable()
export class AuthenticationEffects {
  public login = createEffect(() =>
    this.actions$.pipe(
      ofType(authenticationActions.login),
      switchMap((action) => {
        return this.authenticationDataService.login$(action.loginModel).pipe(
          map((user) => {
            if (!user) {
              throw new Error('This user is registrated yet.');
            }

            return authenticationActions.loginSuccess({ user });
          })
        );
      }),
      catchError((error) => {
        return of(authenticationActions.loginFail({ error }));
      })
    )
  );
  public register = createEffect(() =>
    this.actions$.pipe(
      ofType(authenticationActions.register),
      switchMap((action) => {
        return this.authenticationDataService
          .register$(action.registrationModel)
          .pipe(map((model) => authenticationActions.registerSuccess()));
      }),
      catchError((err) =>
        of(authenticationActions.registerFail({ error: err.message }))
      )
    )
  );

  public constructor(
    private actions$: Actions,
    private authenticationDataService: AuthenticationDataService
  ) {}
}
