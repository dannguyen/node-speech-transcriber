// https://github.com/request/request
// meh http://www.html5rocks.com/en/tutorials/es6/promises/
// heh https://davidwalsh.name/promises

import request from 'request';
export default function(url){
  return new Promise((resolve, reject) => {
    request.get(url, (err, response, body) => {
      if(err){
        reject("Oh crap: " + err);
      }
      else if(response.statusCode == 200) {
        resolve("Hooray: " + response.statusCode);
      }else{
        reject("Oh bother: " + response.statusCode);
      }
    })
  });
};
