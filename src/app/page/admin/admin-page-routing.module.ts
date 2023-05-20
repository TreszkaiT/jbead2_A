import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminPageComponent } from './component/page/admin-page.component';

const routes: Routes = [
  {
    // path: '', 
    // component: AdminPageComponent,
    // pathMatch: 'full',
    path: '',                                                             // ha az admin URL meg van hívva
    component: AdminPageComponent,
    children: [
      {
        path: 'user',                                                   // Lazy modon meg a city-t, ha szükség lezs rá
        loadChildren: () =>
          import('../../module/user/admin/user-admin-page.module').then(
            (module) => module.UserAdminPageModule
          ),
      },
      {
        path: 'city',                                                   // Lazy modon meg a city-t, ha szükség lezs rá
        loadChildren: () =>
          import('../../module/city/admin/city-admin-page.module').then(
            (module) => module.CityAdminPageModule
          ),
      },
      // {
      //   path: 'language',                                                   // Lazy modon meg a city-t, ha szükség lezs rá
      //   loadChildren: () =>
      //     import('./modules/language/language-admin-page.module').then(
      //       (module) => module.LanguageAdminPageModule
      //     ),
      // },  
      // {
      //   path: 'otherskill',                                                   // Lazy modon meg a city-t, ha szükség lezs rá
      //   loadChildren: () =>
      //     import('./modules/otherskill/otherskill-admin-page.module').then(
      //       (module) => module.OtherskillAdminPageModule
      //     ),
      // },    
      // {
      //   path: 'phone',                                                   // Lazy modon meg a city-t, ha szükség lezs rá
      //   loadChildren: () =>
      //     import('./modules/phone/phone-admin-page.module').then(
      //       (module) => module.PhoneAdminPageModule
      //     ),
      // },  
      // {
      //   path: 'picture',                                                   // Lazy modon meg a city-t, ha szükség lezs rá
      //   loadChildren: () =>
      //     import('./modules/picture/picture-admin-page.module').then(
      //       (module) => module.PictureAdminPageModule
      //     ),
      // },     
      // {
      //   path: 'study',                                                   // Lazy modon meg a city-t, ha szükség lezs rá
      //   loadChildren: () =>
      //     import('./modules/study/study-admin-page.module').then(
      //       (module) => module.StudyAdminPageModule
      //     ),
      // },   
      // {
      //   path: 'proofexperience',                                                   // Lazy modon meg a city-t, ha szükség lezs rá
      //   loadChildren: () =>
      //     import('./modules/proofexperience/proofexperience-admin-page.module').then(
      //       (module) => module.ProofexperienceAdminPageModule
      //     ),
      // }, 
      // {
      //   path: 'socialmedia',                                                   // Lazy modon meg a city-t, ha szükség lezs rá
      //   loadChildren: () =>
      //     import('./modules/socialmedia/socialmedia-admin-page.module').then(
      //       (module) => module.SocialmediaAdminPageModule
      //     ),
      // },   
      // {
      //   path: 'messageapp',                                                   // Lazy modon meg a city-t, ha szükség lezs rá
      //   loadChildren: () =>
      //     import('./modules/messageapp/messageapp-admin-page.module').then(
      //       (module) => module.MessageappAdminPageModule
      //     ),
      // },                                      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
