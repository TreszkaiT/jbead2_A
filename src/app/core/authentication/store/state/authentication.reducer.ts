import { AUTHENTICATION_FEATURE_KEY } from 'src/app/api/authentication';
import { UserEntity } from 'src/app/api/user';

import { createReducer, on } from '@ngrx/store';

import * as actions from './authentication.action';

export interface AuthenticationState {
  authenticatedUser: UserEntity | null;
  error: string | null;
}

export const initialState: AuthenticationState = {
  authenticatedUser: null,
  error: null,
};

export interface AuthenticationPartialState {
  readonly [AUTHENTICATION_FEATURE_KEY]: AuthenticationState;
}

export const authenticationReducer = createReducer(
  initialState,
  on(actions.registerSuccess, (state) => state),
  on(actions.registerFail, (state, { error }) => {
    return {
      ...state,
      error,
    };
  }),
  on(actions.loginSuccess, (state, { user }) => {
    return {
      ...state,
      authenticatedUser: user,
    };
  }),
  on(actions.loginFail, (state, { error }) => {
    return {
      ...state,
      error,
    };
  })
);
