import { map, Observable, of, tap } from 'rxjs';
import {
  AuthenticationDataService,
  LoginModel,
  RegistrationModel,
} from 'src/app/api/authentication';
import { UserEntity } from 'src/app/api/user';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationDataServiceImpl extends AuthenticationDataService {
  public constructor(private httpClient: HttpClient) {
    super();
  }

  public login$(loginModel: LoginModel): Observable<UserEntity | null> {
    // LoginModel : ebbe van benne a HTML regisztrációs formján beírt adatok; a login-form.service.ts createLoginModel metódusa által készítet loginModel-től kapja
    return this.httpClient
      .post<UserEntity>(`${environment.apiUrl}/user/login`, loginModel)
      .pipe(
        tap(
          (
            data // jön egy loginModel, és ezt adjuk át a post-nak, mint loginModel... majd a dataService meghívta a post api-t, és a response-ba itt kapjuk vissza a data-t
          ) =>
            // console.log(data),                                                                                    // megnézzük a console-on hogy mi van a data-bán itt
            (this.authenticatedUser = data) // kimentjük egy authenticatedUser obj-ba (AuthenticationDataService ide) a Usert, hogy a storeService.Impl le tudja checkolni, hogy van-e benne érvényes adat.
        )
      );
  }

  public register$(registrationModel: RegistrationModel): Observable<true> {
    return this.httpClient
      .post(`${environment.apiUrl}/user/register`, registrationModel)
      .pipe(map((data) => true));
  }
}
