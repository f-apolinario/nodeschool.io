/*
 LEARN YOU THE NODE.JS FOR MUCH WIN!
─────────────────────────────────────
 HTTP UPPERCASERER
 Exercise 1 of 2

Write an HTTP server that receives only POST requests and converts incoming POST
 body characters to upper-case and returns it to the client.

Your server should listen on the port provided by the first argument to your pro
gram.

-------------------------------------------------------------------------------

## HINTS

While you're not restricted to using the streaming capabilities of the request a
nd response objects, it will be much easier if you do.

There are a number of different packages in npm that you can use to "transform"
stream data as it's passing through. For this exercise the through2-map package
offers the simplest API.

through2-map allows you to create a transform stream using only a single functio
n that takes a chunk of data and returns a chunk of data. It's designed to work
much like Array#map() but for streams:

    var map = require('through2-map')
    inStream.pipe(map(function (chunk) {
      return chunk.toString().split('').reverse().join('')
    })).pipe(outStream)

In the above example, the incoming data from inStream is converted to a String (
if it isn't already), the characters are reversed and the result is passed throu
gh to outStream. So we've made a chunk character reverser! Remember though that
the chunk size is determined up-stream and you have little control over it for i
ncoming data.

To install through2-map type:

    $ npm install through2-map

If you don't have an Internet connection, simply make a node_modules directory a
nd copy the entire directory for the module you want to use from inside the lear
nyounode installation directory:

  file://C:\Users\Filipe Apolinário\AppData\Roaming\npm\node_modules\learnyounod
e\node_modules\through2-map

Documentation for through2-map has been installed along with learnyounode on you
r system and you can read them by pointing your browser here:

  file://C:\Users\Filipe Apolinário\AppData\Roaming\npm\node_modules\learnyounod
e\docs\through2-map.html

-------------------------------------------------------------------------------

Write an HTTP server that receives only POST requests and converts incoming POST
 body characters to upper-case and returns it to the client.

Your server should listen on the port provided by the first argument to your pro
gram.

-------------------------------------------------------------------------------

## HINTS

While you're not restricted to using the streaming capabilities of the request a
nd response objects, it will be much easier if you do.

There are a number of different packages in npm that you can use to "transform"
stream data as it's passing through. For this exercise the through2-map package
offers the simplest API.

through2-map allows you to create a transform stream using only a single functio
n that takes a chunk of data and returns a chunk of data. It's designed to work
much like Array#map() but for streams:

    var map = require('through2-map')
    inStream.pipe(map(function (chunk) {
      return chunk.toString().split('').reverse().join('')
    })).pipe(outStream)

In the above example, the incoming data from inStream is converted to a String (
if it isn't already), the characters are reversed and the result is passed throu
gh to outStream. So we've made a chunk character reverser! Remember though that
the chunk size is determined up-stream and you have little control over it for i
ncoming data.

To install through2-map type:

    $ npm install through2-map

If you don't have an Internet connection, simply make a node_modules directory a
nd copy the entire directory for the module you want to use from inside the lear
nyounode installation directory:

  file://C:\Users\Filipe Apolinário\AppData\Roaming\npm\node_modules\learnyounod
e\node_modules\through2-map

Documentation for through2-map has been installed along with learnyounode on you
r system and you can read them by pointing your browser here:

  file://C:\Users\Filipe Apolinário\AppData\Roaming\npm\node_modules\learnyounod
e\docs\through2-map.html

-------------------------------------------------------------------------------
*/


(function main() {
  var http = require('http');
  var fs = require('fs');

  var server = http.createServer(function (req, response) {
    if (req.method != 'GET') {
      return response.end('send me a GET\n')
    }
    var urlModule = require('url');
    var url = urlModule.parse(req.url);
    //console.log('url:', a)
    
    //console.log('INFO:',time)
    //console.log('date:',new Date(time[1]).toString());
    var timeString = url.query.toString().split('iso=')[1];
    var timestamp = new Date(timeString);
    response.writeHead(200, {'Content-Type':'application/json'});
    if (url.pathname == '/api/parsetime') {
      response.end(
        '{'+ '"hour":' + timestamp.getHours() + ',' +
        '"minute":' + timestamp.getMinutes() + ',' +
        '"second":' + timestamp.getSeconds() +
        '}');
    }
    else if(url.pathname == '/api/unixtime'){
      response.end('{' + '"unixtime":'+ timestamp.getTime() + '}')
    }
  });
  
  //console.log('INFO: ', 'Listening to port ' + process.argv[2]);
  server.listen(process.argv[2]);
})()  


/*
Your submission results compared to the expected:

────────────────────────────────────────────────────────────────────────────────


1.  ACTUAL:    "{\"hour\":22,\"minute\":54,\"second\":42}"
1.  EXPECTED:  "{\"hour\":22,\"minute\":54,\"second\":42}"

2.  ACTUAL:    "{\"unixtime\":1442354082281}"
2.  EXPECTED:  "{\"unixtime\":1442354082281}"

3.  ACTUAL:    ""
3.  EXPECTED:  ""


────────────────────────────────────────────────────────────────────────────────


√ Submission results match expected

# PASS

Your solution to HTTP JSON API SERVER passed!

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────

    var http = require('http')
    var url = require('url')

    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }

    function unixtime (time) {
      return { unixtime : time.getTime() }
    }

    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result

      if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time)
      else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)

      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))

────────────────────────────────────────────────────────────────────────────────

*/