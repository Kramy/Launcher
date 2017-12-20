import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  animations: [
    trigger('toggle', [
      state('hide', style({

        // 'background-color': 'red'
      })),
      state('show', style({
        // 'background-color': 'yellow'
      })),
      transition('show <=> hide', animate('1s ease-in-out'))
    ])
  ]
})
export class GamesComponent implements OnInit {
  public state: string;
  public itemSelected: string = "";

  public icon: string = "assets/img/game.png";

  constructor() {
    this.state = "show";
  }

  ngOnInit() {
    this.itemSelected = "g1";
  }

  public selectItem(item: string) {
    this.itemSelected = item;
  }

  public animateMe() {
    console.log(this.state);
    this.state = (this.state === "show" ? "hide" : "show");
  }
}
