import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigDataService } from 'src/app/api/config';
import { ConfigDataServiceMock } from './service';
import { ConfigDataServiceImpl } from './service/config-data.service.impl';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: ConfigDataService,
      useClass: ConfigDataServiceImpl, 
      //useClass: ConfigDataServiceMock,
    }
  ]
})
export class ConfigDataModule { }
