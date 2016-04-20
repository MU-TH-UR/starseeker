var fs = require('fs'),
    glob = require("glob");

module.exports = function(path, done) {
    glob(path, function (err, files) {
        if (err) throw err;
        done([
        	{
        		'name': 'Science Fiction',
        		'files': files
        	},
        	{
        		'name': 'Fantasy',
        		'files': files
        	}
        ]);
    });
}
