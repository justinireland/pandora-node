# pb-node
node.js module for Coolux Pandora's Box SDK

## Installation
npm install pb-node

You will need a copy of Pandora's Box running in Manager mode with web server enabled.

## Usage

,,,
=======
### Setup
```
var PB = require('pb-node');
var options = {
    ip: '192.168.1.2', // IP address of the Pandora's Box server
    port: // Pandora's Box Server port. Default 6214
}
var pb = new PB(options);
,,,

=======
```

### Examples

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

### SDK Commands
See the SDK documentation in the SDK/docs folder or the PB help file for a list of commands. Or take a look inside index.js.

Note that all commands take a callback as the last parameter as opposed to the first parameter in the official SDK.
