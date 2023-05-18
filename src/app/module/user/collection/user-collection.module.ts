8;

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../common';
import { UserTableComponent } from './component';

@NgModule({
    declarations: [UserTableComponent],
    exports: [UserTableComponent],
    imports: [CommonModule, SharedModule],
})
export class UserCollectionModule {}
