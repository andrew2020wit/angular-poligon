import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterTestComponent } from './counter-test/counter-test.component';
import { TestAreaComponent } from './test-area/test-area.component';

@NgModule({
  declarations: [CounterTestComponent, TestAreaComponent],
  imports: [CommonModule],
})
export class TestingModule {}
