jest.disableAutomock()
import Goo from '../../lib/foo/goo';


describe('gooProbe', () => {
  const myfilename = './__tests__/fixtures/obama-wh-1984.m4a';
  it('hello filename', () => {
      expect(myfilename).toEqual(myfilename);
  });

  it('has the promised probe', () => {
    return Goo(myfilename).then(val => expect(val).toEqual(4.71));
  });

  it('awaits', async () => {
    const v = await Goo(myfilename)
    expect(v).toEqual(4.71);
  });
});
