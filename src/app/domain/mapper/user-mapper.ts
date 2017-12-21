import { Mapper } from "app/domain/mapper/mapper";
import { Injectable } from "@angular/core";
import { UserViewModel } from "app/ui/model/user-view-model";

@Injectable()
export class UserMapper implements Mapper { 

    constructor() { }

    map(object: any, user: UserViewModel): UserViewModel {
        user.country = object.country;
        user.completeName = object.display_name;
        user.email = object.email;
        user.premium = object.product == "premium";
        user.numberOfFolowers =  object.followers.total;
        user.imageUrl =  object.images[0].url;
        return user;
    }

    reverseMap(object: UserViewModel): any { 
        console.log(object);
    }
}

