import { SharedModule } from 'primeng/api';
import { UserDataService } from 'src/app/api/user';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserDataServiceMock } from './services';

@NgModule({
  imports: [CommonModule, SharedModule],
  providers: [
    {
      provide: UserDataService,
      useClass: UserDataServiceMock,
    },
  ],
})
export class UserDataModule {}
