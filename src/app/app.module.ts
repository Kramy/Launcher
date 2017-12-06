import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FrameComponent } from './frame/frame.component';
import { FrameContentComponent } from './frame-content/frame-content.component';
import { GamesComponent } from './games/games.component';
import { NgxElectronModule } from "ngx-electron";
import { FrameHeaderComponent } from './frame-header/frame-header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FrameComponent,
    FrameContentComponent,
    GamesComponent,
    FrameHeaderComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    NgxElectronModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
