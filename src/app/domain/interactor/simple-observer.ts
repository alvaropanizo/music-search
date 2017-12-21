import { Observable } from "rxjs/Observable";

export interface SimpleObserver {
    resolve(observable: Observable<any>, assignTo?: any): any;
    onSuccess(responseContent: any) ;
    onError(error: String);
    onComplete(): any;
}

