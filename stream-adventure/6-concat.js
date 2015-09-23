
(function main() {
    var concat = require('concat-stream');
    var through = require('through2');
    var stream = through(write);
    process.stdin.pipe(concat(function(buf){
      process.stdout.write(buf.toString().split('').reverse().join(''));
    }));
})()

/*TAP version 13
# (anonymous)
ok 1 stream-adventure verify YOURFILE.js
ok 2 should be equal
ok 3 successful exit code

1..3
# tests 3
# pass  3

# ok


@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@     YOUR SOLUTION IS CORRECT!     @@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



var through = require('through2');
var split = require('split');

var lineCount = 0;
var tr = through(function (buf, _, next) {
    var line = buf.toString();
    this.push(lineCount % 2 === 0
        ? line.toLowerCase() + '\n'
        : line.toUpperCase() + '\n'
    );
    lineCount ++;
    next();
});
process.stdin
    .pipe(split())
    .pipe(tr)
    .pipe(process.stdout)
;
*/