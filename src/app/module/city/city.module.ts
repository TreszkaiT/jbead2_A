import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CityDataModule } from './data';
import { CityStoreModule } from './store';
import { CityUtilModule } from './util';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CityDataModule,                                 //          Data műveletek behúzása
    CityStoreModule,                                // NgRx 2.: Store műveletek és  Store-ban lévő State elkészítése, és az Effectek deklarálása
    CityUtilModule
  ]
})
export class CityModule { }
