import { LoginModel, RegistrationModel } from 'src/app/api/authentication';
import { UserEntity } from 'src/app/api/user';

import { createAction, props } from '@ngrx/store';

export const register = createAction(
  '[Registration Component] Register',
  props<{ registrationModel: RegistrationModel }>()
);
export const registerSuccess = createAction(
  '[Registration Component] Register Success'
);
export const registerFail = createAction(
  '[Registration Component] Register Fail',
  props<{ error: string }>()
);

export const login = createAction(
  '[Login Component] Login',
  props<{ loginModel: LoginModel }>()
);
export const loginSuccess = createAction(
  '[Login Component] Login Success',
  props<{ user: UserEntity }>()
);
export const loginFail = createAction(
  '[Login Component] Login Fail',
  props<{ error: string }>()
);

export const logout = createAction('[Application Component] Logout');
