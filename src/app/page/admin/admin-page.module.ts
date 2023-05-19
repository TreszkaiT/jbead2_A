
import { AuthenticationStoreService } from 'src/app/api/authentication';
import { AuthenticationStoreServiceImpl } from 'src/app/core/authentication/store/service';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminPageRoutingModule } from './admin-page-routing.module';
import { LeftSidebarComponent } from './component/left-sidebar/left-sidebar.component';
import { AdminPageComponent } from './component/page/admin-page.component';

@NgModule({
  declarations: [AdminPageComponent, LeftSidebarComponent],
  imports: [
    CommonModule,
    AdminPageRoutingModule,
  ],
  providers: [
    {
      provide: AuthenticationStoreService,
      useClass: AuthenticationStoreServiceImpl,
    }
  ]
})
export class AdminPageModule {}
