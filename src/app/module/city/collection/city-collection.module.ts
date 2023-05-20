import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../common';
import { CityTableComponent } from './component';

@NgModule({
    declarations: [CityTableComponent],
    exports: [CityTableComponent],
    imports: [CommonModule, SharedModule],
})
export class CityCollectionModule {}
