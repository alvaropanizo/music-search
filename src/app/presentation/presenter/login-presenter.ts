import { AbstractPresenter } from "app/presentation/abstract-presenter";
import { BaseView } from "app/presentation/base-view";
import { LoginFormComponent } from "app/ui/components/login-form/login-form.component";
import { Injectable } from "@angular/core";
import { LayerService } from "app/presentation/layer-services/layer.service";

@Injectable()
export class LoginPresenter extends AbstractPresenter {
    view: LoginFormComponent;

    constructor(
        public layerService: LayerService
    ) {
        super();  
    }
    
    setView(view: LoginFormComponent){
        this.view = view;
    }

    setToken(){
        let token = this.layerService.getToken();
        if(token != undefined){
            localStorage.setItem('token', token);
        }
    }
}
