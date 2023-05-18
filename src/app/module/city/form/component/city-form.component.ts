import { Observable } from 'rxjs';
import { CityFormParams } from 'src/app/api/city';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CityFormService } from './city-form.service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [CityFormService],
    selector: 'app-city-form',
    templateUrl: './city-form.component.html',
    styleUrls: ['./city-form.component.scss'],
})
export class CityFormComponent implements OnInit {
    public params$!: Observable<CityFormParams>;

    public constructor(private componentService: CityFormService) {}

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
