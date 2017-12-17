import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  public logo: string = "assets/img/logo.png";
  public itemSelected: string = "games";

  constructor() { }

  ngOnInit() {
  }

  public selectItem(item: string) {
    console.log(item);
    this.itemSelected = item;
  }
}
