
(function main() {
  var request = require('request');
  var postStream = request.post('http://localhost:8099');
  process.stdin.pipe(postStream).pipe(process.stdout);
})()

/*

TAP version 13
# (anonymous)
ok 1 stream-adventure verify YOURFILE.js
ok 2 should be equal

1..2
# tests 2
# pass  2

# ok


@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@     YOUR SOLUTION IS CORRECT!     @@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



// Here's the reference solution:

  var http = require('http');
  var through = require('through2');

  var server = http.createServer(function (req, res) {
      if (req.method === 'POST') {
          req.pipe(through(function (buf, _, next) {
              this.push(buf.toString().toUpperCase());
              next();
          })).pipe(res);
      }
      else res.end('send me a POST\n');
  });
  server.listen(parseInt(process.argv[2]));  
  */