import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  animations: [
    trigger('hide', [
      state('show', style({
        // width: "68px"
      })),
      state('hide', style({
        width: "100%"
      })),
      transition('show => hide', animate('250ms ease-out'))
    ]),
    trigger('show', [
      state('hide', style({
        // width: "68px"
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
  public icon: string;
  
  
  constructor() {
  }
  
  ngOnInit() {
    this.state = "show";
    this.itemSelected = "g1";
    this.icon = "assets/img/game.png";
  }

  public selectItem(item: string) {
    this.itemSelected = item;
  }

  public toggle() {
    this.state = (this.state === "show" ? "hide" : "show");
    console.log("Animación: " + this.state);
  }

  public hideStart(): void {
    this.hideGameNames = this.state === 'hide';
  }
  
  public hideDone(): void {}

  public showStart(): void {}
  
  public showDone(): void {
    this.hideCategoryTitles = this.state === 'hide';
  }
}
