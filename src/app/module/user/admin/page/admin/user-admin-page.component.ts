import { Observable } from 'rxjs';
import { UserStoreService } from 'src/app/api/user';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-user-admin-page',
    templateUrl: './user-admin-page.component.html',
    styleUrls: ['./user-admin-page.component.scss'],
})
export class UserAdminPageComponent implements OnInit {
    public isNewEntityButtonEnabled$!: Observable<boolean>;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private userStoreService: UserStoreService
    ) {}

    public clickHandler(): void {
        this.router.navigate(['edit', 0], { relativeTo: this.activatedRoute });
    }

    public ngOnInit(): void {
        this.isNewEntityButtonEnabled$ =
            this.userStoreService.selectNewEntityButtonEnabled$();
    }
}
