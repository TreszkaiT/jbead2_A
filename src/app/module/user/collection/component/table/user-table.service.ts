import { first, merge, Observable, ReplaySubject, switchMap } from 'rxjs';
import {
    UserEntity,
    UserStoreService,
    UserTableParams,
} from 'src/app/api/user';

import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class UserTableService {
    private params!: UserTableParams;
    private params$$: ReplaySubject<UserTableParams>;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private userStoreService: UserStoreService,
        private router: Router
    ) {
        this.params$$ = new ReplaySubject();
    }

    public editUser(user: UserEntity): void {
        this.router.navigate(['../edit', user?.id], {
            relativeTo: this.activatedRoute,
        });
    }

    public init$(): Observable<UserTableParams> {
        return merge(
            this.userStoreService.selectEntityList$().pipe(first())
        ).pipe(
            switchMap((users) => {
                this.params = {
                    users,
                    empty: [],
                };

                this.params$$.next(this.params);

                return this.params$$;
            })
        );
    }
}
