import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FrameComponent } from './frame/frame.component';
import { FrameContentComponent } from './frame-content/frame-content.component';
import { MenuContentComponent } from './menu-content/menu-content.component';
import { GamesComponent } from './games/games.component';
import { NgxElectronModule } from "ngx-electron";

@NgModule({
  declarations: [
    AppComponent,
    FrameComponent,
    FrameContentComponent,
    MenuContentComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    NgxElectronModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
