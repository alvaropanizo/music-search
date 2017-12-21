import { Observable } from "rxjs/Observable";
import { UserEntity } from "app/data/entity/user-entity";

export interface UserRemote {

    getUser(): Observable<UserEntity>;
}