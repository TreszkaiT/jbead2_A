import { createAction, props } from "@ngrx/store";

import { ConfigEntity } from 'src/app/api/config';

export const getEntity = createAction(
    '[Config Component] Get Entity',
    props<{ userId: string}>()
);
export const getEntitySuccess = createAction(
    '[Config Component] Get Entity Success',
    props<{ config: ConfigEntity }>()
);
export const getEntityFail = createAction(
    '[Config Component] Get Entity Fail',
    props<{ error: string }>()
);

export const updateEntity = createAction(
    '[Config Component] Update Entity',
    props<{ entity: ConfigEntity }>()
);
export const updateEntitySuccess = createAction(
    '[Config Component] Update Entity Success',
    props<{ config: ConfigEntity }>()
);
export const updateEntityFail = createAction(
    '[Config Component] Update Entity Fail',
    props<{ error: string }>()
);