import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DialogService, DialogComponent } from "ng2-bootstrap-modal";
import { AlbumViewModel } from "app/ui/model/album-view-model";

/**
 * Element for the big modal for new/edit mission
 */
export interface AlbumModalModel {
  album: AlbumViewModel
}
@Component({
  selector: 'app-album-modal',
  templateUrl: './album-modal.component.html',
  styleUrls: ['./album-modal.component.scss']
})
export class AlbumModalComponent extends DialogComponent<AlbumModalModel, Boolean> implements AlbumModalModel {
  album: AlbumViewModel

  constructor(dialogService: DialogService) { super(dialogService) }

    confirm() { 
      this.finish(true);
      return this.result; 
    }

    finish(result: boolean){
      this.result = result;
        if(this.result)
          this.close();
    }
}