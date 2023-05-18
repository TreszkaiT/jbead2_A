import { UserEntity } from 'src/app/api/user';

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as userActions from './user.actions';

export const USER_FEATURE_KEY = 'user';

export interface State extends EntityState<UserEntity> {            // State elkészül itt: ids: és entities: property-k azok eleve elkszünek az EntityState-ben. Itt benne, ezekkel nekem már nem kell foglalkozni!!!
    isNewEntityButtonEnabled: boolean;
    selectedId?: string;
    loading: boolean;
    error?: string | null;
}

export interface UserPartialState {                 // service.impl-ben adom meg hogy tt -->
    readonly [USER_FEATURE_KEY]: State;
}

export const userAdapter: EntityAdapter<UserEntity> =
    createEntityAdapter<UserEntity>({
        selectId: (model: UserEntity) => model.id,      // itt adhatom meg, hogy az érkező Entity-knek mi legyen az elsődleges kulcsa, amit használok a Stateben
    });

export const initialState: State = userAdapter.getInitialState({        // userAdapter segítségével készítúnk egy initialState-t. Ez megjelenik amúgy az authentication.reducer.ts-ben is
    isNewEntityButtonEnabled: true,                                 // Ekkor készül el maga a Reducer, és ezel az Obj.al: initialState fogja inicializálni az adott State állapotát
    loading: false,
});

const userReducer = createReducer(
    initialState,
    on(userActions.addUser, (state) => ({                       // Ezek a fgv.el / on() / a különböző Action-okra Hookolnak rá, azaz lefuttatnak egy logikát, amivel én be tudom updatelni a state-t
        ...state,
        loading: false,
        error: null,
    })),
    on(userActions.addUserSuccess, (state, { user }) =>
        userAdapter.addOne(user, { ...state, loading: true })       // az NgRx Entity abban segít pl. hogy a userAdapteren keresztül olyan metódusokat biztosít, amivel nagyon könnyen be tudom módosítani az Entity State-t    
    ),
    on(userActions.addUserFail, (state, { error }) => ({ ...state, error })),
    on(userActions.changeNewEntityButtonEnabled, (state, { enabled }) => ({
        ...state,
        isNewEntityButtonEnabled: enabled,
    })),
    on(userActions.getUser, (state) => ({
        ...state,
        loading: false,
        error: null,
    })),
    on(userActions.getUserSuccess, (state, { user }) => {
        if (user) {
            return userAdapter.upsertOne(user, { ...state, loading: false });
        } else {
            return state;
        }
    }),
    on(userActions.getUserFail, (state, { error }) => ({ ...state, error })),
    on(userActions.listUsers, (state) => ({
        ...state,
        loading: false,
        error: null,
    })),
    on(userActions.listUsersSuccess, (state, { users }) =>
        userAdapter.upsertMany(users, { ...state, loading: true })
    ),
    on(userActions.listUsersFail, (state, { error }) => ({ ...state, error })),
    on(userActions.updateUserSuccess, (state, { user }) =>
        userAdapter.updateOne(user, state)
    ),
    on(userActions.updateUserFail, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
    return userReducer(state, action);
}
