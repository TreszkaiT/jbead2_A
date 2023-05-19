import { Observable } from 'rxjs';
import { CityStoreService } from 'src/app/api/city';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-city-admin-page',
    templateUrl: './city-admin-page.component.html',
    styleUrls: ['./city-admin-page.component.scss'],
})
export class CityAdminPageComponent implements OnInit {
    public isNewEntityButtonEnabled$!: Observable<boolean>;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private cityStoreService: CityStoreService
    ) {}

    public clickHandler(): void {
        this.router.navigate(['edit', 0], { relativeTo: this.activatedRoute });
    }

    public ngOnInit(): void {
        this.isNewEntityButtonEnabled$ =
            this.cityStoreService.selectNewEntityButtonEnabled$();
    }
}
