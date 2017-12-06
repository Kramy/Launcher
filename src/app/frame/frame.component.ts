import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit {

  public focus: boolean;
  // public text: string;

  constructor(private electronService: ElectronService, private ref: ChangeDetectorRef) {
    this.focus = true;
    
    // this.electronService.ipcRenderer.on("focus", () => {
    //   this.focus = true;
    //   ref.detectChanges();
    // });

    // this.electronService.ipcRenderer.on("blur", () => {
    //   this.focus = false;
    //   ref.detectChanges();
    // });
  }

  ngOnInit() {
  }

}
