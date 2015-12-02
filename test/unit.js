var rs = require('../index.js');
var expect    = require("chai").expect;

describe('Response', function() {
  it('should exist', function() {
    expect(rs).to.be.an('object');
  });

  it('should generate a static response code', function() {
    var msg = rs.message(200);
    expect(msg.status.code).to.equal(200);
  });

  it('should generate a static response message', function() {
    var msg = rs.message(200);
    expect(msg.status.message).to.equal('Status OK!');
  });

  it('should generate dynamic data in response object', function() {
    var msg = rs.message(200, {message: "Hello World!"});
    expect(msg.data.message).to.equal('Hello World!');
  });

});
