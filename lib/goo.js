import probe from 'node-ffprobe';
// http://stackoverflow.com/questions/22519784/how-do-i-convert-an-existing-callback-api-to-promises

export default function fooProbe(filename){
  let duration = -1;
  return new Promise(function(resolve, reject){
    probe(filename, function(err, probeData){
      if(err !== null){
        return reject(err);
      }else{
        duration = probeData.format.duration;
        resolve(duration);
      }
    });

  });
}
