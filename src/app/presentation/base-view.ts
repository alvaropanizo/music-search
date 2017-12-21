/**
 * Created by Álvaro Panizo
 *
 * Interface class to act as a base for any class that is to take the role of the BaseView in
 * the Model-BaseView-Presenter pattern.
 */
export interface BaseView<BasePresenter> {
    setPresenter(presenter: BasePresenter);
}
