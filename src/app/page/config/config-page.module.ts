import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigPageRoutingModule } from './config-page-routing.module';
import { ConfigPageComponent } from './component/config/config-page.component';
import { SharedModule } from 'src/app/module/common';


@NgModule({
  declarations: [
    ConfigPageComponent
  ],
  imports: [
    CommonModule,
    ConfigPageRoutingModule,
    SharedModule
  ]
})
export class ConfigPageModule { }
