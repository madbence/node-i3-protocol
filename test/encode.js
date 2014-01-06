var i3p = require('../');
var should = require('should');

describe('i3p', function() {
  describe('#encode', function() {
    it('should return `Buffer`', function() {
      var b = i3p.encode(0, '');
      b.should.be.a.Buffer;
    });
    it('should return Buffer with i3-ipc prefix', function() {
      var b = i3p.encode(0, '');
      b.toString().should.startWith('i3-ipc');
    });
    it('should return Buffer with correct length', function() {
      var b1 = i3p.encode(0, '');
      var b2 = i3p.encode(0, 'ab');
      b1.length.should.equal(14);
      b2.length.should.equal(16);
    });
    it('should set the correct message length', function() {
      var b1 = i3p.encode(0, '');
      var b2 = i3p.encode(0, 'ab');
      b1.readUInt32LE(6).should.equal(0);
      b2.readUInt32LE(6).should.equal(2);
    });
    it('should set the correct type for the message', function() {
      var b1 = i3p.encode(0, '');
      var b2 = i3p.encode(1, '');
      b1.readUInt32LE(10).should.equal(0);
      b2.readUInt32LE(10).should.equal(1);
    });
    it('should expect `type` parameter', function() {
      (function() {
        i3p.encode(0, '');
      }).should.not.throw();
      (function() {
        i3p.encode();
      }).should.throw();
    });
    it('should handle missing `message` parameter', function() {
      (function() {
        i3p.encode(0);
      }).should.not.throw();
    });
    it('should throw Error when type is unknown', function() {
      (function() {
        i3p.encode(-1);
      }).should.throw();
      (function() {
        i3p.encode(8);
      }).should.throw();
    });
    it('should encode message', function() {
      var b = i3p.encode(0, 'abc');
      b.slice(14).toString().should.equal('abc');
    });
  });
});
