import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CityAdminPageComponent } from './page/admin';
import {
    CityEditPageComponent,
    CityEditPageResolverService,
} from './page/edit';
import {
    CityListPageComponent,
    CityListPageResolverService,
} from './page/list';

const routes: Routes = [
    {
        path: '',
        component: CityAdminPageComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list',
            },
            {
                component: CityEditPageComponent,
                path: 'edit/:cityId',
                pathMatch: 'full',
                resolve: { data: CityEditPageResolverService },
            },
            {
                component: CityListPageComponent,
                path: 'list',
                pathMatch: 'full',
                resolve: { data: CityListPageResolverService },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CityAdminPageRoutingModule {}
