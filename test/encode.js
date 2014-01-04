var i3p = require('../');
var should = require('should');

describe('i3p', function() {
  describe('#encode', function() {
    it('should return `Buffer`', function() {
      var b = i3p.encode();
      b.should.be.a.Buffer;
    });
  });
});
