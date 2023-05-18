import { CONFIG_FEATURE_KEY, ConfigEntity } from 'src/app/api/config';


import { createReducer, on } from '@ngrx/store';

import * as actions from './config.action';

export interface ConfigState {
  config: ConfigEntity;
  error: string | null;
}

export const initialState: ConfigState = {
  config: {
    id: '1',
    theme: 'kb-light-theme',
  },
  error: null,
};

export interface ConfigPartialState {
  readonly [CONFIG_FEATURE_KEY]: ConfigState;
}

export const configReducer = createReducer(
    initialState,
    on(actions.getEntitySuccess, (state, { config }) => {
        return {
            ...state,
            config,
        };
    }),
    on(actions.getEntityFail, (state, { error }) => {
        return {
            ...state,
            error,
        };
    }),
    on(actions.updateEntitySuccess, (state, { config }) => {
        return {
            ...state,
            config,
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