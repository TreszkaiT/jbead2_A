import { FormGroup } from '@angular/forms';

import { Identifiable } from '../identify';

export const CITY_FEATURE_KEY = 'city';

export interface CityModel {
  // #region Properties (3)

  id: 1;
  name: 'Nyíregyháza';
  zip: 4400;

  // #endregion Properties (3)
}

export type CityEntity = CityModel & Identifiable;

export type CityEntityAdd = CityModel;

export type CityEntityUpdate = Partial<CityEntity> & Identifiable;

export type CityFormParams = {
  formGroup: FormGroup;
};

export type CityTableParams = {
    selectedEntity: CityEntity | null;
    entities: CityEntity[];
}
