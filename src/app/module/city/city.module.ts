import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CityDataModule } from './data/city-data.module';

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
