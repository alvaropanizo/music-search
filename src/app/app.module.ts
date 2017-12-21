import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './ui/components/app.component';
import { LoginFormComponent } from './ui/components/login-form/login-form.component';
import { LoginPresenter } from "app/presentation/presenter/login-presenter";
import { LayerService } from "app/presentation/layer-services/layer.service";
import { MainComponent } from "app/ui/components/main-component/main.component";
import { ProfileComponent } from "app/ui/components/profile-component/profile.component";
import { ProfilePresenter } from "app/presentation/presenter/profile-presenter";
import { UserMapper } from "app/domain/mapper/user-mapper";
import { GetUserUseCase } from "app/domain/interactor/use-cases/get-user-use-case";
import { UserDataRepository } from "app/data/user-data-repository";
import { UserDataStoreFactory } from "app/data/repository/factory/user-data-store-factory";
import { UserRemoteImpl } from "app/remote/user-remote-impl";
import { SpotifyService } from "app/remote/services/spotify.service";
import { HttpService } from "app/remote/services/http.service";
import { HttpModule } from '@angular/http';
import { MainPresenter } from "app/presentation/presenter/main-presenter";
import { SearchComponent } from 'app/ui/components/search-component/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPresenter } from 'app/presentation/presenter/search-presenter';
import { GetAlbumsUseCase } from 'app/domain/interactor/use-cases/get-albums-use-case';
import { AlbumDataRepository } from 'app/data/album-data-repository';
import { AlbumDataStoreFactory } from 'app/data/repository/factory/album-data-store-factory';
import { AlbumRemoteImpl } from 'app/remote/album-remote-impl';
import { AlbumMapper } from 'app/domain/mapper/album-mapper';
import { ListObserver } from 'app/domain/interactor/list-observer';
import { GetAlbumUseCase } from 'app/domain/interactor/use-cases/get-album-use-case';
import { ObjectObserver } from 'app/domain/interactor/object-observer';
import { BootstrapModalModule } from "ng2-bootstrap-modal";
import { AlbumModalComponent } from "app/ui/components/album-modal/album-modal.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    MainComponent,
    ProfileComponent,
    SearchComponent ,
    AlbumModalComponent
  ],
  imports: [
    HttpModule,
    ReactiveFormsModule,
    BrowserModule,
    BootstrapModalModule,
    BootstrapModalModule.forRoot({ container: document.body })
  ],
  providers: [  
    LayerService, SpotifyService, HttpService, 
    LoginPresenter, ProfilePresenter, MainPresenter, SearchPresenter,
    GetUserUseCase, GetAlbumsUseCase, GetAlbumUseCase,
    UserDataRepository, AlbumDataRepository,
    UserDataStoreFactory, AlbumDataStoreFactory,
    UserRemoteImpl, AlbumRemoteImpl,
    ListObserver, ObjectObserver,
    UserMapper, AlbumMapper],
  entryComponents: [ AlbumModalComponent ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
