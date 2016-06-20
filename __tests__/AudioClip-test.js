jest.disableAutomock()
import AudioClip from '../lib/AudioClip';

describe('AudioClip.load', () => {
  const myfilename = './__tests__/fixtures/obama-wh-1984.m4a';
  it('should result in an AudioClip', async () => {
    let myclip = await AudioClip.load(myfilename);
    expect(myclip instanceof AudioClip).toBe(true);
  })
});

// todo make metadata its own fixture
describe('AudioClip', () => {
  const myfilename = './__tests__/fixtures/obama-wh-1984.m4a';
  let myclip = null;
  beforeEach(done => {
    AudioClip.load(myfilename).then(x => { myclip = x; done(); });
  });

  it('should have a duration', done => {
    expect(myclip.duration).toBe(4.806531);
    done();
  });

  it('should have a filepath', done => {
    expect(myclip.filepath).toBe(myfilename);
    done();
  });

  it('should have a codec', done => {
    expect(myclip.codec).toBe('aac');
    done();
  });
})
