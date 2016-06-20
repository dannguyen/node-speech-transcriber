// fun with node-fluent-ffmpeg
const ffmpeg = require('fluent-ffmpeg');


export default class MediaSplitter{
  constructor(filename){
    // todo: accept a file stream
    this.filename = filename;
  }

  split(duration, startFrom){
    // todo
  }

  findSilence(){
    //todo
  }
}



// let myPreset = command => {
//   command.size('240x?').on('progress', progress => {
//     console.log('Processing: ' + progress.currentKbps + ' done'));
//   }
// };

// ffmpeg(fpath).preset(myPreset).seek(40).duration(20).output('mom-40x20.mov').run()
