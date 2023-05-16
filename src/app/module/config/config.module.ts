import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigDataModule } from './data/config-data.module';
import { ConfigStoreModule } from './store/config-store.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigDataModule,                                 //          Data műveletek behúzása
    ConfigStoreModule                                 // NgRx 2.: Store műveletek és  Store-ban lévő State elkészítése, és az Effectek deklarálása
  ]
})
export class ConfigModule { }
