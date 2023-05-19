import { CityUtilService } from 'src/app/api/city';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CityUtilServiceImpl } from './service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: CityUtilService,
      useClass: CityUtilServiceImpl,
    }
  ]
})
export class CityUtilModule { }
