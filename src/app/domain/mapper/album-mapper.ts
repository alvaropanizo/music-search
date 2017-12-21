import { Mapper } from "app/domain/mapper/mapper";
import { Injectable } from "@angular/core";
import { AlbumViewModel } from "app/ui/model/album-view-model";
import { MainComponent } from "app/ui/components/main-component/main.component";
import { ObjectObserver } from "app/domain/interactor/object-observer";
import { GetAlbumUseCase } from "app/domain/interactor/use-cases/get-album-use-case";
import { TrackViewModel } from "app/ui/model/track-view-model";

@Injectable()
export class AlbumMapper implements Mapper { 

    constructor(
        private getAlbumUseCase: GetAlbumUseCase
    ) { }

    map(object: any, array: Array<AlbumViewModel>): Array<AlbumViewModel> {    
        this.getAlbumUseCase._url = object.href;
        this.getAlbumUseCase.execute()
            .subscribe(
                responseContent => {
                    if(array.length <= 3)
                        array.push(
                            this.extractAlbum(responseContent));
                }
            )
        return array;
    }

    reverseMap(object: AlbumViewModel): any { 
        console.log(object);
    }

    private extractAlbum(responseContent): AlbumViewModel {
        let album = new AlbumViewModel();
        let artists = new Array<String>();
        let genres = new Array<String>();
        let images = new Array<String>();
        let trackList = new Array<TrackViewModel>();
        album.name = responseContent.name;
        responseContent.artists
            .forEach(element => artists.push(element.name));
        responseContent.genres
            .forEach(element => genres.push(element.name));
        responseContent.images
            .forEach(element => images.push(element.url));
        responseContent.tracks.items
            .forEach(element => {
                let track: TrackViewModel = 
                    new TrackViewModel(element.name, element.track_number);
                trackList.push(track);
            });
        album.artists = artists;
        album.genres = genres;
        album.imageUrls = images;
        album.trackList = trackList;
        album.type = responseContent.album_type;
        album.popularity = responseContent.popularity;
        album.productor = responseContent.label;
        album.release_date = responseContent.release_date;
        album.listenUrl = responseContent.external_urls.spotify;
        return album;
    }
}

