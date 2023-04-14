import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { CONFIG_FEATURE_KEY, ConfigStoreService } from 'src/app/api/config';
import { configReducer } from './state/config.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ConfigEffects } from './state/config.effects';
import { ConfigStoreServiceImpl } from './service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(CONFIG_FEATURE_KEY, configReducer),
    EffectsModule.forFeature([ConfigEffects]),
  ],
  providers: [
    {
      provide: ConfigStoreService,
      useClass: ConfigStoreServiceImpl,
    }
  ]
})
export class ConfigStoreModule { }
