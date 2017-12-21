export interface Mapper { 
    map(object: any, response: any): any;
    reverseMap(object: any): any;
}

