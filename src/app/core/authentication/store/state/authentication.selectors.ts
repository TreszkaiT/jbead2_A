import { AUTHENTICATION_FEATURE_KEY } from 'src/app/api/authentication';

import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  AuthenticationState,
} from './authentication.reducer';

export const selectAuthenticationState = createFeatureSelector<
  AuthenticationState
>(AUTHENTICATION_FEATURE_KEY);

export const selectAuthenticatedUser = createSelector(
  selectAuthenticationState,
  (state: AuthenticationState) => state.authenticatedUser
);

export const isAuthenticated = createSelector(
  selectAuthenticationState,
  (state: AuthenticationState) => !!state.authenticatedUser
);

export const selectAuthenticationError = createSelector(
	selectAuthenticationState,
	(state: AuthenticationState) => !!state.error
  );
