import { Observable } from 'rxjs';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';


import { LoginFormModel, LoginFormService } from './login-form.service';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [LoginFormService],
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
	public params$!: Observable<LoginFormModel>;

	public constructor(private componentService: LoginFormService) {
	}

	public ngOnInit(): void {
		this.params$ = this.componentService.init$();
	}

	public submit(): void {
		this.componentService.submit();
	}
}
