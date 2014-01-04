var i3p = require('./');
var net = require('net');
var exec = require('child_process').execFile;

exec('i3', ['--get-socketpath'], function(err, out) {
  if(err) {
    return console.error(err);
  }
  var s = net.connect({
    path: out.toString().trim()
  }, function() {
    s.on('data', function(data) {
      console.log(data.toString());
    });
    s.write(i3p.encode(7));
  });
});
