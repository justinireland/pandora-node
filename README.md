# pandora-node
node.js module for Coolux Pandora's Box SDK

source: https://github.com/justinireland/pandora-node


## Installation
You will need a copy of Pandora's Box running in Manager mode with web server enabled.

```
npm install pandora-node
```

## Setup

```
var PB = require('pandora-node');
var options = {
    ip: '192.168.1.2', // IP address of the Pandora's Box server
    port: '6214'       // Pandora's Box Server port. Defaults to 6214 if none is specified.
}
var pb = new PB(options);
```

## Usage
See the API reference for a list of all methods.
https://github.com/justinireland/pandora-node/wiki/API-Reference

```
// Get the current Sequence time
pb.getSequenceTime(1, function(res){
    console.dir(res.bytes);
});

// Get the opacity level of device 1.2
pb.getParam(1,2,'Opacity',function(res){
    console.dir(res.bytes);
});
```

Results are returned in an object.
```
res {
    deliveredByteCt:    // 0
    bytes:              // byte array with encoded response
}
```

