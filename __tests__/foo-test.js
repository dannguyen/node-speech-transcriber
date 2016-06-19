jest.unmock('../lib/foo');

describe('foo', () => {
  it('should be full of foo', () => {
    const foo = require('../lib/foo');
    expect(foo(2, 2)).toBe(5);
  });
});
