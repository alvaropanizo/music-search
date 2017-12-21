import { Observable } from "rxjs/Observable";

export abstract class UseCase { 
    _searchWord: String;
    _url: string;
    
    execute(): Observable<any>{
        return ;
    }
}

