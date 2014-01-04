var i3p = require('../');
var should = require('should');

describe('i3p', function() {
  describe('#encode', function() {
    it('should return `Buffer`', function() {
      var b = i3p.encode(0);
      b.should.be.a.Buffer;
    });
    it('should return Buffer with i3-ipc prefix', function() {
      var b = i3p.encode(0);
      b.toString().should.startWith('i3-ipc');
    });
    it('should expect `type` parameter', function() {
      (function() {
        var b = i3p.encode(0);
      }).should.not.throw();
      (function() {
        var b = i3p.encode();
      }).should.throw();
    });
  });
});
