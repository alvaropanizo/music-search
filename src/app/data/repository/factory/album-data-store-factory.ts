import { DataStoreFactory } from "app/data/repository/data-store-factory";
import { AbstractDataStoreFactory } from "app/data/repository/abstract-data-store-factory";
import { Inject, Injectable } from "@angular/core";
import { AlbumRemoteImpl } from "app/remote/album-remote-impl";

@Injectable()
export class AlbumDataStoreFactory extends AbstractDataStoreFactory {
    constructor(private albumRemoteDataStore: AlbumRemoteImpl) 
    { 
        super(); 
    } 

    retrieveRemoteDataStore(): AlbumRemoteImpl {
        return this.albumRemoteDataStore;
    }
}