import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-din2',
  templateUrl: './din2.component.html',
  styleUrls: ['./din2.component.scss'],
})
export class Din2Component {
  @Input() inputObjectValue: object = { a: 'aaa', b: 4 };
  constructor() {}
}
