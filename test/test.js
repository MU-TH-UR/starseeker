var should = require('chai').should(),
    fs = require('fs'),
    categories = require('../src/categories');

describe('#categories()', function() {
    it('should return Science Fiction for a Science Fiction test text', function() {
        var article = fs.readFile('test-science-fiction.txt');
        categories(article).should.include('Science Fiction');
    });
});
