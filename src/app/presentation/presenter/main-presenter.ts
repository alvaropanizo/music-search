import { AbstractPresenter } from "app/presentation/abstract-presenter";
import { Injectable } from "@angular/core";
import { LayerService } from "app/presentation/layer-services/layer.service";
import { ObjectObserver } from "app/domain/interactor/object-observer";
import { UserMapper } from "app/domain/mapper/user-mapper";
import { GetUserUseCase } from "app/domain/interactor/use-cases/get-user-use-case";
import { MainComponent } from "app/ui/components/main-component/main.component";

@Injectable()
export class MainPresenter extends AbstractPresenter {
    view: MainComponent;

    constructor(
        public layerService: LayerService
    ) {
        super();  
    }
    
    setView(view: MainComponent){
        this.view = view;
    }
}
