import { Component, OnInit } from '@angular/core';
import { AbstractView } from "app/presentation/abstract-view";
import { MainPresenter } from "app/presentation/presenter/main-presenter";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent extends AbstractView implements OnInit { 
  
  constructor(
    public presenter: MainPresenter
  ) { 
        super();
        presenter.setView(this); 
  }

  ngOnInit() {  
    this.presenter.layerService.getToken();
  }

  closeSession(){
    localStorage.removeItem('token');
    location.href = document.baseURI;
  }
}
