import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  public logo: string;
  public itemSelected: string;
  
  constructor() { }
  
  ngOnInit() {
    this.itemSelected = "games";
    this.logo = "assets/img/logo.png";
  }

  public selectItem(item: string) {
    console.log(item);
    this.itemSelected = item;
  }
}
