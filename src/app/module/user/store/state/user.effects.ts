import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserDataService } from 'src/app/api/user';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as userActions from './user.actions';

@Injectable()
export class UserEffects {
    addUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(userActions.addUser),
            switchMap((action) =>
                this.userDataService.add$(action.user).pipe(
                    map((user) => {
                        return userActions.addUserSuccess({ user });
                    }),
                    catchError((error) => {
                        return of(userActions.addUserFail({ error }));
                    })
                )
            )
        )
    );
    getUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(userActions.getUser),
            switchMap((action) =>
                this.userDataService.get$(action.id).pipe(
                    map((user) => {
                        return userActions.getUserSuccess({
                            user: user || null,
                        });
                    }),
                    catchError((error) => {
                        return of(userActions.getUserFail({ error }));
                    })
                )
            )
        )
    );
    listUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(userActions.listUsers),
            switchMap((action) =>
                this.userDataService.list$().pipe(
                    map((users) => {
                        return userActions.listUsersSuccess({
                            users,
                        });
                    }),
                    catchError((error) => {
                        return of(userActions.listUsersFail({ error }));
                    })
                )
            )
        )
    );
    updateUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(userActions.updateUser),
            switchMap((action) =>
                this.userDataService.update$(action.user).pipe(
                    map((user) => {
                        return userActions.updateUserSuccess({
                            user: {
                                changes: { ...user },
                                id: (user && user.id) || '',
                            },
                        });
                    }),
                    catchError((error) => {
                        return of(userActions.updateUserFail({ error }));
                    })
                )
            )
        )
    );

    public constructor(
        private actions$: Actions,
        private userDataService: UserDataService
    ) {}
}
