import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestAreaComponent } from './test-area/test-area.component';
import { CounterUnitTestComponent } from './counter-unit-test/counter-unit-test.component';
import { TestEventEmitterComponent } from './unit-test-event-emitter/test-event-emitter.component';

@NgModule({
  declarations: [
    TestAreaComponent,
    CounterUnitTestComponent,
    TestEventEmitterComponent,
  ],
  imports: [CommonModule],
})
export class TestingModule {}
