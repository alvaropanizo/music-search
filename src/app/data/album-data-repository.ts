import { Observable } from "rxjs/Observable";
import { Inject, Injectable } from "@angular/core";
import { AlbumEntity } from "app/data/entity/album-entity";
import { AlbumDataStoreFactory } from "app/data/repository/factory/album-data-store-factory";
import { AlbumRepository } from "app/domain/repository/album-repository";

@Injectable()
export class AlbumDataRepository implements AlbumRepository { 

    constructor(private factory: AlbumDataStoreFactory) { }

    getAlbums(searchWord: String): Observable<Array<AlbumEntity>> {
        let dataStore = this.factory.retrieveDataStore();
        return dataStore.getAlbums(searchWord);
    } 

    getAlbum(url: string): Observable<AlbumEntity> {
        let dataStore = this.factory.retrieveDataStore();
        return dataStore.getAlbum(url);
    } 
}
