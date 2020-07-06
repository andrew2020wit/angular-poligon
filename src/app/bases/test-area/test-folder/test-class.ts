import {EventEmitter, Output} from '@angular/core';

export class TestClass {
  counter = 0;

  @Output() counterEmmiter = new EventEmitter<number>();

  increment(){
    this.counter++;
    this.counterEmmiter.emit(this.counter);
  }
  decrement(){
    this.counter--;
  }
}
