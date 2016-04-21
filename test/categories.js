var should = require('chai').should(),
    fs = require('fs'),
    categories = require('../src/categories');

describe('#categories()', function() {
    it('should return Science Fiction for a Science Fiction test text', function(done) {
        categories(__dirname + '/test-science-fiction.txt', function(categorised) {
            categorised.should.include('Science Fiction');
            done();
        });
    });

    it('should return Fantasy for a Fantasy test text', function(done) {
        categories(__dirname + '/test-fantasy.txt', function(categorised) {
            categorised.should.include('Fantasy');
            done();
        });
    });

    it('should not return Fantasy for a Science Fiction test text', function(done) {
        categories(__dirname + '/test-fantasy.txt', function(categorised) {
            categorised.should.not.include('Science Fiction');
            done();
        });
    });

    it('should not return Science Fiction for a Fantasy test text', function(done) {
        categories(__dirname + '/test-science-fiction.txt', function(categorised) {
            categorised.should.not.include('Fantasy');
            done();
        });
    });

    it('should return roughly the same number of categories without any guidance', function(done) {
        var iterations = 5,
            attempts = [];

        for (var i = iterations; i >= 0; i--) {
            categories(__dirname + '/../data/gutenberg/**/*.epub', function(categorised) {
                attempts.push(categorised);
                if (attempts.length > iterations) {
                    completed_iterations();
                }
            });
        }

        function completed_iterations() {
            var smallest, biggest, difference;

            // sort by number of categories
            attempts.sort(function(a, b){
                return a.length - b.length;
            });

            smallest = attempts[0];
            biggest = attempts[attempts.length - 1];
            difference = Math.abs(smallest.length - biggest.length);
            difference.should.be.at.most(1);
            done();
        }
    });
});
