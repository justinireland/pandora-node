# pb-node
node.js module for Coolux Pandora's Box SDK

## Installation
npm install pb-node

You will need a copy of Pandora's Box running in Manager mode with web server enabled.

## Usage

```
var PB = require('pb-node');
var options = {
    ip: '192.168.1.2' // IP address of the Pandora's Box server
    port: // Pandora's Box Server port. Default 6214
}
var pb = new PB(options);
```

