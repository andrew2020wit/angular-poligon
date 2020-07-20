import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestAreaComponent } from './test-area/test-area.component';
import { CounterUnitTestComponent } from './counter-unit-test/counter-unit-test.component';
import { TestEventEmitterComponent } from './unit-test-event-emitter/test-event-emitter.component';
import { ReactiveFormsUnitTestComponent } from './reactive-forms-unit-test/reactive-forms-unit-test.component';
import { CounterTestBedComponent } from './counter-test-bed/counter-test-bed.component';

@NgModule({
  declarations: [
    TestAreaComponent,
    CounterUnitTestComponent,
    TestEventEmitterComponent,
    ReactiveFormsUnitTestComponent,
    CounterTestBedComponent,
  ],
  imports: [CommonModule],
})
export class TestingModule {}
