/*
 LEARN YOU THE NODE.JS FOR MUCH WIN!
-------------------------------------
 FILTERED LS
 Exercise 1 of 9

Create a program that prints a list of files in a given directory, filtered by t
he extension of the files. You will be provided a directory name as the first ar
gument to your program (e.g. '/path/to/dir/') and a file extension to filter by
as the second argument.

For example, if you get 'txt' as the second argument then you will need to filte
r the list to only files that end with .txt. Note that the second argument will
not come prefixed with a '.'.

The list of files should be printed to the console, one file per line. You must
use asynchronous I/O.

-------------------------------------------------------------------------------

## HINTS

The fs.readdir() method takes a pathname as its first argument and a callback as
 its second. The callback signature is:

    function callback (err, list) {  }

where list is an array of filename strings.

Documentation on the fs module can be found by pointing your browser here:
  file://C:\Users\Filipe Apolinário\AppData\Roaming\npm\node_modules\learnyounod
e\node_apidoc\fs.html

You may also find node's path module helpful, particularly the extname method.

Documentation on the path module can be found by pointing your browser here:
  file://C:\Users\Filipe Apolinário\AppData\Roaming\npm\node_modules\learnyounod
e\node_apidoc\path.html

-------------------------------------------------------------------------------

Create a program that prints a list of files in a given directory, filtered by t
he extension of the files. You will be provided a directory name as the first ar
gument to your program (e.g. '/path/to/dir/') and a file extension to filter by
as the second argument.

For example, if you get 'txt' as the second argument then you will need to filte
r the list to only files that end with .txt. Note that the second argument will
not come prefixed with a '.'.

The list of files should be printed to the console, one file per line. You must
use asynchronous I/O.

-------------------------------------------------------------------------------

## HINTS

The fs.readdir() method takes a pathname as its first argument and a callback as
 its second. The callback signature is:

    function callback (err, list) {  }

where list is an array of filename strings.

Documentation on the fs module can be found by pointing your browser here:
  file://C:\Users\Filipe Apolinário\AppData\Roaming\npm\node_modules\learnyounod
e\node_apidoc\fs.html

You may also find node's path module helpful, particularly the extname method.

Documentation on the path module can be found by pointing your browser here:
  file://C:\Users\Filipe Apolinário\AppData\Roaming\npm\node_modules\learnyounod
e\node_apidoc\path.html

-------------------------------------------------------------------------------
*/
(function main(){
	var fs = require('fs');
	var file = process.argv[2];
	var fileType = process.argv[3];
	
	fs.readdir(file, function(err,files){
		var numFiles = files.length - 1;
		files.forEach(function(file){
			if(file.indexOf('.' + fileType) > 0){
				console.log(file);
			}
		});
	});
	
})()

/*


v Submission results match expected
v Used asynchronous method: fs.readdir()

# PASS

Your solution to FILTERED LS passed!

Here's the official solution in case you want to compare notes:

--------------------------------------------------------------------------------

    var fs = require('fs')
    var path = require('path')

    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })

--------------------------------------------------------------------------------
*/