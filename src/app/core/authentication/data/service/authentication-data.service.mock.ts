import { Observable, of } from 'rxjs';
import {
  AuthenticationDataService,
  LoginModel,
  RegistrationModel,
} from 'src/app/api/authentication';
import { UserEntity } from 'src/app/api/user';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationDataServiceMock extends AuthenticationDataService {
  private user!: UserEntity | null;

  public constructor(private httpClient: HttpClient) {
    super();
  }

  public login$(loginModel: LoginModel): Observable<UserEntity | null> {
    const loggedIn = this.user ? this.user.email === loginModel.email : false;

    return of(
      loggedIn
        ? ({
            id: loginModel.id?.toString() || '1',
            email: loginModel.email,
          } as UserEntity)
        : null
    );
  }

  public register$(registrationModel: RegistrationModel): Observable<true> {
    this.user = {
      ...registrationModel,
      id: '1234',
    };

    return of(true);
  }
}
