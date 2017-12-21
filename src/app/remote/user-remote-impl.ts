import { Observable } from "rxjs/Observable";
import { Inject, Injectable } from "@angular/core";
import { UserRemote } from "app/data/source/remote/user-remote";
import { UserEntity } from "app/data/entity/user-entity";
import { SpotifyService } from "app/remote/services/spotify.service";

@Injectable()
export class UserRemoteImpl implements UserRemote {
    
    constructor(private spotifyService: SpotifyService){ }

    getUser(): Observable<UserEntity>{
        return this.spotifyService.getUser();
    }
}