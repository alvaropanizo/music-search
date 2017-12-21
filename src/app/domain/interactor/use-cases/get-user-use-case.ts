import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { UseCase } from "app/domain/interactor/use-cases/use-case";
import { UserEntity } from "app/data/entity/user-entity";
import { UserDataRepository } from "app/data/user-data-repository";

@Injectable()
export class GetUserUseCase extends UseCase {
    
    constructor(private userRepository: UserDataRepository) { super(); }

    execute(): Observable<UserEntity> {
        return this.userRepository.getUser();
    }
}

