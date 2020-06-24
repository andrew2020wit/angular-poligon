import { Component, OnInit, ViewChild } from '@angular/core';
import {LogBoxComponent} from '../log-box/log-box.component';

@Component({
  selector: 'app-gui-test-area',
  templateUrl: './gui-test-area.component.html',
  styleUrls: ['./gui-test-area.component.scss']
})
export class GuiTestAreaComponent implements OnInit {

  @ViewChild(LogBoxComponent, {static: false})
  private logBox: LogBoxComponent;

  constructor() { }

  ngOnInit(): void {
  }

  addLogItemTest(){
    // console.log('test5run');
    this.logBox.add({
      source: 'GuiTestAreaComponent',
      message: 'Hello!!!',
      colorBG: 'yellow',
    });
  }

}
