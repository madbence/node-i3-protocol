module.exports.encode = function encode(type, message) {
  if(type == null) {
    throw new Error('Type cannot be empty');
  }
  if(type > 7 || type < 0) {
    throw new Error('Unknown type ' + type);
  }
  message = message || '';
  var len = message.length;
  var b = new Buffer(14 + len);
  b.write('i3-ipc');
  b.writeUInt32LE(len, 6);
  b.writeUInt32LE(type, 10);
  return b;
};

exports.decode = function decode(buffer) {
  if(buffer.toString().slice(0, 6) !== 'i3-ipc') {
    throw new Error('`i3-ipc` prefix missing form the buffer');
  }
  return {};
};
