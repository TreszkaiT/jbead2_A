import { USER_FEATURE_KEY, UserStoreService } from 'src/app/api/user';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { UserStoreServiceImpl } from './service';
import { UserEffects } from './state/user.effects';
import * as fromUser from './state/user.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(USER_FEATURE_KEY, fromUser.reducer),
        EffectsModule.forFeature([UserEffects]),
    ],
    providers: [
        {
            provide: UserStoreService,
            useClass: UserStoreServiceImpl,
        },
    ],
})
export class UserStoreModule {}
