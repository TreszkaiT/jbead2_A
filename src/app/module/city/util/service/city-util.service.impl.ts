import {
    CityEntity,
    CityEntityAdd,
    CityEntityUpdate,
    CityUtilService,
} from 'src/app/api/city';

import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class CityUtilServiceImpl extends CityUtilService {
    public _sort = (a: CityEntity, b: CityEntity): number =>
        a.name < b.name ? 1 : -1;

    public constructor(private formBuilder: FormBuilder) {
        super();
    }

    public createEntity(formGroup: FormGroup): CityEntityAdd {
        return {
            name: formGroup.value['name'],
            zip: formGroup.value['zip'],
        };
    }

    public createFormGroup(city: CityEntity | undefined): FormGroup {
        return this.formBuilder.group({
            zip: [city?.zip, Validators.required],
            name: [city?.name, Validators.required],
            id: [city?.id],
        });
    }

    public updateEntity(formGroup: FormGroup): CityEntityUpdate {
        return {
            name: formGroup.value['name'],
            zip: formGroup.value['zip'],
            id: formGroup.value['id'],
        };
    }
}
