import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../common';
import { CityCollectionModule } from '../collection/city-collection.module';
import { CityFormModule } from '../form/city-form.module';
import { CityModule } from '../city.module';
import { CityAdminPageComponent } from './page/admin';
import {
    CityEditPageComponent,
    CityEditPageResolverService,
} from './page/edit';
import {
    CityListPageComponent,
    CityListPageResolverService,
} from './page/list';
import { CityAdminPageRoutingModule } from './city-admin-page-routing.module';

@NgModule({
    declarations: [
        CityAdminPageComponent,
        CityEditPageComponent,
        CityListPageComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        CityAdminPageRoutingModule,
        CityFormModule,
        CityCollectionModule,
        CityModule,
    ],
    providers: [CityEditPageResolverService, CityListPageResolverService],
})
export class CityAdminPageModule {}
