import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';


import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as cityActions from './city.action';
import { CityDataService, CityEntity } from 'src/app/api/city';

@Injectable()
export class CityEffects {
    public getEntity = createEffect(() =>
        this.actions$.pipe(
            ofType(cityActions.getEntity),
            switchMap((action) => {
                return this.cityDataService.get$(action.cityId).pipe(
                    map((city) => {
                        return cityActions.getEntitySuccess({
                            city: city as CityEntity,
                        });
                    })
                );
            }),
            catchError((error) => {
                return of(
                    cityActions.getEntityFail({ error: error.message })
                );
            })
        )
    );
    public updateEntity = createEffect(() =>                                    // register --> updateEntity
        this.actions$.pipe(
            ofType(cityActions.updateEntity),
            switchMap((action) => {
                return this.cityDataService
                    .update$(action.entity)
                    .pipe(
                        map((city) =>
                        cityActions.updateEntitySuccess({ city })
                        )
                    );
            }),
            catchError((error) =>
                of(cityActions.updateEntityFail({ error: error.message }))
            )
        )
    );

    public constructor(
        private actions$: Actions,
        private cityDataService: CityDataService
    ) {}
}
