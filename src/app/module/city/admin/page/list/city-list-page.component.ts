import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-city-list-page',
    templateUrl: './city-list-page.component.html',
    styleUrls: ['./city-list-page.component.scss'],
})
export class CityListPageComponent {}
