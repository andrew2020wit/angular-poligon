import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-unit-test',
  templateUrl: './counter-unit-test.component.html',
  styleUrls: ['./counter-unit-test.component.scss'],
})
export class CounterUnitTestComponent {
  counter = 0;

  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
}
