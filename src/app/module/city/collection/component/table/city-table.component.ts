import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { CityTableService } from './city-table.service';
import { CityEntity, CityTableParams } from 'src/app/api/city';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [CityTableService],
	selector: 'app-city-table',
	templateUrl: './city-table.component.html',
	styleUrls: ['./city-table.component.scss'],
})
export class CityTableComponent implements OnInit {
	public params$!: Observable<CityTableParams>;

	public constructor(private componentService: CityTableService) {
	}

	public editCity(city: CityEntity): void {
		this.componentService.editCity(city);
	}

	public ngOnInit(): void {
		this.params$ = this.componentService.init$();
	}
}
