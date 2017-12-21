import { Observable } from "rxjs/Observable";
import { Mapper } from "app/domain/mapper/mapper";
import { AbstractObserver } from "app/domain/interactor/abstract-observer";

export class ObjectObserver extends AbstractObserver {
    mapper: Mapper;
    assignTo?: any;
    
    resolve(observable: Observable<any>, assignTo?: any): any{
        observable.subscribe(
            responseContent => {
                this.assignTo = assignTo;
                this.onSuccess(responseContent);
            },
            error => this.onError(error),
            () => this.onComplete()
        )
        return this.response;
    }

    onSuccess(responseContent: any) {
       this.mapper.map(responseContent, this.assignTo);
    }

    onComplete(): any {
        this.assignTo = this.response;
        return this.assignTo;
    }
}

