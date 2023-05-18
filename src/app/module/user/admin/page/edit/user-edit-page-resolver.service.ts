import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { UserStoreService } from 'src/app/api/user';


@Injectable()
export class UserEditPageResolverService implements Resolve<void> {
	public constructor(private userStoreService: UserStoreService) {}

	public resolve(): void | Observable<void> | Promise<void> {
		this.userStoreService.dispatchChangeNewEntityButtonEnabled(false);
	}
}
