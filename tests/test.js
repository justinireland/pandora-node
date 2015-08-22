var PBAuto = require('../index.js');

var pb = new PBAuto({ip: '192.168.0.6'});

//pb.activateDevice(1,400,function(res){console.dir(res);});
//pb.activateParam(1,1,'Opacity',function(res){console.dir(res);});
//pb.addContent('C:\coolux\content\Stock Assets\Testpattern\1920x1080\ColourBars.png',1,1,1,function(res){console.dir(res);});
//pb.addContentFolderFromLocalNode('C:\coolux\content\Stock Assets\Testpattern\1920x1080\'',function(res){console.dir(res);});
//pb.addContentFolderFromLocalNodeToFolder("C:\\coolux\\content\\Stock Assets\\Testpattern\\1920x1080\\",'',function(res){console.dir(res);});
//pb.getContentIsConsistent(1,1,function(res){console.log(res);});
//pb.getClipRemainingTime(1,1,1,function(res){console.log(res);});
pb.getParam(1,2,'Opacity',function(res){console.dir(res);});
//pb.getSequenceTime(1, function(res){console.log(res);});
//pb.getSequenceTransparency(1, function(res){console.dir(res);});
//pb.removeSequence(1,function(){});