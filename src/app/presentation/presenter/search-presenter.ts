import { AbstractPresenter } from "app/presentation/abstract-presenter";
import { Injectable } from "@angular/core";
import { LayerService } from "app/presentation/layer-services/layer.service";
import { ObjectObserver } from "app/domain/interactor/object-observer";
import { UserMapper } from "app/domain/mapper/user-mapper";
import { GetUserUseCase } from "app/domain/interactor/use-cases/get-user-use-case";
import { SearchComponent } from "app/ui/components/search-component/search.component";
import { GetAlbumsUseCase } from "app/domain/interactor/use-cases/get-albums-use-case";
import { ListObserver } from "app/domain/interactor/list-observer";
import { AlbumMapper } from "app/domain/mapper/album-mapper";
import { AlbumViewModel } from "app/ui/model/album-view-model";
import { DialogService } from "ng2-bootstrap-modal";
import { AlbumModalComponent } from "app/ui/components/album-modal/album-modal.component";

@Injectable()
export class SearchPresenter extends AbstractPresenter {
    view: SearchComponent;

    constructor(
        private mapper: AlbumMapper,
        public listObserver: ListObserver,
        public getAlbumsUseCase: GetAlbumsUseCase,
        public layerService: LayerService,
        private dialogService: DialogService
    ) {  super(); }
    
    setView(view: SearchComponent){
        this.view = view;
        this.listObserver = new ListObserver();
        this.listObserver.setMapper(this.mapper);
    }

    inputSearch(){
        this.view.searchField.valueChanges
            .subscribe(
                searchWord => this.searchAlbums(searchWord)
            );
    }

    private searchAlbums(searchWord: String){
        this.view.albums = new Array<AlbumViewModel>()
        this.getAlbumsUseCase._searchWord = searchWord;
        this.listObserver
            .resolve(this.getAlbumsUseCase.execute(), this.view.albums);
    }

    viewAlbum(album: AlbumViewModel){
        this.dialogService
        .addDialog(AlbumModalComponent, { album });
    }
}
