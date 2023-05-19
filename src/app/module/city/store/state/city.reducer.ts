
import { CITY_FEATURE_KEY, CityEntity } from 'src/app/api/city';

import { Action, createReducer, on } from '@ngrx/store';

import * as cityActions from './city.actions';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';

export interface CityState extends EntityState<CityEntity> {
    isNewEntityButtonEnabled: boolean;
    selectedId?: string;
    loading: boolean;
    error?: string | null;
}

export interface CityPartialState {
    readonly [CITY_FEATURE_KEY]: CityState;
}

export const cityAdapter: EntityAdapter<CityEntity> =
    createEntityAdapter<CityEntity>({
        selectId: (model: CityEntity) => model.id,
});

export const initialState: CityState = cityAdapter.getInitialState({
    isNewEntityButtonEnabled: true,
    loading: false,
});



export const cityReducer = createReducer(
    initialState,
    on(cityActions.addCity, (state) => ({
        ...state,
        loading: false,
        error: null,
    })),
    on(cityActions.addCitySuccess, (state, { city }) =>
        cityAdapter.addOne(city, { ...state, loading: true })
    ),
    on(cityActions.addCityFail, (state, { error }) => ({ ...state, error })),
    on(cityActions.changeNewEntityButtonEnabled, (state, { enabled }) => ({
        ...state,
        isNewEntityButtonEnabled: enabled,
    })),
    on(cityActions.getCity, (state) => ({
        ...state,
        loading: false,
        error: null,
    })),
    on(cityActions.getCitySuccess, (state, { city }) => {
        if (city) {
            return cityAdapter.upsertOne(city, { ...state, loading: false });
        } else {
            return state;
        }
    }),
    on(cityActions.getCityFail, (state, { error }) => ({ ...state, error })),
    on(cityActions.listCitys, (state) => ({
        ...state,
        loading: false,
        error: null,
    })),
    on(cityActions.listCitysSuccess, (state, { citys }) =>
        cityAdapter.upsertMany(citys, { ...state, loading: true })
    ),
    on(cityActions.listCitysFail, (state, { error }) => ({ ...state, error })),
    on(cityActions.updateCitySuccess, (state, { city }) =>
        cityAdapter.updateOne(city, state)
    ),
    on(cityActions.updateCityFail, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: CityState | undefined, action: Action) {
    return cityReducer(state, action);
}
