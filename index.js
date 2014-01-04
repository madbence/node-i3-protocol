module.exports.encode = function encode(type, message) {
  if(type == null) {
    throw new Error('Type cannot be empty');
  }
  if(type > 7 || type < 0) {
    throw new Error('Unknown type ' + type);
  }
  message = message || '';
  var b = new Buffer(14 + message.length);
  b.write('i3-ipc');
  b.writeUInt32BE(message.length, 6);
  b.writeUInt32BE(type, 10);
  return b;
};
