import { CITY_FEATURE_KEY, CityDataService } from 'src/app/api/city';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CityDataServiceImpl } from '../data/service';
import { CityEffects } from './state/city.effects';
import { cityReducer } from './state/city.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(CITY_FEATURE_KEY, cityReducer),
    EffectsModule.forFeature([CityEffects]),
  ],
  providers: [
    {
      provide: CityDataService,
      useClass: CityDataServiceImpl,
    }
  ]
})
export class CityStoreModule { }
