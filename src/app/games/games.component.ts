import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { ChildProcessService } from 'ngx-childprocess';
import { ConfigService } from '../services/aplication/config.service';

// const tooltip = (<any>window).require("electron-tooltip");
const tooltip = require('../plugins/tooltip/tooltip');

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
  public state: string;
  
  public games: any;
  public activeGame: any;
  
  constructor(
    private config: ConfigService,
    private childProcessService: ChildProcessService
  ) {
    this.games = config.get("aplication").games;
    this.visible = this.games.show;
  }
  
  ngOnInit() {
    this.state = this.visible ? "show" : "hide";
    this.visibleNames = this.visible;
    this.visibleTitles = this.visible;
    this.activeGame = this.getSelectedItem();
    tooltip();
  }

  public selectItem(item: any): void {
    for (let category of this.games.categories) {
      for (let game of category.games) {
        game.active = false;
      }
    }

    item.active = true;
    this.activeGame = item;
  }

  public getSelectedItem(): any {
    for (let category of this.games.categories) {
      for (let game of category.games) {
        if (game.active) {
          return game;
        }
      }
    }
  }

  public toggle(): void {
    this.visible = !this.visible;
    this.state = this.visible ? "show" : "hide";
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
  }
  
  public hideDone(): void {
    this.visibleNames = this.visible;
  }

  /**
   * 
   * @param path 
   */
  public execute(path: string): void {
    this.childProcessService.childProcess.execFile(path, null, null, (err: any, stdout: any, stderr: any) => {
      if (err) {
          // Ooops.
          // console.log(stderr);
          return console.log(err);
      }

      // Done.
      console.log(stdout);
    });
  }
}
