import { Component, OnInit } from '@angular/core';
import { AbstractView } from "app/presentation/abstract-view";
import { LoginPresenter } from "app/presentation/presenter/login-presenter";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent extends AbstractView implements OnInit { 
  
  constructor(
    public presenter: LoginPresenter
  ) { 
        super();
        presenter.setView(this); 
  }

  ngOnInit() { 
    this.presenter.setToken();
  }
}
