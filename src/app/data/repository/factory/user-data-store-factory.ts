import { DataStoreFactory } from "app/data/repository/data-store-factory";
import { AbstractDataStoreFactory } from "app/data/repository/abstract-data-store-factory";
import { Inject, Injectable } from "@angular/core";
import { UserRemoteImpl } from "app/remote/user-remote-impl";

@Injectable()
export class UserDataStoreFactory extends AbstractDataStoreFactory {
    constructor(private userRemoteDataStore: UserRemoteImpl) 
    { 
        super(); 
    } 

    retrieveRemoteDataStore(): UserRemoteImpl {
        return this.userRemoteDataStore;
    }
}