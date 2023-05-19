import { Observable, of, ReplaySubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthenticationStoreService, RegistrationModel } from 'src/app/api/authentication';

import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

export interface RegistrationFormModel {
  formGroup: FormGroup;
}

@Injectable()
export class RegistrationFormService {
  private params!: RegistrationFormModel;
  private params$$: ReplaySubject<RegistrationFormModel>;

  public constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationStoreService: AuthenticationStoreService
  ) {
    this.params$$ = new ReplaySubject();
  }

  public init$(): Observable<RegistrationFormModel> {
    return of(true).pipe(
      switchMap(() => {
        const formGroup: FormGroup = this.createFormGroup();

        this.params = {
          formGroup,
        };

        this.params$$.next(this.params);

        return this.params$$;
      })
    );
  }

  public submit(): void {
    this.register();

		// this.router.navigate(['../../list'], {				// mock miatt volt itt
		// 	relativeTo: this.activatedRoute,
		// })		
  }

  private createFormGroup(): FormGroup {
	return this.formBuilder.group({					// a formBuilder létrehoz 1 group-ot, amiben van:	
		email: [null, [Validators.required, Validators.email]],	// 1 email property, melyet kötelező kitölteni
      		password: [null, [Validators.required]],
    });
  }

  private createRegistrationModel(formGroup: FormGroup): RegistrationModel {
    return {
      id: 0,
      email: formGroup.value['email'],
      password: formGroup.value['password'],
      found: false,
    };
  }

  private register(): void {
    const registrationModel = this.createRegistrationModel(
      this.params.formGroup
    );

    this.authenticationStoreService.dispatchRegistrationAction(
      registrationModel
    );
    this.router.navigate(['../login'], {
      relativeTo: this.activatedRoute,
    });
  }
}
