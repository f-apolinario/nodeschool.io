/*
 HTTP COLLECT
 Exercise 1 of 6


 LEARN YOU THE NODE.JS FOR MUCH WIN!
-------------------------------------
 HTTP COLLECT
 Exercise 1 of 6

Write a program that performs an HTTP GET request to a URL provided to you as th
e first command-line argument. Collect all data from the server (not just the fi
rst "data" event) and then write two lines to the console (stdout).

The first line you write should just be an integer representing the number of ch
aracters received from the server. The second line should contain the complete S
tring of characters sent by the server.

-------------------------------------------------------------------------------

## HINTS

There are two approaches you can take to this problem:

1) Collect data across multiple "data" events and append the results together pr
ior to printing the output. Use the "end" event to determine when the stream is
finished and you can write the output.

2) Use a third-party package to abstract the difficulties involved in collecting
 an entire stream of data. Two different packages provide a useful API for solvi
ng this problem (there are likely more!): bl (Buffer List) and concat-stream; ta
ke your pick!

  <http://npm.im/bl>
  <http://npm.im/concat-stream>

To install a Node package, use the Node Package Manager npm. Simply type:

    $ npm install bl

And it will download and install the latest version of the package into a subdir
ectory named node_modules. Any package in this subdirectory under your main prog
ram file can be loaded with the require syntax without being prefixed by './':

    var bl = require('bl')

Node will first look in the core modules and then in the node_modules directory
where the package is located.

If you don't have an Internet connection, simply make a node_modules directory a
nd copy the entire directory for the package you want to use from inside the lea
rnyounode installation directory:

  file://C:\Users\Filipe Apolin�rio\AppData\Roaming\npm\node_modules\learnyounod
e\node_modules\bl
  file://C:\Users\Filipe Apolin�rio\AppData\Roaming\npm\node_modules\learnyounod
e\node_modules\concat-stream

Both bl and concat-stream can have a stream piped in to them and they will colle
ct the data for you. Once the stream has ended, a callback will be fired with th
e data:

    response.pipe(bl(function (err, data) {  }))
    // or
    response.pipe(concatStream(function (data) {  }))

Note that you will probably need to data.toString() to convert from a Buffer.

Documentation for both of these modules has been installed along with learnyouno
de on your system and you can read them by pointing your browser here:

  file://C:\Users\Filipe Apolin�rio\AppData\Roaming\npm\node_modules\learnyounod
e\docs\bl.html
  file://C:\Users\Filipe Apolin�rio\AppData\Roaming\npm\node_modules\learnyounod
e\docs\concat-stream.html

-------------------------------------------------------------------------------

Write a program that performs an HTTP GET request to a URL provided to you as th
e first command-line argument. Collect all data from the server (not just the fi
rst "data" event) and then write two lines to the console (stdout).

The first line you write should just be an integer representing the number of ch
aracters received from the server. The second line should contain the complete S
tring of characters sent by the server.

-------------------------------------------------------------------------------

## HINTS

There are two approaches you can take to this problem:

1) Collect data across multiple "data" events and append the results together pr
ior to printing the output. Use the "end" event to determine when the stream is
finished and you can write the output.

2) Use a third-party package to abstract the difficulties involved in collecting
 an entire stream of data. Two different packages provide a useful API for solvi
ng this problem (there are likely more!): bl (Buffer List) and concat-stream; ta
ke your pick!

  <http://npm.im/bl>
  <http://npm.im/concat-stream>

To install a Node package, use the Node Package Manager npm. Simply type:

    $ npm install bl

And it will download and install the latest version of the package into a subdir
ectory named node_modules. Any package in this subdirectory under your main prog
ram file can be loaded with the require syntax without being prefixed by './':

    var bl = require('bl')

Node will first look in the core modules and then in the node_modules directory
where the package is located.

If you don't have an Internet connection, simply make a node_modules directory a
nd copy the entire directory for the package you want to use from inside the lea
rnyounode installation directory:

  file://C:\Users\Filipe Apolin�rio\AppData\Roaming\npm\node_modules\learnyounod
e\node_modules\bl
  file://C:\Users\Filipe Apolin�rio\AppData\Roaming\npm\node_modules\learnyounod
e\node_modules\concat-stream

Both bl and concat-stream can have a stream piped in to them and they will colle
ct the data for you. Once the stream has ended, a callback will be fired with th
e data:

    response.pipe(bl(function (err, data) {  }))
    // or
    response.pipe(concatStream(function (data) {  }))

Note that you will probably need to data.toString() to convert from a Buffer.

Documentation for both of these modules has been installed along with learnyouno
de on your system and you can read them by pointing your browser here:

  file://C:\Users\Filipe Apolin�rio\AppData\Roaming\npm\node_modules\learnyounod
e\docs\bl.html
  file://C:\Users\Filipe Apolin�rio\AppData\Roaming\npm\node_modules\learnyounod
e\docs\concat-stream.html

-------------------------------------------------------------------------------
*/
(function main(){
	var http = require('http');
	var responseString = '';
	http.get(process.argv[2],function(response){
		response.on('data',function(data){
			responseString += data.toString();
		});
		response.on('error',function(data){
			console.log(data.toString());
		});
		response.on('end', function(){
			console.log(responseString.length);
			console.log(responseString);
			console.log();
		});
	});
})()

/*
Your submission results compared to the expected:

--------------------------------------------------------------------------------


1.  ACTUAL:    "428"
1.  EXPECTED:  "428"

2.  ACTUAL:    "Mad as a plonk bloody get a dog up ya bunyip. As stands out like
 freckle piece of piss flat out like a pot. We're going cab sav to she'll be rig
ht paddock. She'll be right top end heaps stands out like a apples. Gutful of ap
ples when she'll be right ropeable."
2.  EXPECTED:  "Mad as a plonk bloody get a dog up ya bunyip. As stands out like
 freckle piece of piss flat out like a pot. We're going cab sav to she'll be rig
ht paddock. She'll be right top end heaps stands out like a apples. Gutful of ap
ples when she'll be right ropeable."

3.  ACTUAL:    "He's got a massive aerial pingpong also as cross as a ironman. F
lat out like a dunny how you little ripper brisvegas. She'll be right thongs to
she'll be right bonzer. "
3.  EXPECTED:  "He's got a massive aerial pingpong also as cross as a ironman. F
lat out like a dunny how you little ripper brisvegas. She'll be right thongs to
she'll be right bonzer. "

4.  ACTUAL:    ""
4.  EXPECTED:  ""


--------------------------------------------------------------------------------


v Submission results match expected

# PASS

Your solution to HTTP COLLECT passed!

Here's the official solution in case you want to compare notes:

--------------------------------------------------------------------------------

    var http = require('http')
    var bl = require('bl')

    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })

--------------------------------------------------------------------------------
*/