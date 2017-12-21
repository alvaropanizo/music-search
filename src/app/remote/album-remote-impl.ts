import { Observable } from "rxjs/Observable";
import { Inject, Injectable } from "@angular/core";
import { UserEntity } from "app/data/entity/user-entity";
import { SpotifyService } from "app/remote/services/spotify.service";
import { AlbumRemote } from "app/data/source/remote/album-remote";
import { AlbumEntity } from "app/data/entity/album-entity";

@Injectable()
export class AlbumRemoteImpl implements AlbumRemote {
    
    constructor(private spotifyService: SpotifyService){ }

    getAlbums(searchWord): Observable<Array<AlbumEntity>>{
        return this.spotifyService.getAlbums(searchWord);
    }

    getAlbum(url): Observable<AlbumEntity>{
        return this.spotifyService.getAlbum(url);
    }
}