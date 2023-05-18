import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CityDataService } from 'src/app/api/city';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as cityActions from './city.actions';

@Injectable()
export class CityEffects {
    addCity$ = createEffect(() =>
        this.actions$.pipe(
            ofType(cityActions.addCity),
            switchMap((action) =>
                this.cityDataService.add$(action.city).pipe(
                    map((city) => {
                        return cityActions.addCitySuccess({ city });
                    }),
                    catchError((error) => {
                        return of(cityActions.addCityFail({ error }));
                    })
                )
            )
        )
    );
    getCity$ = createEffect(() =>
        this.actions$.pipe(
            ofType(cityActions.getCity),
            switchMap((action) =>
                this.cityDataService.get$(action.id).pipe(
                    map((city) => {
                        return cityActions.getCitySuccess({
                            city: city || null,
                        });
                    }),
                    catchError((error) => {
                        return of(cityActions.getCityFail({ error }));
                    })
                )
            )
        )
    );
    listCitys$ = createEffect(() =>
        this.actions$.pipe(
            ofType(cityActions.listCitys),
            switchMap((action) =>
                this.cityDataService.list$().pipe(
                    map((citys) => {
                        return cityActions.listCitysSuccess({
                            citys,
                        });
                    }),
                    catchError((error) => {
                        return of(cityActions.listCitysFail({ error }));
                    })
                )
            )
        )
    );
    updateCity$ = createEffect(() =>
        this.actions$.pipe(
            ofType(cityActions.updateCity),
            switchMap((action) =>
                this.cityDataService.update$(action.city).pipe(
                    map((city) => {
                        return cityActions.updateCitySuccess({
                            city: {
                                changes: { ...city },
                                id: (city && city.id) || '',
                            },
                        });
                    }),
                    catchError((error) => {
                        return of(cityActions.updateCityFail({ error }));
                    })
                )
            )
        )
    );

    public constructor(
        private actions$: Actions,
        private cityDataService: CityDataService
    ) {}
}
