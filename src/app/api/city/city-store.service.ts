import { Observable } from 'rxjs/internal/Observable';

import { CityEntity, CityEntityAdd, CityEntityUpdate } from './city';

export abstract class CityStoreService {                                                 // Store Frontend műveletek: dispach=elküld // Store: DB-ből és View-ből jövő adatokat tárolja és fogja egybe
    public abstract dispatchAddEntityAction(city: CityEntityAdd): void;
    public abstract dispatchChangeNewEntityButtonEnabled(
        enabled: boolean
    ): void;
    public abstract dispatchGetEntityAction(id: string): void;
    public abstract dispatchListEntitiesAction(): void;
    public abstract dispatchUpdateEntityAction(city: CityEntityUpdate): void;
    public abstract selectEntity$(
        id: string
    ): Observable<CityEntity | undefined>;
    public abstract selectEntityList$(): Observable<CityEntity[]>;
    public abstract selectNewEntityButtonEnabled$(): Observable<boolean>;
    // public abstract dispatchAddEntityAction(city: CityEntityAdd): void;
    // public abstract dispatchChangeEntityButtonEnabled(enabled: boolean): void;
    // public abstract dispatchGetEntityAction(cityId: number): void;
    // public abstract dispatchListEntitiesAction(): void;
    // public abstract dispatchSetEntityAction(city: CityEntity | null): void
    // public abstract dispatchUpdateEntityAction(entity: CityEntityUpdate): void;
    // //public abstract dispatchRemoveEntityAction(city: CityEntity
    // public abstract selectEntity$(cityId: number): Observable<CityEntity | undefined>;
    // public abstract selectEntityList$(): Observable<CityEntity[]>;
    // public abstract selectNewEntityButtonEnabled$(): Observable<boolean>;
    // public abstract selectSelectedEntity$(): Observable<CityEntity | null>;
}