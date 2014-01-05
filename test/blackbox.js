var i3p = require('../');
var should = require('should');

describe('ip3', function() {
  it('should correctly decode encoded message', function() {
    var message = { foo: 'bar' };
    var ret = i3p.decode(i3p.encode(3, message));
    ret.type.should.equal(3);
    JSON.stringify(ret.message).should.equal(JSON.stringify(message));
  });
});
