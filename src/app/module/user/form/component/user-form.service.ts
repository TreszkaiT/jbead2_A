import { combineLatest, Observable, ReplaySubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
    UserEntity,
    UserEntityAdd,
    UserEntityUpdate,
    UserFormParams,
    UserStoreService,
    UserUtilService,
} from 'src/app/api/user';

import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CityEntity, CityStoreService } from 'src/app/api/city';

@Injectable()
export class UserFormService {
    private formGroup!: FormGroup;
    private params!: UserFormParams;
    private params$$: ReplaySubject<UserFormParams>;
    private user!: UserEntity | undefined;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private cityStoreService: CityStoreService,
        private userStoreService: UserStoreService,
        private userUtilService: UserUtilService,

        private router: Router
    ) {
        this.params$$ = new ReplaySubject();
    }

    public cancel(): void {
        this.router.navigate(['../../list'], {
            relativeTo: this.activatedRoute,
        });
    }

    public init$(): Observable<UserFormParams> {  // a logika, mely a City-t dropdown menüben betölti a User-hez
        return this.activatedRoute.params.pipe(
            switchMap((data) =>
                combineLatest([
                    this.userStoreService.selectEntity$(data['userId']),
                    this.cityStoreService.selectEntityList$()
                ])
            ),
            switchMap(([user, cities]) => {
                this.user = user;
                this.formGroup = this.userUtilService.createFormGroup(user);
                this.params = this.createUserParams(this.formGroup, cities);

                this.params$$.next(this.params);

                return this.params$$;
            })
        );
    }

    public mainImageUpload(file: File): void {
        console.log(file);
    }

    public submit(): void {                     // ha a Submit-ra kattintok, akkor
        if (this.user) {                        // ha van már ilyen User, akkor
            this.updateUser();                  // updatelem
        } else {
            this.addUser();                     // amúgy meg létrehozom
        }

        this.router.navigate(['../../list'], {
            relativeTo: this.activatedRoute,
        });
    }

    private addUser(): void {       // a userUtilService-el készít nekünk egy új Usert
        const user: UserEntityAdd = this.userUtilService.createEntity(       // itt a util/service/ -ben van
            this.params.formGroup
        );

        this.userStoreService.dispatchAddEntityAction(user);
    }

    private createUserParams(formGroup: FormGroup, cities: CityEntity[]): UserFormParams {
        const userFormParams: UserFormParams = {
            cities,
            formGroup,
        };

        return userFormParams;
    }

    private updateUser(): void {       // a userUtilService-el készít nekünk egy létező Usert, amit majd be tudunk updatelni
        const user: UserEntityUpdate = this.userUtilService.updateEntity(       // itt a util/service/ -ben van
            this.params.formGroup
        );

        this.userStoreService.dispatchUpdateEntityAction(user);
    }
}
