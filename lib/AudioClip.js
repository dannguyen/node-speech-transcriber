const probe = require('node-ffprobe');

export default class AudioClip{
  constructor(probeData){
    this.probeData = probeData;
    this.filepath = this.probeData.file;
    this.fileext = this.probeData.fileext;
    this.stream = this.probeData.streams[0];
    this.sample_rate = this.stream.sample_rate;
    this.codec = this.stream.codec_name;
    this.channels = this.stream.channels;
    this.duration = this.stream.duration;

  }

  static load(filename){
    return _asyncProbe(filename).then(data => {
      return new AudioClip(data);
    });
  }
}



let _asyncProbe = function(filename){
  return new Promise((resolve, reject) => {
    probe(filename, (err, probeData) => {
      if(err !== null){
        return reject(err);
      }else{
        resolve(probeData);
      }
    });
  });
}
