jest.unmock('../lib/AudioClip');
import AudioClip from '../lib/AudioClip';


describe('AudioClip', () => {
  const myfilename = './fixtures/obama-wh-1984.m4a';
  let myclip = new AudioClip(myfilename)
  it('should be initialized with a filename', () => {
    expect(myclip.sourceFilename).toBe(myfilename);
  });

  it('should have a duration', () => {
    expect(myclip.duration).toBe(4.7);
  })
});
