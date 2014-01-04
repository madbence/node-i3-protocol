module.exports.encode = function encode(type, message) {
  if(type == null) {
    throw new Error('Type cannot be empty');
  }
  var b = new Buffer(14 + message.length);
  b.write('i3-ipc');
  b.writeUInt32BE(type, 10);
  return b;
};
