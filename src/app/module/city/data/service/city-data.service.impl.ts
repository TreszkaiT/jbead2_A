import { Observable, of } from 'rxjs';
import {
    CityDataService, CityEntity, CityEntityAdd, CityEntityUpdate, CityModel
} from 'src/app/api/city';
import { environment } from 'src/environments/environment';
import { v4 as uuidv4 } from 'uuid';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CityDataServiceImpl extends CityDataService {

  public uri = environment.uri;

  // let headers = new HttpHeaders();                                                      // let - el csak lentebbi metóduson belül deklarálhatok
  // headers = headers.set('Content-Type', 'application/json; charset=utf-8');             // headers hogy ne text/plain-be küldje a szerver felé, mert úgy nem fogadja el. Hanem json-ban

  private headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});   // fenti két sor egy sorban

  // private cityMap: Map<number, CityEntity> = new Map<number, CityEntity>();
  // #region Constructors (1)

  constructor(private httpClient: HttpClient) {
    super();

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
    return this.httpClient.post<CityEntity>(`${this.uri}/city`, city, {headers: this.headers});
  }

  public override get$(cityId: number): Observable<CityEntity | undefined> {
    return this.httpClient.get<CityEntity>(`${this.uri}/city/${cityId}`, {headers: this.headers});
  }

  public override list$(): Observable<CityEntity[]> {
    return this.httpClient.get<CityEntity[]>(`${this.uri}/city/all`, {headers: this.headers});
  }

  public override update$(entity: CityEntityUpdate): Observable<CityEntityUpdate> {
    return this.httpClient.put<CityEntityUpdate>(`${this.uri}/city`, entity, {headers: this.headers});
  }

  // create és delete hiányzik!!!!

  // #endregion Public Methods (4)
}
