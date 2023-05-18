import { Observable } from 'rxjs';
import { CityEntity, CityEntityAdd, CityEntityUpdate, CityModel, CityStoreService } from 'src/app/api/city';

import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as cityActions from '../state/city.actions';
import * as fromCity from '../state/city.reducer';
import * as CitySelectors from '../state/city.selectors';

@Injectable()
export class CityStoreServiceImpl extends CityStoreService {
  // #region Constructors (1)


  public constructor(private store: Store<fromCity.CityPartialState>) {
    super();
  }

  public dispatchAddEntityAction(city: CityEntityAdd): void {
      this.store.dispatch(cityActions.addCity({ city }));
  }

  public dispatchChangeNewEntityButtonEnabled(enabled: boolean): void {
  this.store.dispatch(
    cityActions.changeNewEntityButtonEnabled({ enabled })
  );
  } 

  public override dispatchGetEntityAction(id: string): void {
      this.store.dispatch(cityActions.getCity({ id }));
  }

  public dispatchListEntitiesAction(): void {
      this.store.dispatch(cityActions.listCitys());
  }

  public dispatchUpdateEntityAction(city: CityEntityUpdate): void {
      this.store.dispatch(cityActions.updateCity({ city }));
  }

  public isLoading$(): Observable<boolean> {
      return this.store.pipe(select(CitySelectors.getCityLoading));
  }

  public override selectEntity$(
      id: string
  ): Observable<CityEntity | undefined> {
      return this.store.pipe(select(CitySelectors.selectCityById(id)));
  }

  public selectEntityList$(): Observable<CityEntity[]> {
      return this.store.pipe(select(CitySelectors.getAllCity));
  }

  public selectNewEntityButtonEnabled$(): Observable<boolean> {
    return this.store.pipe(
      select(CitySelectors.isNewEntityButtonEnabled)
    );
  } 


  // constructor(private store: Store<CityPartialState>) {
  //   super();
  // }


  // public override dispatchAddEntityAction(city: CityModel): void {
  //   throw new Error('Method not implemented.');
  // }

  // public override dispatchChangeEntityButtonEnabled(enabled: boolean): void {
  //   throw new Error('Method not implemented.');
  // }

  // public override dispatchGetEntityAction(cityId: number): void {
  //   throw new Error('Method not implemented.');
  // }

  // public override dispatchListEntitiesAction(): void {
  //   throw new Error('Method not implemented.');
  // }

  // public override dispatchSetEntityAction(city: CityEntity | null): void {
  //   throw new Error('Method not implemented.');
  // }

  // public override dispatchUpdateEntityAction(entity: CityEntityUpdate): void {
  //   throw new Error('Method not implemented.');
  // }

  // public override selectEntity$(cityId: number): Observable<CityEntity | undefined> {
  //   throw new Error('Method not implemented.');
  // }

  // public override selectEntityList$(): Observable<CityEntity[]> {
  //   throw new Error('Method not implemented.');
  // }

  // public override selectNewEntityButtonEnabled$(): Observable<boolean> {
  //   throw new Error('Method not implemented.');
  // }

  // public override selectSelectedEntity$(): Observable<CityEntity | null> {
  //   throw new Error('Method not implemented.');
  // }

  // #endregion Public Methods (10)
}
