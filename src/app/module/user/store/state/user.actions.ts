import { UserEntity, UserEntityAdd, UserEntityUpdate } from 'src/app/api/user';

import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

export const addUser = createAction(
    '[User Admin] Add User',
    props<{ user: UserEntityAdd }>()
);

export const addUserFail = createAction(
    '[User Admin] Add User Fail',
    props<{ error: string }>()
);

export const addUserSuccess = createAction(
    '[User Admin] Add User Success',
    props<{ user: UserEntity }>()
);

export const getUser = createAction('[User] Get User', props<{ id: string }>());

export const getUserSuccess = createAction(
    '[User] Get User Success',
    props<{ user: UserEntity | null }>()
);

export const getUserFail = createAction(
    '[User] Get User Fail',
    props<{ error: string }>()
);

export const changeNewEntityButtonEnabled = createAction(
	'[User Admin] Change new Entity Button Enabled',
	props<{ enabled: boolean }>()
); 

export const listUsers = createAction('[User Admin] List Users');

export const listUsersSuccess = createAction(
    '[User Admin] List Users Success',
    props<{ users: UserEntity[] }>()
);

export const listUsersFail = createAction(
    '[User Admin] List Users Fail',
    props<{ error: string }>()
);

export const updateUser = createAction(
    '[User Admin] Update User',
    props<{ user: UserEntityUpdate }>()
);

export const updateUserFail = createAction(
    '[User Admin] Update User Fail',
    props<{ error: string }>()
);

export const updateUserSuccess = createAction(
    '[User Admin] Update User Success',
    props<{ user: Update<UserEntityUpdate> }>()
);
