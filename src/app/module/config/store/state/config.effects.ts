// Az Effects, az Actions-okat figyeli, hogy a Flow folyamán lát-e olyet, amit ő figyel a ofType() metódusában

import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ConfigDataService, ConfigEntity } from 'src/app/api/config';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as configActions from './config.action';

@Injectable()
export class ConfigEffects {
    
    public constructor(private actions$: Actions, private configDataService: ConfigDataService ) {}

    public getEntity = createEffect(() =>
        this.actions$.pipe(
            ofType(configActions.getEntity),                                                    // 1.: getEntity Effects: a config.actions.ts-ben lévő getEntity-t figyeli
            switchMap((action) => {
                return this.configDataService.get$(action.userId).pipe(                         //  meghívom a configDataService get$ metódusát
                    map((config) => {
                        return configActions.getEntitySuccess({
                            config: config as ConfigEntity,
                        });
                    })
                );
            }),
            catchError((error) => {
                return of(
                    configActions.getEntityFail({ error: error.message })
                );
            })
        )
    );
    public update = createEffect(() =>                                                        // register maradt a neve... update jobb lenne
        this.actions$.pipe(
            ofType(configActions.updateEntity),                                                 // 2.: updateEntity: a config.actions.ts-ban lévő updateEntity-t figyeli
            switchMap((action) => {                                                             // és ha jön egy updateEntity
                return this.configDataService                                                   // akkor arra meghívom majd a ConfigDataService
                    .update$(action.entity)                                                     // update$ metódusát. És kiolvasom az action-ból az entity-t (action.entity). A Service elvégzi a műveletet.
                    .pipe(
                        map((config) =>                                                         // a visszatérési értékkel meg (config)
                            configActions.updateEntitySuccess({ config })                       // dobok egy másik Action-t: updateEntitySuccess
                        )
                    );
            }),
            catchError((error) =>                                                               // ha pedig hiba lenne
                of(configActions.updateEntityFail({ error: error.message }))                    // akkor dobok egy updateEntityFail Action-t, egy error message-el: error: error.message
            )
        )
    );


}
