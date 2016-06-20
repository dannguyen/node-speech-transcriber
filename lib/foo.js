


function foo(a, b){
  let answer = 5;
  return answer;
}


class Doo{
  constructor(width=throwIfMissing(), height=throwIfMissing()){
    this.width = width * 5;
    this.height = height * 10;
  }
}

function throwIfMissing(){
  throw new Error("That ain't right!");
}







module.exports = {foo: foo, Doo: Doo};
