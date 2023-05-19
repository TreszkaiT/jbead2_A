import { Observable } from 'rxjs';

import { UserEntity, UserEntityAdd, UserEntityUpdate } from './user';

export abstract class UserStoreService {
    public abstract dispatchAddEntityAction(user: UserEntityAdd): void;
    public abstract dispatchChangeNewEntityButtonEnabled(
        enabled: boolean
    ): void;
    public abstract dispatchGetEntityAction(id: string): void;
    public abstract dispatchListEntitiesAction(): void;
    public abstract dispatchUpdateEntityAction(user: UserEntityUpdate): void;
    public abstract selectEntity$(
        id: string
    ): Observable<UserEntity | undefined>;
    public abstract selectEntityList$(): Observable<UserEntity[]>;
    public abstract selectNewEntityButtonEnabled$(): Observable<boolean>;
}
