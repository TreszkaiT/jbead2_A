import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageGuard } from './page/admin/guard';
import { PageNotFoundComponent } from './frames/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'admin',
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
  },
  {
    path: 'admin',                                      // ez nem statikus oldal, hanem egy Lazy Load page, mely ezt a három oldalt nem buildeli bele ng build (ng serve) után a core alkalmazásba, hanem külön chang-okat készít belőle, amit csak akkor tölt majd le a szerverről, ha épp majd szükség van rá
    loadChildren: () =>
      import('./page/admin/admin-page.module').then(
        (module) => module.AdminPageModule              // Route: URL-el megcímezhető tartalom, mem minig Page!!! -> Így könyvjelzőzhető a tartalom, külön contenteket címkézhetek meg
      ),
    canActivate: [AdminPageGuard],                      // megvizsgálja, hogy ez a Content engedélyezett-e; azaz ez a Page betöltődjön
    
  },
  {
    path: 'registration',                               // Lazy load ez is és az alatt lévő is
    loadChildren: () =>
      import('./page/registration/registration-page.module').then(
        (module) => module.RegistrationPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./page/login/login-page.module').then(
        (module) => module.LoginPageModule
      ),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
