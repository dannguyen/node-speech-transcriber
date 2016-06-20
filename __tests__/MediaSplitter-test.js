jest.disableAutomock()
import MediaSplitter from '../lib/MediaSplitter';




describe('MediaSplitter constructor', () => {
  it('should have a filename', () =>{
    const myfilename = './__tests__/fixtures/obama-wh-1984.m4a';
    expect(new MediaSplitter(myfilename).filename).toEqual(myfilename);
  })
})
