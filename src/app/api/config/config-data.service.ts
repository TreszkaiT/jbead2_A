import { Observable } from "rxjs";
import { ConfigEntity } from "./config";

export abstract class ConfigDataService {
    public abstract get$(userId: string): Observable<ConfigEntity | null>;
    public abstract update$(config: ConfigEntity): Observable<ConfigEntity>;
}