import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigDataService } from 'src/app/api/config';
import { ConfigDataServiceMock } from './service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: ConfigDataService,
      useClass: ConfigDataServiceMock,
    }
  ]
})
export class ConfigDataModule { }
