import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { UseCase } from "app/domain/interactor/use-cases/use-case";
import { AlbumEntity } from "app/data/entity/album-entity";
import { AlbumDataRepository } from "app/data/album-data-repository";

@Injectable()
export class GetAlbumUseCase extends UseCase {
    
    constructor(private albumRepository: AlbumDataRepository) { super(); }

    execute(): Observable<AlbumEntity> {
        return this.albumRepository.getAlbum(this._url);
    }
}

