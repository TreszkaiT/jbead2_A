import { Observable } from 'rxjs';
import { UserFormParams } from 'src/app/api/user';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { UserFormService } from './user-form.service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UserFormService],
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
    public params$!: Observable<UserFormParams>;

    public constructor(private componentService: UserFormService) {}

    public cancel(): void {
        this.componentService.cancel();
    }

    public ngOnInit(): void {
        this.params$ = this.componentService.init$();
    }

    public submit(): void {
        this.componentService.submit();
    }
}
