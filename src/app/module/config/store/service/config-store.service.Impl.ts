import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigEntity, ConfigStoreService } from 'src/app/api/config';

import { select, Store } from '@ngrx/store';

import * as configActions from '../state/config.action';
import { ConfigPartialState } from '../state/config.reducer';
import * as configSelectors from '../state/config.selectors';

@Injectable()
export class ConfigStoreServiceImpl extends ConfigStoreService{

  public constructor(private store: Store<ConfigPartialState>) {
    super();
  }

  public override dispatchGetEntityAction(userId: number): void {
    this.store.dispatch(configActions.getEntity({ userId }));                   // dispatch-elünk egy getEntity Action-t
  }

  public override dispatchUpdateEntityAction(entity: ConfigEntity): void {
      this.store.dispatch(configActions.updateEntity({ entity }));                // dispatch-elünk egy updateEntity Action-t
  }

  public override selectEntity$(): Observable<ConfigEntity> {     
      return this.store.pipe(select(configSelectors.selectConfig));               // és Select-álunk egy Entity-t: app.component.ts használja, hogy Selctorral figyelje változik-e a Store Stateje
  }

}
