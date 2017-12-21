import { Observable } from "rxjs/Observable";
import { Inject, Injectable } from "@angular/core";
import { UserEntity } from "app/data/entity/user-entity";
import { UserRepository } from "app/domain/repository/user-repository";
import { UserDataStoreFactory } from "app/data/repository/factory/user-data-store-factory";

@Injectable()
export class UserDataRepository implements UserRepository { 

    constructor(private factory: UserDataStoreFactory) { }

    getUser(): Observable<UserEntity> {
        let dataStore = this.factory.retrieveDataStore();
        return dataStore.getUser();
    } 
}
