import {chaosFunction} from './test-chaos-function';

describe('chaosFunction simple unit-test', () => {
  it('1 => "Some important string" ', () => {
    expect(chaosFunction(1)).toContain('important');
  });

  xit(' it must be wrong test', () => {
    expect(chaosFunction(2)).toBe(true);
  });

  it(' 3 => toBeTruthy ', () => {
    expect(chaosFunction(3)).toBeTruthy();
  });

  it(' 4 =>  array contain "two" ', () => {
    expect(chaosFunction(4)).toContain('two');
  });

});
