
import { CITY_FEATURE_KEY, CityEntity } from 'src/app/api/city';

import { createReducer, on } from '@ngrx/store';

import * as actions from './city.action';

export interface CityState {
    city: CityEntity;
    error: string | null;
}

export const initialState: CityState = {
    city: {
        id: 1,
        name: 'Nyíregyháza',
        zip: 4400,
    },
    error: null,
};

export interface CityPartialState {
    readonly [CITY_FEATURE_KEY]: CityState;
}

export const cityReducer = createReducer(
    initialState,
    on(actions.getEntitySuccess, (state, { city }) => {
        return {
            ...state,
            city,
        };
    }),
    on(actions.getEntityFail, (state, { error }) => {
        return {
            ...state,
            error,
        };
    }),
    on(actions.updateEntitySuccess, (state, { city }) => {
        return {
            ...state,
            city,
            error: null,
        };
    }),
    on(actions.updateEntityFail, (state, { error }) => {
        return {
            ...state,
            error,
        };
    })
);
