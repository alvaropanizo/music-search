import { DataStoreFactory } from "app/data/repository/data-store-factory";

export abstract class AbstractDataStoreFactory implements DataStoreFactory {
    retrieveDataStore(): any {
        return this.retrieveRemoteDataStore();
    }
    
    retrieveLocalDataStore(): any { return null; }

    retrieveRemoteDataStore(): any { }
}