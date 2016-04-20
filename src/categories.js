var fs = require('fs'),
    glob = require("glob");

module.exports = function(file, done){
    glob(file, function (err, files) {
        if (err) throw err;
        done(['Science Fiction', 'Fantasy']);
    });
}
