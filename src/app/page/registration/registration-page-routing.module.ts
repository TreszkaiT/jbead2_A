import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationPageComponent } from './component';

const routes: Routes = [
	{
		path: '',												
		pathMatch: 'full',
		component: RegistrationPageComponent,				// ez a route itt már statikus, mert nincs benne: loadChildren...
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],				// ez forChild() hívja be a fenti route-okat:  ''
	exports: [RouterModule],
})
export class RegistrationPageRoutingModule {}
