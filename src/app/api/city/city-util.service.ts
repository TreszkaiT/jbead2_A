import { FormGroup } from '@angular/forms';

import { CityEntity, CityEntityAdd, CityEntityUpdate } from './city';

export abstract class CityUtilService {                                                 // Forms műveletek: create-Form, update-Form
    public abstract createEntity(formGroup: FormGroup): CityEntityAdd;
    public abstract createFormGroup(city: CityEntity | undefined): FormGroup;
    public abstract updateEntity(formGroup: FormGroup): CityEntityUpdate;
}