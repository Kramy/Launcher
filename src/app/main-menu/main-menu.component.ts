import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/aplication/config.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  public itemSelected: string;
  public aplication: any;
  
  constructor(
    private config: ConfigService
  ) {
    this.aplication = config.get("aplication");
  }
  
  ngOnInit() {
    this.itemSelected = "games";
  }

  public selectItem(item: string) {
    this.itemSelected = item;
  }
}
