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
aracters received from the server. The second line should con
tain the complete S
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

/*
This code passes but is synchronous:
(function main(){
	var http = require('http');
	var responseString = '';
	var urls = [process.argv[2],process.argv[3],process.argv[4]];
	//console.log('INFO:', process.argv);
	//console.log('INFO:', urls);
	var requestURLs = function(){
		if(urls.length == 0){
			return;
		}
		fetchDataFromURL(urls.shift(),requestURLs);
	}
	requestURLs();
})()  

function fetchDataFromURL(url,callback){
	var http = require('http');
	var responseString = '';
	http.get(url,function(response){
		response.on('data',function(data){
			responseString += data.toString();
		});
		response.on('error',function(data){
			console.log(data.toString());
		});
		response.on('end', function(){
			//console.log(responseString.length);
			console.log(responseString);
			
			callback();
		});
	});
}*/

//LETS TRY THE ASSYNCHRONOUS VERSION:

(function main(){
	var http = require('http');
	var urls = [process.argv[2],process.argv[3],process.argv[4]];
	var results = [];
	
	var handleResults = function(err,metadata){
		if(err){
			return;
		}
		results[metadata.index] = metadata.result;
		if(results.length < 3){
			return;
		}
		for(var i = 0; i < urls.length; i++){
			console.log(results[i]);
		}
	}
	
	for(var i = 0; i < urls.length; i++){
		fetchDataFromURL({index:i, url:urls[i], response:null},handleResults);
	}
})()  

function fetchDataFromURL(metadata,callback){
	var http = require('http');
	var responseString = '';
	http.get(metadata.url,function(response){
		response.on('data',function(data){
			responseString += data.toString();
		});
		response.on('error',function(error){
			console.log(error.toString());
		});
		response.on('end', function(){
			
			metadata.result = responseString;
			
			callback(null,metadata);
		});
	});
}


/*
Your submission results compared to the expected:

--------------------------------------------------------------------------------


1.  ACTUAL:    "She'll be right strewth mate you little ripper turps. Shazza got
 us some brass razoo my as stands out like arvo. Built like a plonk with stands
out like a paddock. "
1.  EXPECTED:  "She'll be right strewth mate you little ripper turps. Shazza got
 us some brass razoo my as stands out like arvo. Built like a plonk with stands
out like a paddock. "

2.  ACTUAL:    "As stands out like flick where lets throw a blow in the bag. Tre
nt from punchy plonk heaps shazza got us some veg out. Trent from punchy stonker
ed piece of piss he's got a massive bail up. Grab us a spit the dummy with stand
s out like a stubby. "
2.  EXPECTED:  "As stands out like flick where lets throw a blow in the bag. Tre
nt from punchy plonk heaps shazza got us some veg out. Trent from punchy stonker
ed piece of piss he's got a massive bail up. Grab us a spit the dummy with stand
s out like a stubby. "

3.  ACTUAL:    "As stands out like skite my you little ripper bloke. You little
ripper gyno when lets throw a bottle-o. As cunning as a barrack also as stands o
ut like coathanger. Grab us a mozzie mate built like a offsider. "
3.  EXPECTED:  "As stands out like skite my you little ripper bloke. You little
ripper gyno when lets throw a bottle-o. As cunning as a barrack also as stands o
ut like coathanger. Grab us a mozzie mate built like a offsider. "

4.  ACTUAL:    ""
4.  EXPECTED:  ""


--------------------------------------------------------------------------------


v Submission results match expected

# PASS

Your solution to JUGGLING ASYNC passed!

Here's the official solution in case you want to compare notes:

--------------------------------------------------------------------------------

    var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0

    function printResults () {
      for (var i = 0; i < 3; i++)
        console.log(results[i])
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(err)

          results[index] = data.toString()
          count++

          if (count == 3)
            printResults()
        }))
      })
    }

    for (var i = 0; i < 3; i++)
      httpGet(i)

--------------------------------------------------------------------------------
*/