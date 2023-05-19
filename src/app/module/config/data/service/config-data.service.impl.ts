import { Injectable } from '@angular/core';

import { Observable, map, of } from 'rxjs';
import { ConfigDataService, ConfigEntity } from 'src/app/api/config';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigDataServiceImpl extends ConfigDataService {

  // private config: ConfigEntity = {
  //   id: 1,
  //   theme: 'kb-dark-theme',
  // }

  public apiUrl = environment.apiUrl;

  public constructor(private httpClient: HttpClient){
    super();
  }

  public override get$(userId: string): Observable<ConfigEntity | null> {
    //return of(this.config);
    //console.log(this.httpClient.get<ConfigEntity>(`${this.apiUrl}/config/${userId}`));//.pipe(map( () => console.log(this.config))));
    return this.httpClient.get<ConfigEntity>(`${this.apiUrl}/config/${userId}`);
  }
  public override update$(config: ConfigEntity): Observable<ConfigEntity> {
    //return of(config);
    return this.httpClient.patch<ConfigEntity>(`${this.apiUrl}/config`, config);
  }
}
