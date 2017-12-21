import { Observable } from "rxjs/Observable";
import { Mapper } from "app/domain/mapper/mapper";
import { SimpleObserver } from "app/domain/interactor/simple-observer";
import { Injectable } from "@angular/core";
import { AbstractObserver } from "app/domain/interactor/abstract-observer";

@Injectable()
export class ListObserver extends AbstractObserver {

    constructor() { super(); }

    response: Array<any> = new Array<any>();   
    
    public resolve(observable: Observable<any>, assignTo?: Array<any>): Array<any>{
        if(assignTo != undefined) this.response = assignTo;
        observable.subscribe(
            responseContent => {
                return this.onSuccess(responseContent);
            },
            error => this.onError(error),
            () => this.onComplete()
        )
        return this.response;
    }

    onSuccess(responseContent: any) {
        let list = new Array<any>();
        responseContent.albums.items.forEach(element => {
             let m = this.mapper.map(element, this.response);
         });
    }

    onComplete(): Array<any>{ 
        return this.response;
    }  
}

