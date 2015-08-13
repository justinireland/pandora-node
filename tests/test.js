var PB = require('../index.js');

var pb = new PB({ip: '192.168.0.6'});

pb.getSequenceTime(1, function(res){
    //console.dir(res);
});

pb.getParam(1,2,'Opacity',function(res){
    //console.dir(res);
});

//pb.removeSequence(1,function(){});