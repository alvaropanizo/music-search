export interface DataStoreFactory {
    retrieveDataStore(): any;
    retrieveLocalDataStore(): any;
    retrieveRemoteDataStore(): any;
}