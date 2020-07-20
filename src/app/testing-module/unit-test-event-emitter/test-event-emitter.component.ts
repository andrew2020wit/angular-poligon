import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-event-emitter',
  templateUrl: './test-event-emitter.component.html',
  styleUrls: ['./test-event-emitter.component.scss'],
})
export class TestEventEmitterComponent {
  valueN = 100;
  @Output() valueNEmitter = new EventEmitter<number>();

  emiter() {
    this.valueNEmitter.emit(this.valueN);
  }
}
