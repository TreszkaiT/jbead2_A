import { ImageModule } from 'primeng/image';
import { MenubarModule } from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [
    FormsModule,
    TabViewModule,
    MenubarModule,
    CommonModule,
    ImageModule,
  ],
  imports: [
    FormsModule,
    TabViewModule,
    MenubarModule,
    CommonModule,
    ImageModule,
  ]
})
export class SharedModule { }
