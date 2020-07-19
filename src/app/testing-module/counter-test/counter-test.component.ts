import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-counter-test',
  templateUrl: './counter-test.component.html',
  styleUrls: ['./counter-test.component.scss']
})
export class CounterTestComponent implements OnInit {

  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }

}
