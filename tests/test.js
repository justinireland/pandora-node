var PB = require('pb-node');

var pb = new PB({ip: '192.168.0.6'});

pb.getSequenceTime(1, function(res){
    console.log('getSequenceTime: ');
    console.dir(res.bytes);
});

pb.getParam(1,2,'Opacity',function(res){
    console.log('getParam (Opacity): ');
    console.dir(res.bytes);
});