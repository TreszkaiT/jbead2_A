import { CONFIG_FEATURE_KEY } from 'src/app/api/config';

import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ConfigState } from './config.reducer';

export const selectConfigState =
    createFeatureSelector<ConfigState>(CONFIG_FEATURE_KEY);

export const selectConfig = createSelector(
    selectConfigState,
    (state: ConfigState) => state.config
);

export const selectError = createSelector(
    selectConfigState,
    (state: ConfigState) => state.error
);
