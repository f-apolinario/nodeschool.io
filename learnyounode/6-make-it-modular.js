/*
 LEARN YOU THE NODE.JS FOR MUCH WIN!
-------------------------------------
 MAKE IT MODULAR
 Exercise 1 of 8

This problem is the same as the previous but introduces the concept of modules.
You will need to create two files to solve this.

Create a program that prints a list of files in a given directory, filtered by t
he extension of the files. The first argument is the directory name and the seco
nd argument is the extension filter. Print the list of files (one file per line)
 to the console. You must use asynchronous I/O.

You must write a module file to do most of the work. The module must export a si
ngle function that takes three arguments: the directory name, the filename exten
sion string and a callback function, in that order. The filename extension argum
ent must be the same as what was passed to your program. Don't turn it into a Re
gExp or prefix with "." or do anything except pass it to your module where you c
an do what you need to make your filter work.

The callback function must be called using the idiomatic node(err, data) convent
ion. This convention stipulates that unless there's an error, the first argument
 passed to the callback will be null, and the second will be your data. In this
exercise, the data will be your filtered list of files, as an Array. If you rece
ive an error, e.g. from your call to  fs.readdir(), the callback must be called
with the error, and only the error, as the first argument.

You must not print directly to the console from your module file, only from your
 original program.

In the case of an error bubbling up to your original program file, simply check
for it and print an informative message to the console.

These four things are the contract that your module must follow.

  * Export a single function that takes exactly the arguments described.
  * Call the callback exactly once with an error or some data as described.
  * Don't change anything else, like global variables or stdout.
  * Handle all the errors that may occur and pass them to the callback.

The benefit of having a contract is that your module can be used by anyone who e
xpects this contract. So your module could be used by anyone else who does learn
younode, or the verifier, and just work.

-------------------------------------------------------------------------------

## HINTS

Create a new module by creating a new file that just contains your directory rea
ding and filtering function. To define a single function export, you assign your
 function to the module.exports object, overwriting what is already there:

    module.exports = function (args) {  }

Or you can use a named function and assign the name.

To use your new module in your original program file, use the require() call in
the same way that you require('fs') to load the fs module. The only difference i
s that for local modules must be prefixed with './'. So, if your file is named m
ymodule.js then:

    var mymodule = require('./mymodule.js')

The '.js' is optional here and you will often see it omitted.

You now have the module.exports object in your module assigned to the mymodule v
ariable. Since you are exporting a single function, mymodule is a function you c
an call!

Also keep in mind that it is idiomatic to check for errors and do early-returns
within callback functions:

    function bar (callback) {
      foo(function (err, data) {
        if (err)
          return callback(err) // early return

        // ... no error, continue doing cool things with `data`

        // all went well, call callback with `null` for the error argument

        callback(null, data)
      })
    }

-------------------------------------------------------------------------------
*/
(function main(){
	var module = require('./6-aux.js');
	var file = process.argv[2];
	var fileType = process.argv[3];
	
	var callback = function(err,files){
		if(err){
			return console.log('error: ', err);
		}
		var numFiles = files.length - 1;
		files.forEach(function(file){
							console.log(file);
						});
	}
	//console.log('starting file fetcher...'); 
	module(file,fileType,callback);
})()

/*
Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED

--------------------------------------------------------------------------------


   "CHANGELOG.md"                      ==    "CHANGELOG.md"

   "LICENCE.md"                        ==    "LICENCE.md"

   "README.md"                         ==    "README.md"

   ""                                  ==    ""


--------------------------------------------------------------------------------


v Submission results match expected
v Additional module file exports a single function
v Additional module file exports a function that takes 3 arguments
v Additional module file handles errors properly
v Additional module file handles callback argument
v Additional module file returned two arguments on the callback function
v Additional module file returned correct number of elements as the second argum
ent of the callback
v Additional module file correctly handles '.'-prefixed extension
v Additional module file returned correct number of elements as the second argum
ent of the callback
v Additional module file returned correct list of files as the second argument o
f the callback

# PASS

Your solution to MAKE IT MODULAR passed!

Here's the official solution in case you want to compare notes:

--------------------------------------------------------------------------------

solution.js:

    var filterFn = require('./solution_filter.js')
    var dir = process.argv[2]
    var filterStr = process.argv[3]

    filterFn(dir, filterStr, function (err, list) {
      if (err)
        return console.error('There was an error:', err)

      list.forEach(function (file) {
        console.log(file)
      })
    })

--------------------------------------------------------------------------------

solution_filter.js:

    var fs = require('fs')
    var path = require('path')

    module.exports = function (dir, filterStr, callback) {

      fs.readdir(dir, function (err, list) {
        if (err)
          return callback(err)

        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })

        callback(null, list)
      })
    }

--------------------------------------------------------------------------------


You have 2 challenges left.
Type 'learnyounode' to show the menu.
*/