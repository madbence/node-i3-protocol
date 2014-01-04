node-i3-protocol [![Build Status](https://travis-ci.org/madbence/node-i3-protocol.png?branch=master)](https://travis-ci.org/madbence/node-i3-protocol)
================

encode&amp;decode i3 ipc messages

## Install

```
npm install i3-protocol
```

## Usage

### `.encode(type[, message])`

Encodes the given message. For available types, see [i3 IPC](http://i3wm.org/docs/ipc.html#_sending_messages_to_i3)

```js
var i3p = require('i3p');
var message = i3p.encode(7); // get version info
socket.write(message);
```
