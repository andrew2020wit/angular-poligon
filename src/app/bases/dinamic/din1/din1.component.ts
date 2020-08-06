import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-din1',
  templateUrl: './din1.component.html',
  styleUrls: ['./din1.component.scss'],
})
export class Din1Component {
  @Input() inputObjectValue: object = { a: 'aaa', b: 4 };

  constructor() {}
}
