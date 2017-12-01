import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FrameComponent } from './frame/frame.component';
import { FrameContentComponent } from './frame-content/frame-content.component';
import { MenuContentComponent } from './menu-content/menu-content.component';


@NgModule({
  declarations: [
    AppComponent,
    FrameComponent,
    FrameContentComponent,
    MenuContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
