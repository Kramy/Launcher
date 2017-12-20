import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  animations: [
    trigger('hide', [
      state('show', style({
        width: "100%"
      })),
      state('hide', style({
        width: "68px"
      })),
      transition('show => hide', animate('250ms ease-out'))
    ]),
    trigger('show', [
      state('hide', style({
        width: "68px"
      })),
      state('show', style({
        width: "100%"
      })),
      transition('hide => show', animate('250ms ease-in'))
    ])
  ]
})
export class GamesComponent implements OnInit {
  public state: string;
  public hideGameNames: boolean;
  public hideCategoryTitles: boolean;

  public itemSelected: string;

  public icon: string = "assets/img/game.png";

  constructor() {
    this.state = "show";
    this.hideGameNames = true;
    this.hideCategoryTitles = true;
  }

  ngOnInit() {
    this.itemSelected = "g1";
  }

  public selectItem(item: string) {
    this.itemSelected = item;
  }

  public toggle() {
    console.log(this.state);
    this.state = (this.state === "show" ? "hide" : "show");
  }

  public hideStart(): void {}
  
  public hideDone(): void {
    this.hideGameNames = this.state === 'hide';
  }

  public showStart(): void {}
  
  public showDone(): void {
    this.hideCategoryTitles = this.state === 'hide';
  }
}
