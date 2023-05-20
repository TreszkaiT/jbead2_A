import { USER_FEATURE_KEY, UserEntity } from 'src/app/api/user';

import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State, userAdapter } from './user.reducer';

export const getUserState = createFeatureSelector<State>(USER_FEATURE_KEY);

const { selectAll, selectEntities } = userAdapter.getSelectors();           // Reducer-ben lévő userAdapter segítségével tudok gyorsan selectálni UserEntity-ket itt letebb

export const getUserLoading = createSelector(
    getUserState,
    (state: State) => state.loading
);

export const getUserError = createSelector(
    getUserState,
    (state: State) => state.error
);

export const getAllUser = createSelector(getUserState, (state: State) =>
    selectAll(state)
);

export const getUserEntities = createSelector(getUserState, (state: State) =>
    selectEntities(state)
);

export const getSelectedId = createSelector(
    getUserState,
    (state: State) => state.selectedId || ''
);

export const isNewEntityButtonEnabled = createSelector(
	getUserState,
	(state: State) => state.isNewEntityButtonEnabled
);

export const selectUser = createSelector(
    getUserEntities,
    getSelectedId,
    (entities, selectedId) => entities[selectedId]
);

export const selectUserById = (id: string) =>
    createSelector(getUserEntities, (userEntities: Dictionary<UserEntity>) => {     
        return userEntities[id];                                                    // a Dictionary-val lehet elérni, hogy itt id alapján adjon vissza egy UserEntity-t (Map-pinget így tudom egy kéréssel gyorsan átnézni)
    });
