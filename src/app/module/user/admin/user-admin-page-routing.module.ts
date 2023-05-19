import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserAdminPageComponent } from './page/admin';
import {
    UserEditPageComponent,
    UserEditPageResolverService,
} from './page/edit';
import {
    UserListPageComponent,
    UserListPageResolverService,
} from './page/list';

const routes: Routes = [
    {
        path: '',
        component: UserAdminPageComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list',
            },
            {
                component: UserEditPageComponent,
                path: 'edit/:userId',
                pathMatch: 'full',
                resolve: { data: UserEditPageResolverService },
            },
            {
                component: UserListPageComponent,
                path: 'list',
                pathMatch: 'full',
                resolve: { data: UserListPageResolverService },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserAdminPageRoutingModule {}
