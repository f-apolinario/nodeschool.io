/*
 LEARN YOU THE NODE.JS FOR MUCH WIN!
-------------------------------------
 HTTP CLIENT
 Exercise 1 of 7

Write a program that performs an HTTP GET request to a URL provided to you as th
e first command-line argument. Write the String contents of each "data" event fr
om the response to a new line on the console (stdout).

-------------------------------------------------------------------------------

## HINTS

For this exercise you will need to use the http core module.

Documentation on the http module can be found by pointing your browser here:
  file://C:\Users\Filipe Apolinário\AppData\Roaming\npm\node_modules\learnyounod
e\node_apidoc\http.html

The http.get() method is a shortcut for simple GET requests, use it to simplify
your solution. The first argument to http.get() can be the URL you want to GET;
provide a callback as the second argument.

Unlike other callback functions, this one has the signature:

    function callback (response) { }

Where the response object is a Node Stream object. You can treat Node Streams as
 objects that emit events. The three events that are of most interest are: "data
", "error" and "end". You listen to an event like so:

    response.on("data", function (data) { })

The "data" event is emitted when a chunk of data is available and can be process
ed. The size of the chunk depends upon the underlying data source.

The response object / Stream that you get from http.get() also has a setEncoding
() method. If you call this method with "utf8", the "data" events will emit Stri
ngs rather than the standard Node Buffer objects which you have to explicitly co
nvert to Strings.

-------------------------------------------------------------------------------

Write a program that performs an HTTP GET request to a URL provided to you as th
e first command-line argument. Write the String contents of each "data" event fr
om the response to a new line on the console (stdout).

-------------------------------------------------------------------------------

## HINTS

For this exercise you will need to use the http core module.

Documentation on the http module can be found by pointing your browser here:
  file://C:\Users\Filipe Apolinário\AppData\Roaming\npm\node_modules\learnyounod
e\node_apidoc\http.html

The http.get() method is a shortcut for simple GET requests, use it to simplify
your solution. The first argument to http.get() can be the URL you want to GET;
provide a callback as the second argument.

Unlike other callback functions, this one has the signature:

    function callback (response) { }

Where the response object is a Node Stream object. You can treat Node Streams as
 objects that emit events. The three events that are of most interest are: "data
", "error" and "end". You listen to an event like so:

    response.on("data", function (data) { })

The "data" event is emitted when a chunk of data is available and can be process
ed. The size of the chunk depends upon the underlying data source.

The response object / Stream that you get from http.get() also has a setEncoding
() method. If you call this method with "utf8", the "data" events will emit Stri
ngs rather than the standard Node Buffer objects which you have to explicitly co
nvert to Strings.

-------------------------------------------------------------------------------
*/
(function main(){
	var http = require('http');
	
	http.get(process.argv[2], function(response){
										response.on("data",function(data){
											console.log(data.toString());
										});
									});
})()

/*
Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED

--------------------------------------------------------------------------------


   "Stoked"                            ==    "Stoked"

   "Buck's night"                      ==    "Buck's night"

   "Bogged"                            ==    "Bogged"

   "Spit the dummy"                    ==    "Spit the dummy"

   "Chook"                             ==    "Chook"

   "Galah"                             ==    "Galah"

   "Pav"                               ==    "Pav"

   "Trackie dacks"                     ==    "Trackie dacks"

   "Swag"                              ==    "Swag"

   "Cracker"                           ==    "Cracker"

   ""                                  ==    ""


--------------------------------------------------------------------------------


v Submission results match expected

# PASS

Your solution to HTTP CLIENT passed!

Here's the official solution in case you want to compare notes:

--------------------------------------------------------------------------------

    var http = require('http')

    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    })

--------------------------------------------------------------------------------


You've finished all the challenges! Hooray!

*/