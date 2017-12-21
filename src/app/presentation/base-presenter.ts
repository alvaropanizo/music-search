import { BaseView } from "app/presentation/base-view";

export interface BasePresenter {
    setView(view: BaseView<BasePresenter>);
}
