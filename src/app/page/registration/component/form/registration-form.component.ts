import { Observable } from 'rxjs';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';


import { RegistrationFormModel, RegistrationFormService } from './registration-form.service';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [RegistrationFormService],
	selector: 'app-registration-form',
	templateUrl: './registration-form.component.html',
	styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
	public params$!: Observable<RegistrationFormModel>;

	public constructor(private componentService: RegistrationFormService) {				// FormGroup átadása a komponensnek (Service-ből)
	}

	public ngOnInit(): void {
		this.params$ = this.componentService.init$();									// 1. init meghívása
	}

	public submit(): void {
		this.componentService.submit();
	}
}
