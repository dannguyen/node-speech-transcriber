jest.unmock('../../lib/foo/foo');
import {foo, Doo} from '../../lib/foo/foo';



describe('foo', () => {
  it('should be full of foo', () => {
    expect(foo(2, 2)).toBe(5);
  });
});

describe("Doo instantiation", () => {
  it('should require height and width', () => {
    expect(() => {new Doo(9)}).toThrow(new Error("That ain't right!"))
  });
});

describe("Doo's attributes", () => {
  let myDoo = new Doo(3, 7);
  it('should have quintiple width', () => {
    expect(myDoo.width).toBe(15);
  });

  it('should have deca height', () =>{
    expect(myDoo.height).toBe(70);
  });
});
