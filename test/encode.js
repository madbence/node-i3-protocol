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
    it('should set the correct type for the message', function() {
      var b1 = i3p.encode(0);
      var b2 = i3p.encode(1);
      b1.readUInt32BE(10).should.equal(0);
      b2.readUInt32BE(10).should.equal(1);
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
