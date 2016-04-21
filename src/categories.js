var fs = require('fs'),
    path = require('path'),
    glob = require("glob"),
    EPub = require("epub");

module.exports = function(file, return_categories) {
    glob(file, function(err, files) {
        if(err) throw err;

        // TODO: process all files once it's working for just 1
        // files.forEach(word_frequency);

        parse_file(files[0], word_frequency);

        function parse_file(file, finished_parsing) {
            if(path.extname(file) === ".epub") {
                var epub = new EPub(file);

                epub.on("end", epub_parsed);

                function epub_parsed() {
                    finished_parsing(epub.metadata.title);
                };

                epub.parse();
            } else {
                // TODO: parse other file types, bailing out for now
                return_categories(['Science Fiction', 'Fantasy']);
            }
        };

        function word_frequency(text) {
            console.log(text);
        }
    });
}
