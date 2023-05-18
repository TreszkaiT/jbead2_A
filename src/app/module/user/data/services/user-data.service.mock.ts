import { Observable, of } from 'rxjs';
import {
    UserDataService,
    UserEntity,
    UserEntityAdd,
    UserEntityUpdate,
} from 'src/app/api/user';
import { v4 as uuidv4 } from 'uuid';

import { Injectable } from '@angular/core';

@Injectable()
export class UserDataServiceMock extends UserDataService {
    private userMap: Map<string, UserEntity> = new Map<string, UserEntity>();

    public add$(user: UserEntityAdd): Observable<UserEntity> {
        const id = uuidv4();
        const userEntity: UserEntity = {
            ...user,
            id,
        };

        this.userMap.set(id, userEntity);

        return of(userEntity);
    }

    public get$(id: string): Observable<UserEntity | undefined> {
        return of(this.userMap.get(id));
    }

    public list$(): Observable<UserEntity[]> {
        return of(Array.from(this.userMap.values()));
    }

    public update$(user: UserEntityUpdate): Observable<UserEntityUpdate> {
        const userEntity = this.userMap.get(user.id);
        let updatedUser: UserEntity;

        if (!userEntity) {
            throw new Error('User not existed!');
        } else {
            updatedUser = {
                ...userEntity,
                ...user,
            };
        }

        this.userMap.set(updatedUser.id || '', updatedUser);

        return of(updatedUser as UserEntityUpdate);
    }
}
