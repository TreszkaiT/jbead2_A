import { catchError, map, Observable, of } from 'rxjs';
import { AuthenticationStoreService } from 'src/app/api/authentication';

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable()
export class AdminPageGuard implements CanActivate {
  constructor(private authenticationStoreService: AuthenticationStoreService, private router: Router) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authenticationStoreService.isLoggedIn$().pipe(    // a canActivate fgv. az authenticationStoreService-től lekéri hogy isLoggedIn-e, ami egy Observable logikai érték, be vagy-e loginolva
      map((e) => {
        if (e) {                                                // itt kiértékelődik ez az érték
          return true;                                          // ha igen, akkor true-val tér vissza
        } else {
            this.router.navigateByUrl('/login');                // ha nem, redirect-áljuk az alkalmazást, azaz átnavigál a login Page-ra
          return false;                                         // és false-al tér vissza
        }
      })
    );
  }
}
