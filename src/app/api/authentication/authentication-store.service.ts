import { Observable } from 'rxjs';

import { UserEntity } from '../user';
import { LoginModel, RegistrationModel } from './authentication';

export abstract class AuthenticationStoreService {
  public abstract dispatchLogin(loginModel: LoginModel): void;
  public abstract dispatchRegistrationAction(
    registrationModel: RegistrationModel
  ): void;
  public abstract isLoggedIn$(): Observable<boolean>;
  public abstract selectAuthenticatedUser$(): Observable<UserEntity | null>;
}
