import { Observable } from "rxjs/Observable";
import { Mapper } from "app/domain/mapper/mapper";
import { SimpleObserver } from "app/domain/interactor/simple-observer";

export abstract class AbstractObserver implements SimpleObserver {
    mapper: Mapper;
    response: any;
    assignTo?: any
    
    resolve(observable: Observable<any>, assignTo?: any): any { }
    
    onSuccess(responseContent: any, remove?) { 
        this.response = responseContent;
    }
    onError(error: String){
        console.log(error);
    }
    onComplete(): any { 
        return this.response;
    } 
    setMapper(mapper: Mapper) {
        this.mapper = mapper;
    }
}

