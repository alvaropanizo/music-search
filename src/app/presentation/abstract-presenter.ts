import { BasePresenter } from "app/presentation/base-presenter";
import { BaseView } from "app/presentation/base-view";
import { ObjectObserver } from "app/domain/interactor/object-observer";


export class AbstractPresenter implements BasePresenter {
    view: BaseView<BasePresenter>;
    objectObserver: ObjectObserver;

    setView(view: BaseView<BasePresenter>) {
        this.view = view;
    }
}
