import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Injectable()
export class FrameManagerService {

  constructor(private electronService: ElectronService) { }
  
  public minimize() {
    this.electronService.ipcRenderer.send("minimize");
  }

  public resize() {
    this.electronService.ipcRenderer.send("resize");
  }

  // public maximize() {
  //   this.electronService.ipcRenderer.send("maximize");
  // }

  // public unmaximize() {
  //   this.electronService.ipcRenderer.send("unmaximize");
  // }

  public close() {
    this.electronService.ipcRenderer.send("close");
  }

}
