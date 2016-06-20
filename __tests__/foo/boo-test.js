jest.unmock('request')
jest.unmock('../../lib/foo/boo');
import Boo from '../../lib/foo/boo';


describe('Booze', () => {
  let url = 'https://status.github.com/api/status.json';
  it('is ok', () => {
      expect(10).toEqual(10);
  });

  it('runs the promise',  () => {
    return Boo(url).then(val => expect(val).toEqual('Hooray: 200'));
  })
})
