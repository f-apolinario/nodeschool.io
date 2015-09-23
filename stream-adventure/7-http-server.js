
(function main() {
  var through = require('through2');
  var http = require('http');
  var port = process.argv[2];
  var server = http.createServer(function (req, res) {
    req.pipe(through(function (buffer, encoding, next) {
      this.push(buffer.toString().toUpperCase());
      next();
    })).pipe(res);
  });
  server.listen(port);
  //console.log('INFO: ', 'listening to port ' + port);
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