/**
 * Test defaults set in another file
 */
var describe = require('mocha').describe,
    it = require('mocha').it,
    expect = require('chai').expect;

var nock = require('nock');

// Load file that has defaults set in
require('./fixtures/set-defaults');

// Load request-defaults
var request = require('../');


describe('request-defaults wrapper', function() {
  it('should obey global timeout default set elsewhere', function(done) {
    nock('http://localhost').get('/test-1s-delay').once().reply(200, function(uri, req, done) {
      setTimeout(done, 1*1000);
    });
    
    request.get('http://localhost/test-1s-delay', function(err, request, body) {
      expect(err.code).to.equal('ETIMEDOUT');
      done();
    });
  });
});
