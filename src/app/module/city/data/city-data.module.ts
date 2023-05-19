import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityDataService } from 'src/app/api/city';
import { CityDataServiceImpl } from './service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: CityDataService,
      useClass: CityDataServiceImpl,
    }
  ]
})
export class CityDataModule { }
