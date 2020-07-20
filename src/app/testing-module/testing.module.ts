import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestAreaComponent } from './test-area/test-area.component';
import { CounterUnitTestComponent } from './counter-unit-test/counter-unit-test.component';

@NgModule({
  declarations: [TestAreaComponent, CounterUnitTestComponent],
  imports: [CommonModule],
})
export class TestingModule {}
