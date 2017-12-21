import { Observable } from "rxjs/Observable";
import { UserEntity } from "app/data/entity/user-entity";
import { AlbumEntity } from "app/data/entity/album-entity";

export interface AlbumRemote {

    getAlbums(searchWord: String): Observable<Array<AlbumEntity>>;
}