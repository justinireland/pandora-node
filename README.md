# pandora-node
node.js module for Coolux Pandora's Box SDK

Also check out [node-pbwidget](https://github.com/justinireland/node-pbwidget) which allows you to run any widget command from node.js.

## Project Links
* [github](https://github.com/justinireland/pandora-node)
* [npm](https://www.npmjs.com/package/pandora-node)

## Requirements
* Pandora's Box Manager with web server enabled

## Installation

```
npm install pandora-node
```

## Setup

```
var PBAuto = require('pandora-node');
var options = {
    ip: '192.168.1.2', // IP address of the Pandora's Box server
    port: '6214'       // Pandora's Box Server port. Defaults to 6214 if none is specified.
}
var pb = new PBAuto(options);
```

## Usage
See the [API reference](https://github.com/justinireland/pandora-node/wiki/API-Reference) for a list of all methods.

### Examples
Get the current sequence time
```
pb.getSequenceTime(1, function(res){
    console.dir(res);
});
```
Returns
```
{ 
  success: true,
  code: 73,
  hours: 0,
  minutes: 1,
  seconds: 18,
  frames: 5 
}
```
Get the opacity level of device 1.2
```
pb.getParam(1,2,'Opacity',function(res){
    console.dir(res);
});
```
Returns
```
{ 
  success: true, 
  code: 79, 
  parameterValue: 255 
}
```
