import { AbstractPresenter } from "app/presentation/abstract-presenter";
import { Injectable } from "@angular/core";
import { LayerService } from "app/presentation/layer-services/layer.service";
import { ProfileComponent } from "app/ui/components/profile-component/profile.component";
import { ObjectObserver } from "app/domain/interactor/object-observer";
import { UserMapper } from "app/domain/mapper/user-mapper";
import { GetUserUseCase } from "app/domain/interactor/use-cases/get-user-use-case";

@Injectable()
export class ProfilePresenter extends AbstractPresenter {
    view: ProfileComponent;

    constructor(
        private mapper: UserMapper,
        private getUserUseCase: GetUserUseCase,
        public layerService: LayerService
    ) {
        super();  
    }
    
    setView(view: ProfileComponent){
        this.view = view;
        this.objectObserver = new ObjectObserver();
        this.objectObserver.setMapper(this.mapper);
    }

    getUser(){
         this.objectObserver
            .resolve(this.getUserUseCase.execute(), this.view.user);
    }

}
