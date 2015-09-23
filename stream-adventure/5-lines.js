
(function main(){
 var line_counter = 1;
 var write =  function (buffer, encoding, next) {
     var buffLines = buffer.toString().split('\n');
     for(var i = 0; i < buffLines.length - 1; i++){
         if( (line_counter + i) % 2 == 0){
            this.push(buffLines[i].toUpperCase() + '\n'); 
         }
         else this.push(buffLines[i].toLowerCase() + '\n');
     }
     line_counter += buffLines.length - 1;
     next();
 }
 var through = require('through2');
 var stream = through(write);
 process.stdin.pipe(stream).pipe(process.stdout);
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