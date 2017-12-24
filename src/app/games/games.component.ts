import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  animations: [
    trigger('show', [
      state('hide', style({
        // width: "0%"
      })),
      state('show', style({
        width: "100%"
      })),
      transition('hide => show', animate('250ms ease-in'))
    ]),
    trigger('hide', [
      state('show', style({
        // width: "0%"
      })),
      state('hide', style({
        width: "100%"
      })),
      transition('show => hide', animate('250ms ease-out'))
    ])
  ]
})
export class GamesComponent implements OnInit {
  public visible: boolean;
  public visibleNames: boolean;
  public visibleTitles: boolean;
  public visibleLogo: boolean;
  public state: string;
  
  public itemSelected: string;
  public icon: string;
  public classic: string;
  
  constructor() {
    this.visible = true;
  }
  
  ngOnInit() {
    this.state = this.visible ? "show" : "hide";
    this.visibleNames = this.visible;
    this.visibleTitles = this.visible;
    this.visibleLogo = this.visible;
    this.itemSelected = "g1";
    this.icon = "assets/img/game.png";
    this.classic = "assets/img/classic.png";
  }

  public selectItem(item: string) {
    this.itemSelected = item;
  }

  public toggle() {
    // console.log("Visible: " + this.visible + " " + this.state);
    this.visible = !this.visible;
    this.state = this.visible ? "show" : "hide";
    // console.log("Visible: " + this.visible + " " + this.state);
  }

  public showStart(): void {
    this.visibleTitles = !this.visible;
    this.visibleNames = this.visible;
  }
  
  public showDone(): void {
    this.visibleTitles = this.visible;
  }

  public hideStart(): void {
    this.visibleTitles = this.visible;
    // this.visibleNames = !this.visible;
  }
  
  public hideDone(): void {
    this.visibleNames = this.visible;
  }
}
