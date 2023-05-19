import { UserUtilService } from 'src/app/api/user';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { UserUtilServiceImpl } from './service';

@NgModule({
    declarations: [],
    imports: [CommonModule, ReactiveFormsModule],
    providers: [
        {
            provide: UserUtilService,
            useClass: UserUtilServiceImpl,
        },
    ],
})
export class UserUtilModule {}
