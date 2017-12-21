import { Component, OnInit } from '@angular/core';
import { AbstractView } from "app/presentation/abstract-view";
import { ProfilePresenter } from "app/presentation/presenter/profile-presenter";
import { UserViewModel } from "app/ui/model/user-view-model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends AbstractView implements OnInit { 
  user: UserViewModel = new UserViewModel();
  
  constructor(
    public presenter: ProfilePresenter
  ) { 
        super();
        presenter.setView(this); 
  }

  ngOnInit() { 
    this.presenter.getUser();
  }
}
