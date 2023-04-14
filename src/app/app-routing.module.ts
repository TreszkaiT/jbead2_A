import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./page/home/home-page.module').then(
        (module) => module.HomePageModule),
  },
  {
    path: 'config',
    loadChildren: () =>
      import('./page/config/config-page.module').then(
        (module) => module.ConfigPageModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
