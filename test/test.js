var should = require('chai').should(),
    fs = require('fs'),
    categories = require('../src/categories');

describe('#categories()', function() {
    it('should return Science Fiction for a Science Fiction test text', function(done) {
        fs.readFile(__dirname + '/test-science-fiction.txt', function (err, article) {
            if (err) throw err;
            categories(article).should.include('Science Fiction');
            done();
        });
    });

    it('should return Fantasy for a Fantasy test text', function(done) {
        fs.readFile(__dirname + '/test-fantasy.txt', function (err, article) {
            if (err) throw err;
            categories(article).should.include('Fantasy');
            done();
        });
    });
});
