import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigDataModule } from './data/config-data.module';
import { ConfigStoreModule } from './store/config-store.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigDataModule,
    ConfigStoreModule
  ]
})
export class ConfigModule { }
