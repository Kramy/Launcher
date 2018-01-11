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
  public user: any;
  public logo: string;
  public avatar: string;
  
  constructor(
    private config: ConfigService
  ) {
    this.aplication = config.get("aplication");
    this.user = config.get("user");
    this.logo = this.aplication.logo;
    this.avatar = this.user.avatar;
  }
  
  ngOnInit() {
    this.itemSelected = "games";
  }

  public selectItem(item: string) {
    this.itemSelected = item;
  }
}
