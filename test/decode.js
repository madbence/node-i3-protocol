var i3p = require('../');
var should = require('should');

describe('i3p', function() {
  describe('#decode', function() {
    it('should return an object', function() {
      var o = i3p.decode(new Buffer('i3-ipc\x00\x00\x00\x00\x00\x00\x00\x00'));
      o.should.be.an.Object
    });
    it('should check the buffer for the magic prefix', function() {
      (function() {
        i3p.decode(new Buffer(1));
      }).should.throw();
      (function() {
        i3p.decode(new Buffer('i3-ipc\x00\x00\x00\x00\x00\x00\x00\x00'));
      }).should.not.throw();
    });
    it('should check for correct length field', function() {
      (function() {
        i3p.decode(new Buffer('i3-ipc\x00\x00\x00\x00'));
      }).should.throw();
      (function() {
        i3p.decode(new Buffer('i3-ipc\x00\x00\x00\x00\x00\x00\x00\x00bbbb'));
      }).should.throw();
      (function() {
        i3p.decode(new Buffer('i3-ipc\x00\x00\x00\x00\x00\x00\x00\x00'));
      }).should.not.throw();
    });
    it('should check for the correct type', function() {
      (function() {
        i3p.decode(new Buffer('i3-ipc\x00\x00\x00\x00\x08\x00\x00\x00'));
      }).should.throw();
      (function() {
        i3p.decode(new Buffer('i3-ipc\x00\x00\x00\x00\x01\x00\x00\x00'));
      }).should.not.throw();
    });
  });
});
