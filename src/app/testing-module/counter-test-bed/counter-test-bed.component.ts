import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-test-bed',
  templateUrl: './counter-test-bed.component.html',
  styleUrls: ['./counter-test-bed.component.scss'],
})
export class CounterTestBedComponent {
  counter = 0;

  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
}
