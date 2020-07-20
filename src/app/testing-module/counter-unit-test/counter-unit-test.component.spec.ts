import { CounterUnitTestComponent } from './counter-unit-test.component';

describe('CounterUnitTestComponent', () => {
  let component: CounterUnitTestComponent;
  beforeEach(() => {
    component = new CounterUnitTestComponent();
  });
  it('it should increment counter by 1', () => {
    component.increment();
    expect(component.counter).toBe(1);
  });
  it('it should decrement counter by 1', () => {
    component.decrement();
    expect(component.counter).toBe(-1);
  });
});
