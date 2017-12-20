import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FrameComponent } from './frame/frame.component';
import { FrameContentComponent } from './frame-content/frame-content.component';
import { GamesComponent } from './games/games.component';
import { NgxElectronModule } from "ngx-electron";
import { FrameHeaderComponent } from './frame-header/frame-header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { FrameManagerService } from './services/electron/frame-manager.service';
import { NewsComponent } from './news/news.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FrameComponent,
    FrameContentComponent,
    GamesComponent,
    FrameHeaderComponent,
    MainMenuComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    NgxElectronModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    FrameManagerService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
