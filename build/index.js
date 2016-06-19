"use strict";

var _marked = [helloWorld].map(regeneratorRuntime.mark);

function helloWorld() {
  var thereBeLight;
  return regeneratorRuntime.wrap(function helloWorld$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          thereBeLight = true;
          _context.next = 3;
          return "Is there light?";

        case 3:
          _context.next = 5;
          return thereBeLight;

        case 5:
          return _context.abrupt("return", "And so it was done");

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

var hey = helloWorld();

console.log(hey.next());
console.log(hey.next());
console.log(hey.next());
//# sourceMappingURL=index.js.map