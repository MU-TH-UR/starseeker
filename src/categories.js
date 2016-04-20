var fs = require('fs');

module.exports = function(file, done){
    fs.readFile(file, function (err, article) {
        if (err) throw err;
        done(['Science Fiction', 'Fantasy']);
    });
}
