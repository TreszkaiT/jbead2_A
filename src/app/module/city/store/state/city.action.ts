import { CityEntity, CityEntityUpdate } from 'src/app/api/city';

import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

export const getEntity = createAction(
    '[Config Component] Get Entity',
    props<{ cityId: number }>()
);
export const getEntitySuccess = createAction(
    '[Config Component] Get Entity Success',
    props<{ city: CityEntity }>()
);
export const getEntityFail = createAction(
    '[Config Component] Get Entity Fail',
    props<{ error: string }>()
);

export const updateEntity = createAction(
    '[Config Component] Update Entity',
    props<{ entity: CityEntity }>()
);
export const updateEntitySuccess = createAction(
    '[Config Component] Update Entity Success',
    props<{ city: CityEntityUpdate }>()
);
export const updateEntityFail = createAction(
    '[Config Component] Update Entity Fail',
    props<{ error: string }>()
);
