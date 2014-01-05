node-i3-protocol [![Build Status](https://travis-ci.org/madbence/node-i3-protocol.png?branch=master)](https://travis-ci.org/madbence/node-i3-protocol)
================

encode&amp;decode i3 ipc messages

## Install

```
npm install i3-protocol
```

## Usage

### `.encode(type[, message])`

Encodes the given message. For available types, see [i3 IPC reference](http://i3wm.org/docs/ipc.html#_sending_messages_to_i3).

```js
var i3p = require('i3-protocol');
var message = i3p.encode(7); // get version info
socket.write(message);
```

### `.decode(buffer)`

Decodes the given buffer. See [i3 IPC reference](http://i3wm.org/docs/ipc.html#_receiving_replies_from_i3) for details.

```js
var i3p = require('i3-protocol');
var message = i3p.decode(buffer);
console.log(message.type); // message type
console.log(message.message); // JSON response
```

## License

MIT. See [LICENSE](https://github.com/madbence/node-i3-protocol/blob/master/LICENSE).

## Author

[@madbence](http://twitter.com/madbence) on Twitter
