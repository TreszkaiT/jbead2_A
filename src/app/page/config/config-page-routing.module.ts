import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigPageComponent } from './component/config/config-page.component';

const routes: Routes = [
  {
    path: '', 
    component: ConfigPageComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigPageRoutingModule { }
