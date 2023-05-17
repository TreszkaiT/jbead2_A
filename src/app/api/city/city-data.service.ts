import { Observable } from 'rxjs';

import { CityEntity, CityEntityAdd, CityEntityUpdate } from './city';

export abstract class CityDataService {                                                 // API Backend műveletek: GET,POST,PUT,DELETE,PATCH...
    public abstract add$(city: CityEntityAdd): Observable<CityEntity>;
    public abstract get$(cityId: number): Observable<CityEntity | undefined>;
    public abstract list$(): Observable<CityEntity[]>;
    public abstract update$(entity: CityEntityUpdate): Observable<CityEntityUpdate>;
    //public abstract delete$(cityId: number): Observable<
}