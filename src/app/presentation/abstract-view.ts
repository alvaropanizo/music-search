import { BasePresenter } from "app/presentation/base-presenter";
import { BaseView } from "app/presentation/base-view";


export class AbstractView implements BaseView<BasePresenter> {
    presenter: BasePresenter;

    setPresenter(presenter: BasePresenter) {
        this.presenter = presenter;
    }

}
