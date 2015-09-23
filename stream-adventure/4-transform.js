 function write (buffer, encoding, next) {
     this.push(buffer.toString().toUpperCase());
     next();
 }
 
 function end () {
    //done();
}

(function main(){
 var through = require('through2');
 var stream = through(write, end);
 process.stdin.pipe(stream).pipe(process.stdout);
})()

/*

TAP version 13
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



// Here is the reference solution:

  var through = require('through2');
  var tr = through(function (buf, _, next) {
      this.push(buf.toString().toUpperCase());
      next();
  });
  process.stdin.pipe(tr).pipe(process.stdout);
  
  */