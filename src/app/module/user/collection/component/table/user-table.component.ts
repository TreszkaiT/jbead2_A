import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { UserTableService } from './user-table.service';
import { UserEntity, UserTableParams } from 'src/app/api/user';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [UserTableService],
	selector: 'app-user-table',
	templateUrl: './user-table.component.html',
	styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
	public params$!: Observable<UserTableParams>;

	public constructor(private componentService: UserTableService) {
	}

	public editUser(user: UserEntity): void {
		this.componentService.editUser(user);
	}

	public ngOnInit(): void {
		this.params$ = this.componentService.init$();
	}
}
