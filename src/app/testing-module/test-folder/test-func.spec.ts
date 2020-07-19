import {moreThan10} from './test-func';

describe('moreThan10  simple unit-test', () => {

  it('true, if more than 10', () => {
    const result = moreThan10(11);
    expect(result).toBe(true);
  });

  it('false, if not more than 10', () => {
    const result = moreThan10(10);
    expect(result).toBe(false);
  });

});
