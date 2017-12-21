/**
 * View Model class for Spotify Album
 */

import { TrackViewModel } from "app/ui/model/track-view-model";

export class AlbumViewModel {
    name: String;
    artists: Array<String>; type: String;
    listenUrl: String; imageUrls: Array<String>;
    productor: String; popularity: number;
    release_date: String; genres: Array<String>; 
    trackList: Array<TrackViewModel>;
    
    constructor(name?: String, artists?: Array<String>, type?: String,
        listenUrl?: String, imageUrls?: Array<String>,
        productor?: String, popularity?: number,
        release_date?: String, genres?:Array<String>,
        trackList?: Array<TrackViewModel>) {
            this.name = name;
            this.artists = artists;
            this.type = type;
            this.imageUrls = imageUrls;
            this.listenUrl = listenUrl;
            this.productor = productor;
            this.popularity = popularity;
            this.release_date = release_date;
            this.genres = genres;
            this.trackList = trackList;
         }
}
