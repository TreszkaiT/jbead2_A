import { Observable } from 'rxjs';
import { CityEntity, CityEntityUpdate, CityModel, CityStoreService } from 'src/app/api/city';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable()
export class CityStoreServiceImpl extends CityStoreService {
  // #region Constructors (1)

  constructor(private store: Store<CityPartialState>) {
    super();
  }

  // #endregion Constructors (1)

  // #region Public Methods (10)

  public override dispatchAddEntityAction(city: CityModel): void {
    throw new Error('Method not implemented.');
  }

  public override dispatchChangeEntityButtonEnabled(enabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  public override dispatchGetEntityAction(cityId: number): void {
    throw new Error('Method not implemented.');
  }

  public override dispatchListEntitiesAction(): void {
    throw new Error('Method not implemented.');
  }

  public override dispatchSetEntityAction(city: CityEntity | null): void {
    throw new Error('Method not implemented.');
  }

  public override dispatchUpdateEntityAction(entity: CityEntityUpdate): void {
    throw new Error('Method not implemented.');
  }

  public override selectEntity$(cityId: number): Observable<CityEntity | undefined> {
    throw new Error('Method not implemented.');
  }

  public override selectEntityList$(): Observable<CityEntity[]> {
    throw new Error('Method not implemented.');
  }

  public override selectNewEntityButtonEnabled$(): Observable<boolean> {
    throw new Error('Method not implemented.');
  }

  public override selectSelectedEntity$(): Observable<CityEntity | null> {
    throw new Error('Method not implemented.');
  }

  // #endregion Public Methods (10)
}
