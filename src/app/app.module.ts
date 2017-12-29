import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { APP_INITIALIZER } from '@angular/core';
import { NgxElectronModule } from 'ngx-electron';
import { NgxChildProcessModule } from 'ngx-childprocess';
import { AppRoutingModule } from './/app-routing.module';

import { ConfigService } from './services/aplication/config.service';
import { FrameManagerService } from './services/electron/frame-manager.service';

import { AppComponent } from './app.component';
import { FrameComponent } from './frame/frame.component';
import { FrameContentComponent } from './frame-content/frame-content.component';
import { GamesComponent } from './games/games.component';
import { FrameHeaderComponent } from './frame-header/frame-header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { NewsComponent } from './news/news.component';

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
    NgxChildProcessModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [
    FrameManagerService,
    ConfigService,
    { provide: APP_INITIALIZER, useFactory: (config: ConfigService) => () => config.load(), deps: [ConfigService], multi: true }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
