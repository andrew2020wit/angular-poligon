import { TestEventEmitterComponent } from './test-event-emitter.component';

describe('TestEventEmitterComponent', () => {
  let component: TestEventEmitterComponent;
  beforeEach(() => {
    component = new TestEventEmitterComponent();
  });
  it('should emmit number "100"', () => {
    let result = null;
    component.valueNEmitter.subscribe((v) => {
      result = v;
    });
    component.emiter();
    expect(result).toBe(100);
  });
});
