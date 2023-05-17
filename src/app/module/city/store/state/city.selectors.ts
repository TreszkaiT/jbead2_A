
import { CITY_FEATURE_KEY } from 'src/app/api/city';

import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CityState } from './city.reducer';

export const selectCityState =
    createFeatureSelector<CityState>(CITY_FEATURE_KEY);

export const selectConfig = createSelector(
    selectCityState,
    (state: CityState) => state.city
);

export const selectError = createSelector(
    selectCityState,
    (state: CityState) => state.error
);
