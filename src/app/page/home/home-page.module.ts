import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeComponent } from './component';
import { SharedModule } from 'src/app/module/common';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedModule,
  ]
})
export class HomePageModule { }
