import { Observable, of } from 'rxjs';
import {
    CityDataService, CityEntity, CityEntityAdd, CityEntityUpdate, CityModel
} from 'src/app/api/city';
import { environment } from 'src/environments/environment';
import { v4 as uuidv4 } from 'uuid';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/api/services';

@Injectable()
export class CityDataServiceImpl extends CityDataService {

  //public uri = environment.uri;
  public url: string = '';

  // let headers = new HttpHeaders();                                                      // let - el csak lentebbi metóduson belül deklarálhatok
  // headers = headers.set('Content-Type', 'application/json; charset=utf-8');             // headers hogy ne text/plain-be küldje a szerver felé, mert úgy nem fogadja el. Hanem json-ban

  private headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});   // fenti két sor egy sorban

  // private cityMap: Map<number, CityEntity> = new Map<number, CityEntity>();
  // #region Constructors (1)

  constructor(private http: HttpClient, private config: ConfigService) {
    super();

    this.url = this.config.get('apiUrl') + '/city';

    // this.cityMap.set(1, {
    //   id: 1,
    //   name: 'Nyíregyháza',
    //   zip: 4400,
    // })
  }

  // #endregion Constructors (1)

  // #region Public Methods (4)

  public override add$(city: CityEntityAdd): Observable<CityEntity> {
    //const id = uuidv4();
    //return this.http.post<CityEntity>(`${this.uri}/city`, city, {headers: this.headers});
    return this.http.post<CityEntity>(`${this.url}`, city, {headers: this.headers});
  }

  public override get$(cityId: string): Observable<CityEntity | undefined> {
    //return this.http.get<CityEntity>(`${this.uri}/city/${cityId}`, {headers: this.headers});
    return this.http.post<CityEntity>(this.url + '/' + cityId, {headers: this.headers});
  }

  public override list$(): Observable<CityEntity[]> {
    //return this.http.get<CityEntity[]>(`${this.uri}/city/all`, {headers: this.headers});
    return this.http.get<CityEntity[]>(this.url + '/all', {headers: this.headers});
  }

  public override update$(city: CityEntityUpdate): Observable<CityEntityUpdate> {             // mivel van CityEntityUpdate típusom, így meghívhatom rá a PATCH-et, amivel lehet csak 1 property-t fogok updatelni
    //return this.http.put<CityEntityUpdate>(`${this.uri}/city`, entity, {headers: this.headers});
      return this.http.put<CityEntityUpdate>(`${this.url}/${city.id}`, city, {headers: this.headers} );   // így nem vagyok köteles minden property-t átadni... lehet csak a name: lesz benne, a zip: az nem
  }

  public override patch$(city: CityEntityUpdate): Observable<CityEntityUpdate> {             // mivel van CityEntityUpdate típusom, így meghívhatom rá a PATCH-et, amivel lehet csak 1 property-t fogok updatelni
    //return this.http.put<CityEntityUpdate>(`${this.uri}/city`, entity, {headers: this.headers});
      return this.http.patch<CityEntityUpdate>(`${this.url}/${city.id}`, city, {headers: this.headers} );   // így nem vagyok köteles minden property-t átadni... lehet csak a name: lesz benne, a zip: az nem
  }

  // create és delete hiányzik!!!!

  // #endregion Public Methods (4)
}
