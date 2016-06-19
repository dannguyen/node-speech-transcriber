const probe = require('node-ffprobe');

export class AudioClip{
  constructor(filename){
    this.sourceFilename = filename;
    console.log("hello");
    let doFoo = (err, probedata) => {
      console.log("inside dofoo");
      this.data = probedata;
    }
    probe(this.sourceFilename, doFoo);
    setTimeout(doFoo, 0);

    this.duration = this.data.format.duration;
  }
}

export default AudioClip;
