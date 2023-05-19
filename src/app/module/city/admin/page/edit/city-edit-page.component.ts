import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-city-edit-page',
    templateUrl: './city-edit-page.component.html',
    styleUrls: ['./city-edit-page.component.scss'],
})
export class CityEditPageComponent implements OnInit {
    public cityId!: string;

    public constructor(private activatedRoute: ActivatedRoute) {}

    public ngOnInit(): void {
        this.cityId = this.activatedRoute.snapshot.params['cityId'];
    }
}
