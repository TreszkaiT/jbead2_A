import { Observable, of, ReplaySubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationDataService, AuthenticationStoreService, LoginModel } from 'src/app/api/authentication';
export interface LoginFormModel {
	formGroup: FormGroup;
}

@Injectable()
export class LoginFormService {
	private params!: LoginFormModel;
	private params$$: ReplaySubject<LoginFormModel>;

	public constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private authenticationStoreService: AuthenticationStoreService
	) {
		this.params$$ = new ReplaySubject();
	}

	public init$(): Observable<LoginFormModel> {
		return of(true).pipe(switchMap(() => {
			const formGroup: FormGroup = this.createFormGroup();

			this.params = {
				formGroup
			};

			this.params$$.next(this.params);

			return this.params$$;
		}))
	}

	public submit(): void {
		this.login();

		// this.router.navigate(['../../list'], {				// mock miatt volt itt
		// 	relativeTo: this.activatedRoute,
		// })
	}

	private login(): void {
		const loginModel =  this.createLoginModel(
			this.params.formGroup
		);

		this.authenticationStoreService.dispatchLogin(loginModel);
		this.router.navigateByUrl('');
	}

	private createFormGroup(): FormGroup {
		return this.formBuilder.group({
			email: [null, [Validators.required, Validators.email]],
			password: [null, [Validators.required]],
		});
	}

	private createLoginModel(formGroup: FormGroup): LoginModel {
		return {
			id: 0,
			email: formGroup.value['email'],
			password: formGroup.value['password'],
			found: false,
		}
	}
}
