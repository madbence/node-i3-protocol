module.exports.encode = function encode(type) {
  if(type == null) {
    throw new Error('Type cannot be empty');
  }
  return new Buffer(1);
};
