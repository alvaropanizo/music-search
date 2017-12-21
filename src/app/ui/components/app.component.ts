import { Component, OnInit } from '@angular/core';
import { AbstractView } from "app/presentation/abstract-view";
import { LayerService } from "app/presentation/layer-services/layer.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends AbstractView implements OnInit {
    
  token: string;

  constructor( public layerService: LayerService ) { super(); }

  ngOnInit(): void { }
  
}
