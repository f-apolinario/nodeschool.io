module.exports = function fetchFiles(dirName,fileType,callback){
	var fs = require('fs');
	var result =[];
	//console.log('reading directory...');
	fs.readdir(dirName, function(err,files){
		if(err){
			console.log('error:' err);
			return callback(err);
		}
		var numFiles = files.length - 1;
		
		files.forEach(function(file){
			if(file.indexOf('.' + fileType) > 0){
				result.push(file);
			}
		});
		//console.log('found files ' + result);
		callback(null,result);
	});
}
