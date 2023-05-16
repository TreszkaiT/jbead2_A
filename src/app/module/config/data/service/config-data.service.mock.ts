import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { ConfigDataService, ConfigEntity } from 'src/app/api/config';

@Injectable()
export class ConfigDataServiceMock extends ConfigDataService {

  private config: ConfigEntity = {
    id: 1,
    theme: 'kb-dark-theme',
  }

  public override get$(userId: number): Observable<ConfigEntity | null> {
    return of(this.config);
  }
  public override update$(config: ConfigEntity): Observable<ConfigEntity> {
    return of(config);
  }
}
