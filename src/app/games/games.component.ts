import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  public minimized: boolean;
  public itemSelected: string = "";

  public icon: string = "assets/img/game.png";

  constructor() {
    this.minimized = false;
  }

  ngOnInit() {
    this.itemSelected = "g1";
  }

  public selectItem(item: string) {
    this.itemSelected = item;
  }

}
