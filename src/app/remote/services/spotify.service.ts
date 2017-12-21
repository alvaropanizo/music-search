import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import { HttpService } from "app/remote/services/http.service";
import { environment } from "environments/environment";
import { UserEntity } from "app/data/entity/user-entity";
import { AlbumEntity } from 'app/data/entity/album-entity';
/**
 * Missions Service for API communications
 */
@Injectable()
export class SpotifyService {

  url: string = environment.spotifyUrl;
  headers = new Headers();

  constructor(private http: HttpService) { 
      let token = localStorage.getItem('token');
      this.headers.append("Authorization", "Bearer " + token);
      http.setHeader(this.headers);
  }

    /* GET Spotify user info */
    getUser(): Observable<UserEntity> { 
        return this.http.findOne(this.url + "me");
    }

    /* GET Spotify list of albums related to a search word */
    getAlbums(searchWord: String): Observable<Array<AlbumEntity>> {
        let searchUrl = this.url + "search?type=album&limit=4&client_id="
        + environment.client_id + "&q=" + searchWord;
        return this.http.findOne(searchUrl);
    }

    /* GET Spotify albums */
    getAlbum(url: string): Observable<AlbumEntity> {
        return this.http.findOne(url);
    }
}
