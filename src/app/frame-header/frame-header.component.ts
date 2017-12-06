import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frame-header',
  templateUrl: './frame-header.component.html',
  styleUrls: ['./frame-header.component.scss']
})
export class FrameHeaderComponent implements OnInit {
  main_menu: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
