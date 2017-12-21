import { Observable } from "rxjs/Observable";
import { AlbumEntity } from "app/data/entity/album-entity";


export interface AlbumRepository { 
    getAlbums(searchWord: String): Observable<Array<AlbumEntity>>;
}

