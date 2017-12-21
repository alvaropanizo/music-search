import { Component, OnInit } from '@angular/core';
import { AbstractView } from "app/presentation/abstract-view";
import { ProfilePresenter } from "app/presentation/presenter/profile-presenter";
import { UserViewModel } from "app/ui/model/user-view-model";
import { FormControl } from "@angular/forms";
import { SearchPresenter } from 'app/presentation/presenter/search-presenter';
import { AlbumViewModel } from 'app/ui/model/album-view-model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent extends AbstractView implements OnInit { 

  albums: Array<AlbumViewModel> = new Array<AlbumViewModel>();
  searchField: FormControl = new FormControl();

  constructor(
    public presenter: SearchPresenter
  ) { 
        super();
        presenter.setView(this); 
  }

  ngOnInit() { 
    this.presenter.inputSearch();
  }
}
