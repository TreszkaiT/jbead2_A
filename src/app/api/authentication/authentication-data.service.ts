import { Observable } from 'rxjs';
import { LoginModel, RegistrationModel } from 'src/app/api/authentication';
import { UserEntity } from 'src/app/api/user';

export abstract class AuthenticationDataService {
  public authenticatedUser!: UserEntity | null;

  public abstract login$(loginModel: LoginModel): Observable<UserEntity | null>;
  public abstract register$(
    registrationModel: RegistrationModel
  ): Observable<true>;
}
