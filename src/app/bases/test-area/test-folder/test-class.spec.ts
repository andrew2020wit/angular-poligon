import { TestClass} from './test-class';

describe('TestClass simple unit-test', () => {
  let testClass: TestClass;

  beforeEach( () => {
    testClass = new TestClass();
  });

  it('should counter++', () => {
    testClass.increment();
    expect(testClass.counter).toBe(1);
  });

  it('should counter--', () => {
    testClass.decrement();
    expect(testClass.counter).toBe(-1);
  });

  it('eventEmitter', () => {
    let result = null;
    testClass.counterEmmiter.subscribe( v => result = v);
    testClass.increment();
    expect(result).toBe(1);
  });

});
