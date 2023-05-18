import { combineLatest, Observable, ReplaySubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
    CityEntity,
    CityEntityAdd,
    CityEntityUpdate,
    CityFormParams,
    CityStoreService,
    CityUtilService,
} from 'src/app/api/city';

import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class CityFormService {
    private formGroup!: FormGroup;
    private params!: CityFormParams;
    private params$$: ReplaySubject<CityFormParams>;
    private city!: CityEntity | undefined;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private cityStoreService: CityStoreService,
        private cityUtilService: CityUtilService,

        private router: Router
    ) {
        this.params$$ = new ReplaySubject();
    }

    public cancel(): void {
        this.router.navigate(['../../list'], {
            relativeTo: this.activatedRoute,
        });
    }

    public init$(): Observable<CityFormParams> {
        return this.activatedRoute.params.pipe(
            switchMap((data) =>
                combineLatest([
                    this.cityStoreService.selectEntity$(data['cityId']),
                ])
            ),
            switchMap(([city]) => {
                this.city = city;
                this.formGroup = this.cityUtilService.createFormGroup(city);
                this.params = this.createCityParams(this.formGroup);

                this.params$$.next(this.params);

                return this.params$$;
            })
        );
    }

    public mainImageUpload(file: File): void {
        console.log(file);
    }

    public submit(): void {
        if (this.city) {
            this.updateCity();
        } else {
            this.addCity();
        }

        this.router.navigate(['../../list'], {
            relativeTo: this.activatedRoute,
        });
    }

    private addCity(): void {
        const city: CityEntityAdd = this.cityUtilService.createEntity(
            this.params.formGroup
        );

        this.cityStoreService.dispatchAddEntityAction(city);
    }

    private createCityParams(formGroup: FormGroup): CityFormParams {
        const cityFormParams: CityFormParams = {
            formGroup,
        };

        return cityFormParams;
    }

    private updateCity(): void {
        const city: CityEntityUpdate = this.cityUtilService.updateEntity(
            this.params.formGroup
        );

        this.cityStoreService.dispatchUpdateEntityAction(city);
    }
}
