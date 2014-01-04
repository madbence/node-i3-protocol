module.exports.encode = function encode(type) {
  if(type == null) {
    throw new Error('Type cannot be empty');
  }
  var b = new Buffer('i3-ipcxxxxyyyy');
  b.writeUInt32BE(type, 10);
  return b;
};
