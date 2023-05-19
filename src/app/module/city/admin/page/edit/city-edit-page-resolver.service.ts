import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { CityStoreService } from 'src/app/api/city';


@Injectable()
export class CityEditPageResolverService implements Resolve<void> {
	public constructor(private cityStoreService: CityStoreService) {}

	public resolve(): void | Observable<void> | Promise<void> {
		this.cityStoreService.dispatchChangeNewEntityButtonEnabled(false);
	}
}
