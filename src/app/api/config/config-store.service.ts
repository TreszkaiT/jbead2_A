import  { Observable } from 'rxjs';
import { ConfigEntity } from './config';

export abstract class ConfigStoreService {
    public abstract dispatchGetEntityAction(userId: string): void;
    public abstract dispatchUpdateEntityAction(entity: ConfigEntity): void;
    public abstract selectEntity$(): Observable<ConfigEntity>;
}