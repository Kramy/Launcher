import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { FrameManagerService } from '../services/electron/frame-manager.service';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit {

  public focus: boolean;

  constructor(
    private electronService: ElectronService,
    private frameManagerService: FrameManagerService,
    private ref: ChangeDetectorRef,
  ) {
    this.focus = true;
    
    this.electronService.ipcRenderer.on("focus", () => {
      this.focus = true;
      ref.detectChanges();
    });

    this.electronService.ipcRenderer.on("blur", () => {
      this.focus = false;
      ref.detectChanges();
    });
    
  }

  ngOnInit() {
  }

  public minimize() {
    this.frameManagerService.minimize();
  }

  public resize() {
    this.frameManagerService.resize();
  }
  
  public close() {
    this.frameManagerService.close();
  }

}
