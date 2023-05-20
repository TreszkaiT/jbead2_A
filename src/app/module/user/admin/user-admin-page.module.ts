import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../common';
import { UserCollectionModule } from '../collection/user-collection.module';
import { UserFormModule } from '../form/user-form.module';
import { UserModule } from '../user.module';
import { UserAdminPageComponent } from './page/admin';
import {
    UserEditPageComponent,
    UserEditPageResolverService,
} from './page/edit';
import {
    UserListPageComponent,
    UserListPageResolverService,
} from './page/list';
import { UserAdminPageRoutingModule } from './user-admin-page-routing.module';

@NgModule({
    declarations: [
        UserAdminPageComponent,
        UserEditPageComponent,
        UserListPageComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        UserAdminPageRoutingModule,
        UserFormModule,
        UserCollectionModule,
        UserModule,
    ],
    providers: [UserEditPageResolverService, UserListPageResolverService],
})
export class UserAdminPageModule {}
