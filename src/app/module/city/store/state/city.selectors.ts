
import { CITY_FEATURE_KEY, CityEntity } from 'src/app/api/city';

import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { cityAdapter, CityState } from './city.reducer';

export const getCityState = createFeatureSelector<CityState>(CITY_FEATURE_KEY);

const { selectAll, selectEntities } = cityAdapter.getSelectors();

export const getCityLoading = createSelector(
    getCityState,
    (state: CityState) => state.loading
);

export const getCityError = createSelector(
    getCityState,
    (state: CityState) => state.error
);

export const getAllCity = createSelector(getCityState, (state: CityState) =>
    selectAll(state)
);

export const getCityEntities = createSelector(getCityState, (state: CityState) =>
    selectEntities(state)
);

export const getSelectedId = createSelector(
    getCityState,
    (state: CityState) => state.selectedId || ''
);

export const isNewEntityButtonEnabled = createSelector(
	getCityState,
	(state: CityState) => state.isNewEntityButtonEnabled
);

export const selectCity = createSelector(
    getCityEntities,
    getSelectedId,
    (entities, selectedId) => entities[selectedId]
);

export const selectCityById = (id: string) =>
    createSelector(getCityEntities, (cityEntities: Dictionary<CityEntity>) => {
        return cityEntities[id];
});


// export const selectCityState =
//     createFeatureSelector<CityState>(CITY_FEATURE_KEY);

// export const selectCity = createSelector(
//     selectCityState,
//     (state: CityState) => state.city
// );

// export const selectError = createSelector(
//     selectCityState,
//     (state: CityState) => state.error
// );
