var http = require('http');

// Enumerations
var ParamKind = {
    None: 0,
    Opacity: 1,
    Mesh: 2,
    Media: 3,
    Opacity: 1,
    Mesh: 2,
    Media: 3,
    Inpoint: 4,
    Outpoint: 5,
    Transport: 6,
    XPos: 8,
    YPos: 9,
    ZPos: 10,
    XAngle: 11,
    YAngle: 12,
    ZAngle: 13,
    XScale: 14,
    YScale: 15,
    ZScale: 16,
    XAxis: 25,
    YAxis: 26,
    ZAxis: 27,
    XOffset: 29,
    YOffset: 30,
    Ksl: 32,
    Kslr: 33,
    Ksr: 34,
    Ksrr: 35,
    Kst: 36,
    Kstr: 37,
    Ksb: 38,
    Ksbr: 39,
    LinX: 40,
    LinY: 41,
    Sel: 42,
    Selc: 43,
    Ser: 44,
    Serc: 45,
    Set: 46,
    Setc: 47,
    Seb: 48,
    Sebc: 49,
    Volume: 50,
    X: 51,
    Z: 52,
    RoomSize: 53,
    Ambience: 54,
    Diffusion: 55,
    BlendMode: 56,
    FxHue: 57,
    FxSaturation: 58,
    FxBrightness: 59,
    MultiFxList: 60,
    VideoSpeed: 61,
    AudioPan: 62,
    RotPivotXPos: 63,
    RotPivotYPos: 64,
    RotPivotZPos: 65,
    ScalePivotXPos: 66,
    ScalePivotYPos: 67,
    ScalePivotZPos: 68,
    XRotSpeed: 69,
    YRotSpeed: 70,
    ZRotSpeed: 71,
    CamTargetXPos: 72,
    CamTargetYPos: 73,
    CamTargetZPos: 74,
    CamFov: 75,
    CamNearPlane: 76,
    CamFarPlane: 77,
    CamAspect: 78,
    CamZRoll: 79,
    CamPostBypass: 80,
    CamProjMode: 81,
    ParticleGravity: 82,
    ParticleSpawnRate: 83,
    ParticleSpeed: 84,
    ParticleTimeToLive: 85,
    ParticleWind: 86,
    ParticleWindPosX: 87,
    ParticleWindPosY: 88,
    ParticleWindPosZ: 89,
    ParticleWindRotX: 90,
    ParticleWindRotY: 91,
    ParticleWindRotZ: 92,
    ParticleEmitterType: 93,
    ParticleEmitterRadius: 94,
    ParticleEmitterRadiusOption: 95,
    ParticleMass: 96,
    ParticleEmissionAngle: 97,
    ParticleAlignment: 98,
    ParticleDrag: 99,
    ParticleEmissionRange: 100,
    CamState: 101,
    AudioVolume: 102,
    ParticleColor: 103,
    ParticleOpacity: 104,
    Selm: 105,
    Selmw: 106,
    Serm: 107,
    Sermw: 108,
    Setm: 109,
    Setmw: 110,
    Sebm: 111,
    Sebmw: 112,
    ParticleXScale: 113,
    ParticleYScale: 114,
    ParticleZScale: 115,
    PsOpacity: 116,
    ParticleRotationX: 117,
    ParticleRotationY: 118,
    ParticleRotationZ: 119,
    XRotMode: 120,
    YRotMode: 121,
    ZRotMode: 122,
    LightXPos: 123,
    LightYPos: 124,
    LightZPos: 125,
    LightTargetXPos: 126,
    LightTargetYPos: 127,
    LightTargetZPos: 128,
    LightAngle: 129,
    LightMedia: 130,
    LightIntensity: 131,
    LightColorRed: 132,
    LightColorGreen: 133,
    LightColorBlue: 134,
    LightAspect: 135,
    LightZRoll: 136,
    LightTolerance: 137,
    ShadowSoftness: 138,
    WidgetValue1: 140,
    WidgetValue2: 141,
    WidgetValue3: 142,
    WidgetValue4: 143,
    WidgetValue5: 144,
    WidgetValue6: 145,
    WidgetValue7: 146,
    WidgetValue8: 147,
    WidgetValue9: 148,
    WidgetValue10: 149,
    WidgetValue11: 150,
    WidgetValue12: 151,
    MatrixMix: 152,
    MatrixTexture: 153,
    MatrixPatch: 154,
    PointerLoopInPoint: 155,
    PointerOutDelay: 156,
    PointerOffsetX: 157,
    PointerOffsetY: 158,
    RtClearColorRed: 159,
    RtClearColorGreen: 160,
    RtClearColorBlue: 161,
    RtClearColorAlpha: 162,
    GenPerspTargetPt1X: 163,
    GenPerspTargetPt1Y: 164,
    GenPerspTargetPt1Z: 165,
    GenPerspTargetPt2X: 166,
    GenPerspTargetPt2Y: 167,
    GenPerspTargetPt2Z: 168,
    GenPerspTargetPt3X: 169,
    GenPerspTargetPt3Y: 170,
    GenPerspTargetPt3Z: 171,
    EngineGlobalParam: 172,
    BrowserUrl: 173,
    CameraPre: 174,
    LightProjMode: 175,
    DefaultMeshShadingWireRed: 176,
    DefaultMeshShadingWireGreen: 177,
    DefaultMeshShadingWireBlue: 178,
    DefaultMeshShadingWireAlpha: 179,
    DefaultMeshShadingFillRed: 180,
    DefaultMeshShadingFillGreen: 181,
    DefaultMeshShadingFillBlue: 182,
    DefaultMeshShadingFillAlpha: 183,
    DefaultMeshShadingWireWidth: 184,
    DefaultMeshShadingAmbient: 185,
    DefaultMeshShadingDiffuse: 186,
    DefaultMeshShadingSpecular: 187,
    DefaultMeshShadingShininess: 188,
    DefaultMeshShadingWireBrightnessFactor: 189,
    Inpoint: 4,
    Outpoint: 5,
    Transport: 6,
    XPos: 8,
    YPos: 9,
    ZPos: 10,
    XAngle: 11,
    YAngle: 12,
    ZAngle: 13,
    XScale: 14,
    YScale: 15,
    ZScale: 16,
    XAxis: 25,
    YAxis: 26,
    ZAxis: 27,
    XOffset: 29,
    YOffset: 30,
    Ksl: 32,
    Kslr: 33,
    Ksr: 34,
    Ksrr: 35,
    Kst: 36,
    Kstr: 37,
    Ksb: 38,
    Ksbr: 39,
    LinX: 40,
    LinY: 41,
    Sel: 42,
    Selc: 43,
    Ser: 44,
    Serc: 45,
    Set: 46,
    Setc: 47,
    Seb: 48,
    Sebc: 49,
    Volume: 50,
    X: 51,
    Z: 52,
    RoomSize: 53,
    Ambience: 54,
    Diffusion: 55,
    BlendMode: 56,
    FxHue: 57,
    FxSaturation: 58,
    FxBrightness: 59,
    MultiFxList: 60,
    VideoSpeed: 61,
    AudioPan: 62,
    RotPivotXPos: 63,
    RotPivotYPos: 64,
    RotPivotZPos: 65,
    ScalePivotXPos: 66,
    ScalePivotYPos: 67,
    ScalePivotZPos: 68,
    XRotSpeed: 69,
    YRotSpeed: 70,
    ZRotSpeed: 71,
    CamTargetXPos: 72,
    CamTargetYPos: 73,
    CamTargetZPos: 74,
    CamFov: 75,
    CamNearPlane: 76,
    CamFarPlane: 77,
    CamAspect: 78,
    CamZRoll: 79,
    CamPostBypass: 80,
    CamProjMode: 81,
    ParticleGravity: 82,
    ParticleSpawnRate: 83,
    ParticleSpeed: 84,
    ParticleTimeToLive: 85,
    ParticleWind: 86,
    ParticleWindPosX: 87,
    ParticleWindPosY: 88,
    ParticleWindPosZ: 89,
    ParticleWindRotX: 90,
    ParticleWindRotY: 91,
    ParticleWindRotZ: 92,
    ParticleEmitterType: 93,
    ParticleEmitterRadius: 94,
    ParticleEmitterRadiusOption: 95,
    ParticleMass: 96,
    ParticleEmissionAngle: 97,
    ParticleAlignment: 98,
    ParticleDrag: 99,
    ParticleEmissionRange: 100,
    CamState: 101,
    AudioVolume: 102,
    ParticleColor: 103,
    ParticleOpacity: 104,
    Selm: 105,
    Selmw: 106,
    Serm: 107,
    Sermw: 108,
    Setm: 109,
    Setmw: 110,
    Sebm: 111,
    Sebmw: 112,
    ParticleXScale: 113,
    ParticleYScale: 114,
    ParticleZScale: 115,
    PsOpacity: 116,
    ParticleRotationX: 117,
    ParticleRotationY: 118,
    ParticleRotationZ: 119,
    XRotMode: 120,
    YRotMode: 121,
    ZRotMode: 122,
    LightXPos: 123,
    LightYPos: 124,
    LightZPos: 125,
    LightTargetXPos: 126,
    LightTargetYPos: 127,
    LightTargetZPos: 128,
    LightAngle: 129,
    LightMedia: 130,
    LightIntensity: 131,
    LightColorRed: 132,
    LightColorGreen: 133,
    LightColorBlue: 134,
    LightAspect: 135,
    LightZRoll: 136,
    LightTolerance: 137,
    ShadowSoftness: 138,
    WidgetValue1: 140,
    WidgetValue2: 141,
    WidgetValue3: 142,
    WidgetValue4: 143,
    WidgetValue5: 144,
    WidgetValue6: 145,
    WidgetValue7: 146,
    WidgetValue8: 147,
    WidgetValue9: 148,
    WidgetValue10: 149,
    WidgetValue11: 150,
    WidgetValue12: 151,
    MatrixMix: 152,
    MatrixTexture: 153,
    MatrixPatch: 154,
    PointerLoopInPoint: 155,
    PointerOutDelay: 156,
    PointerOffsetX: 157,
    PointerOffsetY: 158,
    RtClearColorRed: 159,
    RtClearColorGreen: 160,
    RtClearColorBlue: 161,
    RtClearColorAlpha: 162,
    GenPerspTargetPt1X: 163,
    GenPerspTargetPt1Y: 164,
    GenPerspTargetPt1Z: 165,
    GenPerspTargetPt2X: 166,
    GenPerspTargetPt2Y: 167,
    GenPerspTargetPt2Z: 168,
    GenPerspTargetPt3X: 169,
    GenPerspTargetPt3Y: 170,
    GenPerspTargetPt3Z: 171,
    EngineGlobalParam: 172,
    BrowserUrl: 173,
    CameraPre: 174,
    LightProjMode: 175,
    DefaultMeshShadingWireRed: 176,
    DefaultMeshShadingWireGreen: 177,
    DefaultMeshShadingWireBlue: 178,
    DefaultMeshShadingWireAlpha: 179,
    DefaultMeshShadingFillRed: 180,
    DefaultMeshShadingFillGreen: 181,
    DefaultMeshShadingFillBlue: 182,
    DefaultMeshShadingFillAlpha: 183,
    DefaultMeshShadingWireWidth: 184,
    DefaultMeshShadingAmbient: 185,
    DefaultMeshShadingDiffuse: 186,
    DefaultMeshShadingSpecular: 187,
    DefaultMeshShadingShininess: 188,
    DefaultMeshShadingWireBrightnessFactor: 189
};
var ClxHardware = {
    FaderExtension: 0,
    JogShuttle: 1
};
var Consistency = {
    Inconsistent: 1,
    Consistent: 0
};
var SelectionMode = {
    SetSelection: 0,
    AddSelection: 1,
    Unselect: 2,
    UnselectAll: 3
};
var WatchFolderProperty = {
    IncludeSubdirectories: 1,
    DeleteInProject: 2,
    DeleteInClients: 3
};
var TransportMode = {
    Play: 1,
    Pause: 3,
    Stop: 2
};
var SequenceSmpteMode = {
    None: 0,
    Send: 1,
    Receive: 2
};
var SequenceSmpteStopMode = {
    None: 0,
    Stop: 1,
    Pause: 2,
    Continue: 3
};

function runCB(cb,data){
    // Call function for object?
    if(cb[0] instanceof Array) {
        (cb[0][0][cb[0][1]]).apply(cb[0][0],[data]);
    }
    else {
        // Call function directly?
        if(typeof(cb[0]) == "function"){
            cb[0](data);
        }
    }
}
function sendToPb(cb, cmdBytes){
    var rawBytes = Base64.encode(cmdBytes.getRawBytes());

    var options = {
        host: pbHost,
        port: pbPort,
        path: '/',
        method: 'PBAUTO',
        form: cmdBytes,
        headers: {
            'User-Agent': 'Coolux PHP Script/1.0',
            'Content-Length': rawBytes.length,
            'Accept': 'text/html',
            'Content-Type': 'text/plain; charset=UTF-8',
            'Connection': 'keep-alive'
        }
    };

    // Prepare callback object
    var data = new Object();

    // Make HTTP request
    var req = http.request(options, function(res) {

        res.setEncoding('utf8');

        res.on('data', function(pbResponse) {

            data["success"] = true;
            var util = new PbUtilBytesHost(Base64.decode(pbResponse));

            // Parse response
            data["code"] = util.getNextAsShort();
            data["success"] = data["success"] && data["code"] > 0;

            for(var i = 1; i < cb.length; i++) {
                var fn = util["getNextAs" + cb[i]["type"]];
                data[cb[i]["name"]] = fn.apply(util);
            }

            runCB(cb,data);
        });

    });

    // Error event
    req.on('error', function(e) {
        data["success"] = false;
        data["code"] = -99;
        console.log(e);
        runCB(cb,data);
    });

    // Send data
    req.write(rawBytes);

    // Close connection
    req.end();
}

// Base64 encoding helper
var Base64 = {

    // private property
    _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

    // public method for encoding
    encode : function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;

        while (i < input.length) {

            chr1 = input[i++];
            chr2 = input[i++];
            chr3 = input[i++];

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }

            output = output +
            this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
            this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

        }

        return output;
    },

    // public method for decoding
    decode : function (input) {
        var output = new Array();
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;

        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        while (i < input.length) {

            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output.push(chr1);

            if (enc3 != 64) {
                output.push(chr2);
            }
            if (enc4 != 64) {
                output.push(chr3);
            }

        }
        return output;
    }
};

var PBU_BYTES_MIN_SHORT = -Math.pow(2, 15);
var PBU_BYTES_MAX_SHORT = (PBU_BYTES_MIN_SHORT * -1) -1;
var PBU_BYTES_MIN_INT = -Math.pow(2, 31);
var PBU_BYTES_MAX_INT = (PBU_BYTES_MIN_INT * -1) -1;
var PBU_BYTES_MAX_DOUBLE_EXP = (1<<11)-1;
var PBU_BYTES_DOUBLE_EXP_BIAS = (PBU_BYTES_MAX_DOUBLE_EXP) >> 1;

// Binary data helper
function PBUtilBytesNetwork(){
    this.bytes = new Array();
}
PBUtilBytesNetwork.prototype.addBool = function (val){
    if(val)
    {
        this.bytes.push(1);
    }
    else
    {
        this.bytes.push(0);
    }
}
PBUtilBytesNetwork.prototype.addByte = function (val){
    if(val === true) val = 1;
    if(val === false) val = 0;
    if(val < 0)
    {
        val = 0;
    }
    else if(val > 0xFF)
    {
        val = 0xFF;
    }
    this.bytes.push(val);
}
PBUtilBytesNetwork.prototype.addShort = function (val){
    if(val < PBU_BYTES_MIN_SHORT)
    {
        val = PBU_BYTES_MIN_SHORT;
    }
    else
    {
        if(val > PBU_BYTES_MAX_SHORT)
        {
            val = PBU_BYTES_MAX_SHORT;
        }
    }
    var oldLength = this.bytes.length;
    for(var i = 1; i >= 0; i--)
    {
        this.bytes[oldLength+i] = val & 0xff;
        val >>= 8;
    }
}
PBUtilBytesNetwork.prototype.addInt = function (val){
    if(val < PBU_BYTES_MIN_INT)
    {
        val = PBU_BYTES_MIN_INT;
    }
    else
    {
        if(val > PBU_BYTES_MAX_INT)
        {
            val = PBU_BYTES_MAX_INT;
        }
    }
    var oldLength = this.bytes.length;
    for(var i = 3; i >= 0; i--)
    {
        this.bytes[oldLength+i] = val & 0xff;
        val >>= 8;
    }
}
PBUtilBytesNetwork.prototype.addDouble = function (val){
    var e, m, c;
    var s = val < 0 ? 1:0;
    val = Math.abs(val);
    if(isNaN(val) || (val == Infinity))
    {
        m = isNaN(val)?1:0;
        e = PBU_BYTES_MAX_DOUBLE_EXP;
    }
    else
    {
        e = Math.floor(Math.log(val)/Math.LN2);
        if(val*(c = Math.pow(2, -e)) < 1)
        {
            e--;
            c*=2;
        }

        if(val * c >= 2)
        {
            e++; c/=2;
        }

        if(e + PBU_BYTES_DOUBLE_EXP_BIAS >= PBU_BYTES_MAX_DOUBLE_EXP)
        {
            // overflow
            m = 0;
            e = PBU_BYTES_MAX_DOUBLE_EXP;
        }
        else if(e + PBU_BYTES_DOUBLE_EXP_BIAS >= 1)
        {
            m = (val*c-1)*Math.pow(2, 52);
            e = e + PBU_BYTES_DOUBLE_EXP_BIAS;
        }
        else
        {
            m = val*Math.pow(2, PBU_BYTES_DOUBLE_EXP_BIAS-1)*Math.pow(2, 52);
            e = 0;
        }
    }

    var oldLength = this.bytes.length;
    var mLen = 52;
    var i = 0;
    for(i = 0; mLen >= 8; mLen-=8)
    {
        this.bytes[oldLength+i] = m & 0xff;
        i++;
        m /= 256;
    }

    var eLen = 11 + mLen;
    for(e = (e << mLen)|m; eLen > 0; eLen-=8)
    {
        this.bytes[oldLength+i] = e & 0xff;
        i++;
        e /= 256;
    }
    this.bytes[oldLength+i-1] |= s*128;
}
PBUtilBytesNetwork.prototype.addStringNarrow = function (val) {
    var strLength = val.length;
    this.addShort(strLength);
    var oldLength = this.bytes.length;
    for(var i = 0; i < strLength; i++)
    {
        this.bytes[oldLength+i] = val.charCodeAt(i);
    }
}
PBUtilBytesNetwork.prototype.addStringWide = function (val) {
    var strLength = val.length;
    this.addShort(strLength);
    for(var i = 0; i < strLength; i++)
    {
        this.addShort(val.charCodeAt(i));
    }
}
PBUtilBytesNetwork.prototype.addByteBuffer = function (val){
    var bufferLength = val.length;
    this.addInt(bufferLength);
    for(var i = 0; i < bufferLength; i++)
    {
        this.bytes.push(val[i]);
    }
}
PBUtilBytesNetwork.prototype.getRawBytes = function (){
    return this.bytes;
}
PBUtilBytesNetwork.prototype.printOutBytes = function (){
    var i = 0;
    while(i < this.bytes.length)
    {
        console.log(this.bytes[i++]);
    }
    return this.bytes;
}

function PbUtilBytesHost(rawNetworkBytes){
    this.deliveredByteCt = 0;
    this.bytes = rawNetworkBytes.slice(0, rawNetworkBytes.length);
}
PbUtilBytesHost.prototype.getNextAsBoolean = function (){
    var val = this.bytes[this.deliveredByteCt];
    this.deliveredByteCt++;
    if(val === 1)
    {
        return true;
    }
    return false;
}
PbUtilBytesHost.prototype.getNextAsByte = function (){
    var val = this.bytes[this.deliveredByteCt];
    this.deliveredByteCt++;
    return val;
}
PbUtilBytesHost.prototype.getNextAsShort = function (){
    var val = 0;
    var factor = 1;
    for(var i = 1; i >= 0; i--)
    {
        val += this.bytes[this.deliveredByteCt+i] * factor;
        factor *= 256;
    }

    if(val & (-PBU_BYTES_MIN_SHORT))
    {
        val += PBU_BYTES_MIN_SHORT * 2;
    }

    this.deliveredByteCt += 2;
    return val;
}
PbUtilBytesHost.prototype.getNextAsInt = function (){
    var val = 0;
    var factor = 1;
    for(var i = 3; i >= 0; i--)
    {
        val += this.bytes[this.deliveredByteCt+i] * factor;
        factor *= 256;
    }

    if(val & (-PBU_BYTES_MIN_INT))
    {
        val += PBU_BYTES_MIN_INT * 2;
    }

    this.deliveredByteCt += 4;
    return val;
}
PbUtilBytesHost.prototype.getNextAsDouble = function (){
    var val = 0;
    var i = 7;
    var s = this.bytes[this.deliveredByteCt+i];
    i--;
    var nBits = -7;
    var e = s&((1<<(7))-1);
    s >>= 7;
    for(nBits = 4; nBits > 0; nBits-=8)
    {
        e = e * 256 + this.bytes[this.deliveredByteCt+i];
        i--;
    }

    var m = e & ((1<<(-nBits))-1);
    e >>= (-nBits);
    for(nBits += 52; nBits > 0; nBits-=8)
    {
        m = m * 256 + this.bytes[this.deliveredByteCt+i];
        i--;
    }

    switch (e)
    {
        case 0:
            e = 1-PBU_BYTES_DOUBLE_EXP_BIAS;
            break;
        case PBU_BYTES_MAX_DOUBLE_EXP:
            val = m?NaN:((s?-1:1)*Infinity);
            this.deliveredByteCt += 8;
            return val;
        default:
            m = m + Math.pow(2, 52);
            e = e - PBU_BYTES_DOUBLE_EXP_BIAS;
            break;
    }
    val = (s?-1:1) * m * Math.pow(2, e-52);
    this.deliveredByteCt += 8;
    return val;
}
PbUtilBytesHost.prototype.getNextAsStringNarrow = function (){
    var strLength = this.getNextAsShort();
    var val = new Array();
    for(var i = 0; i < strLength; i++)
    {
        val[i] = String.fromCharCode(this.bytes[this.deliveredByteCt]);
        this.deliveredByteCt++;
    }
    return val.join('');
}
PbUtilBytesHost.prototype.getNextAsStringWide = function (){
    var strLength = this.getNextAsShort();
    var val = new Array();
    for(var i = 0; i < strLength; i++)
    {
        val[i] = String.fromCharCode(this.getNextAsShort());
    }
    return val.join('');
}
PbUtilBytesHost.prototype.getNextAsByteBuffer = function (){
    var bufferLength = this.getNextAsInt();
    var val = new Array();
    for(var i = 0; i < bufferLength; i++)
    {
        val[i] = this.bytes[this.deliveredByteCt];
        this.deliveredByteCt++;
    }
    return val;
}

function testPbUtilBytes(){
    var cmdBytes = new PBUtilBytesNetwork();
    cmdBytes.addByte(34);
    cmdBytes.addShort(-22567);
    cmdBytes.addInt(-2345689);
    cmdBytes.addDouble(-789897994.56784);
    cmdBytes.addStringNarrow("this is a narrow string");
    cmdBytes.addStringWide("this is a wide string");
    cmdBytes.addBoolean(true);
    cmdBytes.addBoolean(false);

    var moreBytes = new Array();
    moreBytes.push(170);
    moreBytes.push(187);
    moreBytes.push(204);
    moreBytes.push(221);
    moreBytes.push(238);
    moreBytes.push(255);
    cmdBytes.addByteBuffer(moreBytes);

    var responseBytes = new PbUtilBytesHost(cmdBytes.getRawBytes());
    var responseVal = 0;
    responseVal = responseBytes.getNextAsByte();
    responseVal = responseBytes.getNextAsShort();
    responseVal = responseBytes.getNextAsInt();
    responseVal = responseBytes.getNextAsDouble();
    responseVal = responseBytes.getNextAsStringNarrow();
    responseVal = responseBytes.getNextAsStringWide();
    responseVal = responseBytes.getNextAsBoolean();
    responseVal = responseBytes.getNextAsBoolean();
    responseVal = responseBytes.getNextAsByteBuffer();
    var z = 0;
}

function PBAuto(options) {
    pbHost =  options.ip; // IP Address of PB Server
    pbPort = typeof options.port !== 'undefined' ? options.port : 6214; // PB Web server port. Default 6214
}

// Alphabetized
PBAuto.prototype.addContentFolderFromLocalNodeToTreeItem = function(folderPath, treeItemIndex, dmxFolderId, dmxFileId, callback){
    /*
     ** addContentFolderFromLocalNodeToTreeItem(folderPath, treeItemIndex, dmxFolderId, dmxFileId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow folderPath
     **  A Windows-Styled path to a folder. (&quot;C:\coolux\content\sample_folder&quot;)
     ** Int treeItemIndex
     **  TreeItemIDs are counted from top to bottom in the project tree. Nesting has no
     **  influence on counting order. The first item is 0 (always the project root
     **  folder)
     ** Short dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Short dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(155);
    message.addStringNarrow(folderPath);
    message.addInt(treeItemIndex);
    message.addShort(dmxFolderId);
    message.addShort(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.addContentFromFolder = function(folderPath, siteId, dmxFolderId, dmxFileId, projectPath, callback){
    /*
     ** addContentFromFolder(folderPath, siteId, dmxFolderId, dmxFileId, projectPath, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringWide folderPath
     **  A Windows-Styled path to a folder. (&quot;C:\coolux\content\sample_folder&quot;)
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     ** StringWide projectPath
     **  A path in the project. leave blank for the root folder. Subfolders are separated
     **  by a forward slash, no terminating slash is allowed.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(124);
    message.addStringWide(folderPath);
    message.addInt(siteId);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addStringWide(projectPath);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.addContentFromLocalNode = function(filePath, dmxFolderId, dmxFileId, callback){
    /*
     ** addContentFromLocalNode(filePath, dmxFolderId, dmxFileId, callback, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow filePath
     **  A Windows-Styled path to a file. (&quot;C:\coolux\content\sample\video.mpv&quot;)
     ** Short dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Short dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(63);
    message.addStringNarrow(filePath);
    message.addShort(dmxFolderId);
    message.addShort(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.addContentFromLocalNodeToPath = function(filePath, projectPath, dmxFolderId, dmxFileId, callback){
    /*
     ** addContentFromLocalNodeToPath(filePath, projectPath, dmxFolderId, dmxFileId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow filePath
     **  A Windows-Styled path to a file. (&quot;C:\coolux\content\sample\video.mpv&quot;)
     ** StringNarrow projectPath
     **  A path in the project tab. (&quot;somefolder/otherfolder&quot;) Leave empty for root
     **  directory.
     ** Short dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Short dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(135);
    message.addStringNarrow(filePath);
    message.addStringNarrow(projectPath);
    message.addShort(dmxFolderId);
    message.addShort(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.addContentFromLocalNodeToTreeItem = function(filePath, treeItemIndex, dmxFolderId, dmxFileId, callback){
    /*
     ** addContentFromLocalNodeToTreeItem(filePath, treeItemIndex, dmxFolderId, dmxFileId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow filePath
     **  A Windows-Styled path to a file. (&quot;C:\coolux\content\sample\video.mpv&quot;)
     ** Int treeItemIndex
     **  TreeItemIDs are counted from top to bottom in the project tree. Nesting has no
     **  influence on counting order. The first item is 0 (always the project root
     **  folder)
     ** Short dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Short dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(154);
    message.addStringNarrow(filePath);
    message.addInt(treeItemIndex);
    message.addShort(dmxFolderId);
    message.addShort(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.addContentFromLocalNodeFolder = function(folderPath, dmxFolderId, dmxFileId, callback){
    /*
     ** addContentFromLocalNodeFolder(folderPath, dmxFolderId, dmxFileId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringWide folderPath
     **  A Windows-Styled path to a folder. (&quot;C:\coolux\content\sample_folder&quot;)
     ** Short dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Short dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(133);
    message.addStringWide(folderPath);
    message.addShort(dmxFolderId);
    message.addShort(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.addContentFromLocalNodeFolderToPath = function(folderPath, projectPath, dmxFolderId, dmxFileId, callback){
    /*
     ** addContentFromLocalNodeFolderToPath(folderPath, projectPath, dmxFolderId, dmxFileId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow folderPath
     **  A Windows-Styled path to a folder. (&quot;C:\coolux\content\sample_folder&quot;)
     ** StringNarrow projectPath
     **  A path in the project tab. (&quot;somefolder/otherfolder&quot;) Leave empty for root
     **  directory.
     ** Short dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Short dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(134);
    message.addStringNarrow(folderPath);
    message.addStringNarrow(projectPath);
    message.addShort(dmxFolderId);
    message.addShort(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.addContentToPath = function(filePath, siteId, dmxFolderId, dmxFileId, projectPath, callback){
    /*
     ** addContentToPath(filePath, siteId, dmxFolderId, dmxFileId, projectPath, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow filePath
     **  A Windows-Styled path to a file. (&quot;C:\coolux\content\sample\video.mpv&quot;)
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     ** StringNarrow projectPath
     **  A path in the project tab. (&quot;somefolder/otherfolder&quot;) Leave empty for root
     **  directory.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(87);
    message.addStringNarrow(filePath);
    message.addInt(siteId);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addStringNarrow(projectPath);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.addContentToTreeItem = function(filePath, siteId, dmxFolderId, dmxFileId, treeItemIndex, callback){
    /*
     ** addContentToTreeItem(filePath, siteId, dmxFolderId, dmxFileId, treeItemIndex, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow filePath
     **  A Windows-Styled path to a file. (&quot;C:\coolux\content\sample\video.mpv&quot;)
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     ** Int treeItemIndex
     **  TreeItemIDs are counted from top to bottom in the project tree. Nesting has no
     **  influence on counting order. The first item is 0 (always the project root
     **  folder)
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(153);
    message.addStringNarrow(filePath);
    message.addInt(siteId);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addInt(treeItemIndex);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.addEncryptionKeyGetId = function(encryptionKey, callback){
    /*
     ** addEncryptionKeyGetId(encryptionKey, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringWide encryptionKey
     **  no description available
     **
     ** Return values:
     **
     ** Bool isKeyAdded
     **  no description available
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(164);
    message.addStringWide(encryptionKey);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "isKeyAdded";cb[1]["type"] = "Bool";
    sendToPb(cb,message);
};
PBAuto.prototype.addEncryptionPolicyGetId = function(encryptionPolicy, callback){
    /*
     ** addEncryptionPolicyGetId(encryptionPolicy, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringWide encryptionPolicy
     **  no description available
     **
     ** Return values:
     **
     ** Bool isKeyAdded
     **  no description available
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(165);
    message.addStringWide(encryptionPolicy);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "isKeyAdded";cb[1]["type"] = "Bool";
    sendToPb(cb,message);
};
PBAuto.prototype.addImageSequence = function(folderPath, siteId, dmxFolderId, dmxFileId, fps, callback) {
    /*
     ** addImageSequence(folderPath, siteId, dmxFolderId, dmxFileId, fps, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow folderPath
     **  A Windows-Styled path to a folder. (&quot;C:\coolux\content\sample_folder&quot;)
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     ** Int fps
     **  The frames per second to be used.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(284);
    message.addStringNarrow(folderPath);
    message.addInt(siteId);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addInt(fps);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.addImageSequenceFromLocalNode = function(folderPath, fps, callback) {
        /*
         ** addImageSequenceFromLocalNode(folderPath, fps)
         **  no description available
         **
         ** Arguments:
         **
         ** StringNarrow folderPath
         **  A Windows-Styled path to a folder. (&quot;C:\coolux\content\sample_folder&quot;)
         ** Int fps
         **  The frames per second to be used.
         **
         ** Return values:
         **
         */    
        var message = new PBUtilBytesNetwork();
        message.addShort(287);
        message.addStringNarrow(folderPath);
        message.addInt(fps);
        var cb = new Array();
        cb[0] = callback;
        sendToPb(cb,message);
    };
PBAuto.prototype.addImageSequenceFromLocalNodeId = function(folderPath, fps, dmxFolderId, dmxFileId, callback) {
        /*
         ** addImageSequenceFromLocalNodeId(folderPath, fps, dmxFolderId, dmxFileId)
         **  no description available
         **
         ** Arguments:
         **
         ** StringNarrow folderPath
         **  A Windows-Styled path to a folder. (&quot;C:\coolux\content\sample_folder&quot;)
         ** Int fps
         **  The frames per second to be used.
         ** Int dmxFolderId
         **  Resources can have a identifier pair (Folder and File ID) for external control
         **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
         **  takes advantage of this kind of addressing of resources.
         ** Int dmxFileId
         **  Resources can have a identifier pair (Folder and File ID) for external control
         **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
         **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
         **  of addressing of resources.
         **
         ** Return values:
         **
         */
        var message = new PBUtilBytesNetwork();
        message.addShort(288);
        message.addStringNarrow(folderPath);
        message.addInt(fps);
        message.addInt(dmxFolderId);
        message.addInt(dmxFileId);
        var cb = new Array();
        cb[0] = callback;
        sendToPb(cb,message);
    };
PBAuto.prototype.addImageSequenceFromLocalNodeToFolder = function(folderPath, fps, projectPath, callback){
        /*
         ** addImageSequenceFromLocalNodeToFolder(folderPath, fps, projectPath)
         **  no description available
         **
         ** Arguments:
         **
         ** StringNarrow folderPath
         **  A Windows-Styled path to a folder. (&quot;C:\coolux\content\sample_folder&quot;)
         ** Int fps
         **  The frames per second to be used.
         ** StringNarrow projectPath
         **  A path in the project tab. (&quot;somefolder/otherfolder&quot;) Leave empty for root
         **  directory.
         **
         ** Return values:
         **
         */
        var message = new PBUtilBytesNetwork();
        message.addShort(289);
        message.addStringNarrow(folderPath);
        message.addInt(fps);
        message.addStringNarrow(projectPath);
        var cb = new Array();
        cb[0] = callback;
        sendToPb(cb,message);
    };
PBAuto.prototype.addImageSequenceFromLocalNodeToFolderId = function(folderPath, fps, dmxFolderId, dmxFileId, projectPath, callback){
        /*
         ** addImageSequenceFromLocalNodeToFolderId(folderPath, fps, dmxFolderId, dmxFileId, projectPath)
         **  no description available
         **
         ** Arguments:
         **
         ** StringNarrow folderPath
         **  A Windows-Styled path to a folder. (&quot;C:\coolux\content\sample_folder&quot;)
         ** Int fps
         **  The frames per second to be used.
         ** Int dmxFolderId
         **  Resources can have a identifier pair (Folder and File ID) for external control
         **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
         **  takes advantage of this kind of addressing of resources.
         ** Int dmxFileId
         **  Resources can have a identifier pair (Folder and File ID) for external control
         **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
         **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
         **  of addressing of resources.
         ** StringNarrow projectPath
         **  A path in the project tab. (&quot;somefolder/otherfolder&quot;) Leave empty for root
         **  directory.
         **
         ** Return values:
         **
         */
        var message = new PBUtilBytesNetwork();
        message.addShort(290);
        message.addStringNarrow(folderPath);
        message.addInt(fps);
        message.addInt(dmxFolderId);
        message.addInt(dmxFileId);
        message.addStringNarrow(projectPath);
        var cb = new Array();
        cb[0] = callback;
        sendToPb(cb,message);
    };
PBAuto.prototype.addImageSequenceFromLocalNodeToTreeItem = function(folderPath, fps, treeItemIndex, callback){
        /*
         ** addImageSequenceFromLocalNodeToTreeItem(folderPath, fps, treeItemIndex)
         **  no description available
         **
         ** Arguments:
         **
         ** StringNarrow folderPath
         **  A Windows-Styled path to a folder. (&quot;C:\coolux\content\sample_folder&quot;)
         ** Int fps
         **  The frames per second to be used.
         ** Int treeItemIndex
         **  TreeItemIDs are counted from top to bottom in the project tree. Nesting has no
         **  influence on counting order. The first item is 0 (always the project root
         **  folder)
         **
         ** Return values:
         **
         */
        var message = new PBUtilBytesNetwork();
        message.addShort(291);
        message.addStringNarrow(folderPath);
        message.addInt(fps);
        message.addInt(treeItemIndex);
        var cb = new Array();
        cb[0] = callback;
        sendToPb(cb,message);
    };
PBAuto.prototype.addImageSequenceFromLocalNodeToTreeItemId = function(folderPath, fps, dmxFolderId, dmxFileId, treeItemIndex, callback){
        /*
         ** addImageSequenceFromLocalNodeToTreeItemId(folderPath, fps, dmxFolderId, dmxFileId, treeItemIndex)
         **  no description available
         **
         ** Arguments:
         **
         ** StringNarrow folderPath
         **  A Windows-Styled path to a folder. (&quot;C:\coolux\content\sample_folder&quot;)
         ** Int fps
         **  The frames per second to be used.
         ** Int dmxFolderId
         **  Resources can have a identifier pair (Folder and File ID) for external control
         **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
         **  takes advantage of this kind of addressing of resources.
         ** Int dmxFileId
         **  Resources can have a identifier pair (Folder and File ID) for external control
         **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
         **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
         **  of addressing of resources.
         ** Int treeItemIndex
         **  TreeItemIDs are counted from top to bottom in the project tree. Nesting has no
         **  influence on counting order. The first item is 0 (always the project root
         **  folder)
         **
         ** Return values:
         **
         */
        var message = new PBUtilBytesNetwork();
        message.addShort(292);
        message.addStringNarrow(folderPath);
        message.addInt(fps);
        message.addInt(dmxFolderId);
        message.addInt(dmxFileId);
        message.addInt(treeItemIndex);
        var cb = new Array();
        cb[0] = callback;
        sendToPb(cb,message);
    };
PBAuto.prototype.addImageSequenceToFolder = function(folderPath, siteId, dmxFolderId, dmxFileId, fps, projectPath, callback) {
    /*
     ** addImageSequenceToFolder(folderPath, siteId, dmxFolderId, dmxFileId, fps, projectPath, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow folderPath
     **  A Windows-Styled path to a folder. (&quot;C:\coolux\content\sample_folder&quot;)
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     ** Int fps
     **  The frames per second to be used.
     ** StringNarrow projectPath
     **  A path in the project tab. (&quot;somefolder/otherfolder&quot;) Leave empty for root
     **  directory.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(285);
    message.addStringNarrow(folderPath);
    message.addInt(siteId);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addInt(fps);
    message.addStringNarrow(projectPath);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.addImageSequenceToTreeItem = function(folderPath, siteId, dmxFolderId, dmxFileId, fps, treeItemIndex, callback) {
    /*
     ** addImageSequenceToTreeItem(folderPath, siteId, dmxFolderId, dmxFileId, fps, treeItemIndex, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow folderPath
     **  A Windows-Styled path to a folder. (&quot;C:\coolux\content\sample_folder&quot;)
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     ** Int fps
     **  The frames per second to be used.
     ** Int treeItemIndex
     **  TreeItemIDs are counted from top to bottom in the project tree. Nesting has no
     **  influence on counting order. The first item is 0 (always the project root
     **  folder)
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(286);
    message.addStringNarrow(folderPath);
    message.addInt(siteId);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addInt(fps);
    message.addInt(treeItemIndex);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.applyPreset = function(bankId, presetId, callback){
    /*
     ** applyPreset(bankId, presetId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int bankId
     **  The bank identifier for presets. They can be found in the Master&#39;s interface in
     **  the Project tab. The Presets folder contains all banks.
     ** Int presetId
     **  A identifier for a preset. It is unique in each bank.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(40);
    message.addInt(bankId);
    message.addInt(presetId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.applyView = function(viewId, callback){
    /*
     ** applyView(viewId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int viewId
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(103);
    message.addInt(viewId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.assignDevice = function(siteId, deviceId, sourceDeviceId, parameterName, callback){
    /*
     ** assignDevice(siteId, deviceId, sourceDeviceId, parameterName, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     ** Int sourceDeviceId
     **  no description available
     ** StringNarrow parameterName
     **  The parameterName is a string that identifies a property of a device. (ASCII
     **  only)
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(282);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addInt(sourceDeviceId);
    message.addStringNarrow(parameterName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.assignResource = function(siteId, deviceId, dmxFolderId, dmxFileId, forMesh, callback){
    /*
     ** assignResource(siteId, deviceId, dmxFolderId, dmxFileId, forMesh, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     ** Bool forMesh
     **  When forMesh it set, the command executes it&#39;s action for the MESH parameter of
     **  the given device. When set to false it is executed on the MEDIA parameter.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(2);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addBool(forMesh);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.assignResourceByName = function(siteId, deviceId, resourcePath, parameterName, forMesh, callback){
    /*
     ** assignResourceByName(siteId, deviceId, resourcePath, parameterName, forMesh, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     ** StringWide resourcePath
     **  A string representing the full path to a resource of the project. Resources in
     **  the root folder can be addressed directly like &quot;resource.mpv&quot;. The same resource
     **  in a subfolder named &quot;sub&quot; can be referenced by &quot;sub/resource.mpv&quot;
     ** StringWide parameterName
     **  The parameterName is a string that identifies a property of a device.
     ** Bool forMesh
     **  When forMesh it set, the command executes it&#39;s action for the MESH parameter of
     **  the given device. When set to false it is executed on the MEDIA parameter.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(129);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addStringWide(resourcePath);
    message.addStringWide(parameterName);
    message.addBool(forMesh);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.assignResourceToParam = function(siteId, deviceId, dmxFolderId, dmxFileId, forMesh, parameterName, callback){
    /*
     ** assignResourceToParam(siteId, deviceId, dmxFolderId, dmxFileId, forMesh, parameterName, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     ** Bool forMesh
     **  When forMesh it set, the command executes it&#39;s action for the MESH parameter of
     **  the given device. When set to false it is executed on the MEDIA parameter.
     ** StringNarrow parameterName
     **  The parameterName is a string that identifies a property of a device. (ASCII
     **  only)
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(283);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addBool(forMesh);
    message.addStringNarrow(parameterName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.assignResourceToSelection = function(dmxFolderId, dmxFileId, forMesh, callback){
    /*
     ** assignResourceToSelection(dmxFolderId, dmxFileId, forMesh, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     ** Bool forMesh
     **  When forMesh it set, the command executes it&#39;s action for the MESH parameter of
     **  the given device. When set to false it is executed on the MEDIA parameter.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(61);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addBool(forMesh);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.attachAssetOnSite = function(filePath, resourcePath, siteId, callback){
    /*
     ** attachAssetOnSite(filePath, resourcePath, siteId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringWide filePath
     **  A Windows-Styled path to a file. (&quot;C:\coolux\content\sample\video.mpv&quot;)
     ** StringWide resourcePath
     **  A string representing the full path to a resource of the project. Resources in
     **  the root folder can be addressed directly like &quot;resource.mpv&quot;. The same resource
     **  in a subfolder named &quot;sub&quot; can be referenced by &quot;sub/resource.mpv&quot;
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(173);
    message.addStringWide(filePath);
    message.addStringWide(resourcePath);
    message.addInt(siteId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.attachAssetOnSiteByDmxId = function(filePath, dmxFolderId, dmxFileId, siteId, callback){
    /*
     ** attachAssetOnSiteByDmxId(filePath, dmxFolderId, dmxFileId, siteId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringWide filePath
     **  A Windows-Styled path to a file. (&quot;C:\coolux\content\sample\video.mpv&quot;)
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(174);
    message.addStringWide(filePath);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addInt(siteId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.attachAssetOnSiteByTreeItem = function(filePath, treeItemIndex, siteId, callback){
    /*
     ** attachAssetOnSiteByTreeItem(filePath, treeItemIndex, siteId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringWide filePath
     **  A Windows-Styled path to a file. (&quot;C:\coolux\content\sample\video.mpv&quot;)
     ** Int treeItemIndex
     **  TreeItemIDs are counted from top to bottom in the project tree. Nesting has no
     **  influence on counting order. The first item is 0 (always the project root
     **  folder)
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(175);
    message.addStringWide(filePath);
    message.addInt(treeItemIndex);
    message.addInt(siteId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.bundleProject = function(bundlePath, bundleName, callback){
    /*
     ** bundleProject(bundlePath, bundleName, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow bundlePath
     **  no description available
     ** StringNarrow bundleName
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(260);
    message.addStringNarrow(bundlePath);
    message.addStringNarrow(bundleName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.clearActiveDevice = function(siteId, deviceId, callback){
    /*
     ** clearActiveDevice(siteId, deviceId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(15);
    message.addInt(siteId);
    message.addInt(deviceId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.clearActiveParam = function(siteId, deviceId, parameterName, callback){
    /*
     ** clearActiveParam(siteId, deviceId, parameterName, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     ** StringNarrow parameterName
     **  The parameterName is a string that identifies a property of a device. (ASCII
     **  only)
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(16);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addStringNarrow(parameterName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.clearActiveSite = function(siteId, callback){
    /*
     ** clearActiveSite(siteId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(14);
    message.addInt(siteId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.clearAllActive = function(callback){
    /*
     ** clearAllActive(callback, callback)
     **  no description available
     **
     ** Arguments:
     **
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(13);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.clearAllPlaylistEntriesByDmxId = function(playlistDmxFolderId, playlistdmxFileId, callback){
    /*
     ** clearAllPlaylistEntriesByDmxId(playlistDmxFolderId, playlistdmxFileId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int playlistDmxFolderId
     **  no description available
     ** Int playlistdmxFileId
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(271);
    message.addInt(playlistDmxFolderId);
    message.addInt(playlistdmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.clearAllPlaylistEntriesByItemIndex = function(playlistItemId, callback){
    /*
     ** clearAllPlaylistEntriesByItemIndex(playlistItemId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int playlistItemId
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(273);
    message.addInt(playlistItemId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.clearAllPlaylistEntriesByPath = function(playlistPath, callback){
    /*
     ** clearAllPlaylistEntriesByPath(playlistPath, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow playlistPath
     **  A path in the project to a playlist.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(272);
    message.addStringNarrow(playlistPath);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.clearCanvasByDmxId = function(canvasDmxFolderId, canvasDmxFileId, callback){
    /*
     ** clearCanvasByDmxId(canvasDmxFolderId, canvasDmxFileId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int canvasDmxFolderId
     **  no description available
     ** Int canvasDmxFileId
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(242);
    message.addInt(canvasDmxFolderId);
    message.addInt(canvasDmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.clearCanvasByItemId = function(canvasItemId, callback){
    /*
     ** clearCanvasByItemId(canvasItemId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int canvasItemId
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(244);
    message.addInt(canvasItemId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.clearCanvasByPath = function(canvasResourcePath, callback){
    /*
     ** clearCanvasByPath(canvasResourcePath, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow canvasResourcePath
     **  A path in the project to a canvas.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(243);
    message.addStringNarrow(canvasResourcePath);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.clearEmptyPlaylistEntriesByDmxId = function(playlistDmxFolderId, playlistdmxFileId, callback){
    /*
     ** clearEmptyPlaylistEntriesByDmxId(playlistDmxFolderId, playlistdmxFileId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int playlistDmxFolderId
     **  no description available
     ** Int playlistdmxFileId
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(268);
    message.addInt(playlistDmxFolderId);
    message.addInt(playlistdmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.clearEmptyPlaylistEntriesByItemId = function(playlistItemId, callback){
    /*
     ** clearEmptyPlaylistEntriesByItemId(playlistItemId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int playlistItemId
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(270);
    message.addInt(playlistItemId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.clearEmptyPlaylistEntriesByPath = function(playlistPath, callback){
    /*
     ** clearEmptyPlaylistEntriesByPath(playlistPath, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow playlistPath
     **  A path in the project to a playlist.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(269);
    message.addStringNarrow(playlistPath);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.clearSelection = function(callback){
    /*
     ** clearSelection(callback, callback)
     **  no description available
     **
     ** Arguments:
     **
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(48);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.clearStreamingText = function(dmxFolderId, dmxFileId, pendingOnly, callback){
    /*
     ** clearStreamingText(dmxFolderId, dmxFileId, pendingOnly, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     ** Bool pendingOnly
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(309);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addBool(pendingOnly);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.closeProject = function(save, callback){
    /*
     ** closeProject(save, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Byte save
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(47);
    message.addByte(save);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.createCue = function(sequenceId, cueId, hours, minutes, seconds, frames, cueName, cueKindId, callback){
    /*
     ** createCue(sequenceId, cueId, hours, minutes, seconds, frames, cueName, cueKindId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     ** Int cueId
     **  A unique identifier for a cue.
     ** Int hours
     **  The HOURS part of a time or timespan
     ** Int minutes
     **  The MINUTES part of a time or timespan
     ** Int seconds
     **  The SECONDS part of a time or timespan
     ** Int frames
     **  The FRAMES part of a time or timespan
     ** StringWide cueName
     **  no description available
     ** Int cueKindId
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(93);
    message.addInt(sequenceId);
    message.addInt(cueId);
    message.addInt(hours);
    message.addInt(minutes);
    message.addInt(seconds);
    message.addInt(frames);
    message.addStringWide(cueName);
    message.addInt(cueKindId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.createLayerGetId = function(siteId, isGraphicLayer, callback){
    /*
     ** createLayerGetId(siteId, isGraphicLayer, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Bool isGraphicLayer
     **  no description available
     **
     ** Return values:
     **
     ** Int layerId
     **  no description available
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(96);
    message.addInt(siteId);
    message.addBool(isGraphicLayer);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "layerId";cb[1]["type"] = "Int";
    sendToPb(cb,message);
};
PBAuto.prototype.createPlaylist = function(doSetDmxId, dmxFolderId, dmxFileId, callback){
    /*
     ** createPlaylist(doSetDmxId, dmxFolderId, dmxFileId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Bool doSetDmxId
     **  no description available
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(176);
    message.addBool(doSetDmxId);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.createPlaylistInItemId = function(treeItemIndex, setdmxFileIds, newDmxFolderId, newdmxFileId, callback){
    /*
     ** createPlaylistInItemId(treeItemIndex, setdmxFileIds, newDmxFolderId, newdmxFileId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int treeItemIndex
     **  TreeItemIDs are counted from top to bottom in the project tree. Nesting has no
     **  influence on counting order. The first item is 0 (always the project root
     **  folder)
     ** Bool setdmxFileIds
     **  no description available
     ** Int newDmxFolderId
     **  no description available
     ** Int newdmxFileId
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(178);
    message.addInt(treeItemIndex);
    message.addBool(setdmxFileIds);
    message.addInt(newDmxFolderId);
    message.addInt(newdmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.createPlaylistInItemIdWithName = function(treeItemIndex, setdmxFileIds, newDmxFolderId, newdmxFileId, newResourceName, callback){
    /*
     ** createPlaylistInItemIdWithName(treeItemIndex, setdmxFileIds, newDmxFolderId, newdmxFileId, newResourceName, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int treeItemIndex
     **  TreeItemIDs are counted from top to bottom in the project tree. Nesting has no
     **  influence on counting order. The first item is 0 (always the project root
     **  folder)
     ** Bool setdmxFileIds
     **  no description available
     ** Int newDmxFolderId
     **  no description available
     ** Int newdmxFileId
     **  no description available
     ** StringNarrow newResourceName
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(302);
    message.addInt(treeItemIndex);
    message.addBool(setdmxFileIds);
    message.addInt(newDmxFolderId);
    message.addInt(newdmxFileId);
    message.addStringNarrow(newResourceName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.createPlaylistInPath = function(projectPath, doSetDmxId, dmxFolderId, dmxFileId, callback){
    /*
     ** createPlaylistInPath(projectPath, doSetDmxId, dmxFolderId, dmxFileId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow projectPath
     **  A path in the project tab. (&quot;somefolder/otherfolder&quot;) Leave empty for root
     **  directory.
     ** Bool doSetDmxId
     **  no description available
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(177);
    message.addStringNarrow(projectPath);
    message.addBool(doSetDmxId);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.createPlaylistInPathFromFolder = function(projectPath, sourceProjectPath, setdmxFileIds, newDmxFolderId, newdmxFileId, callback){
    /*
     ** createPlaylistInPathFromFolder(projectPath, sourceProjectPath, setdmxFileIds, newDmxFolderId, newdmxFileId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow projectPath
     **  A path in the project tab. (&quot;somefolder/otherfolder&quot;) Leave empty for root
     **  directory.
     ** StringNarrow sourceProjectPath
     **  A path in the project tab containing media
     ** Bool setdmxFileIds
     **  no description available
     ** Int newDmxFolderId
     **  no description available
     ** Int newdmxFileId
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(179);
    message.addStringNarrow(projectPath);
    message.addStringNarrow(sourceProjectPath);
    message.addBool(setdmxFileIds);
    message.addInt(newDmxFolderId);
    message.addInt(newdmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.createPlaylistInPathFromFolderWithName = function(projectPath, sourceProjectPath, setdmxFileIds, newDmxFolderId, newdmxFileId, newResourceName, callback){
    /*
     ** createPlaylistInPathFromFolderWithName(projectPath, sourceProjectPath, setdmxFileIds, newDmxFolderId, newdmxFileId, newResourceName, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow projectPath
     **  A path in the project tab. (&quot;somefolder/otherfolder&quot;) Leave empty for root
     **  directory.
     ** StringNarrow sourceProjectPath
     **  A path in the project tab containing media
     ** Bool setdmxFileIds
     **  no description available
     ** Int newDmxFolderId
     **  no description available
     ** Int newdmxFileId
     **  no description available
     ** StringNarrow newResourceName
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(303);
    message.addStringNarrow(projectPath);
    message.addStringNarrow(sourceProjectPath);
    message.addBool(setdmxFileIds);
    message.addInt(newDmxFolderId);
    message.addInt(newdmxFileId);
    message.addStringNarrow(newResourceName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.createPlaylistInPathWithName = function(projectPath, doSetDmxId, dmxFolderId, dmxFileId, newResourceName, callback){
    /*
     ** createPlaylistInPathWithName(projectPath, doSetDmxId, dmxFolderId, dmxFileId, newResourceName, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow projectPath
     **  A path in the project tab. (&quot;somefolder/otherfolder&quot;) Leave empty for root
     **  directory.
     ** Bool doSetDmxId
     **  no description available
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     ** StringNarrow newResourceName
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(301);
    message.addStringNarrow(projectPath);
    message.addBool(doSetDmxId);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addStringNarrow(newResourceName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.createPlaylistInTreeItemFromFolder = function(treeItemIndex, sourceFolderItemId, setdmxFileIds, newDmxFolderId, newdmxFileId, callback){
    /*
     ** createPlaylistInTreeItemFromFolder(treeItemIndex, sourceFolderItemId, setdmxFileIds, newDmxFolderId, newdmxFileId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int treeItemIndex
     **  TreeItemIDs are counted from top to bottom in the project tree. Nesting has no
     **  influence on counting order. The first item is 0 (always the project root
     **  folder)
     ** Int sourceFolderItemId
     **  no description available
     ** Bool setdmxFileIds
     **  no description available
     ** Int newDmxFolderId
     **  no description available
     ** Int newdmxFileId
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(180);
    message.addInt(treeItemIndex);
    message.addInt(sourceFolderItemId);
    message.addBool(setdmxFileIds);
    message.addInt(newDmxFolderId);
    message.addInt(newdmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.createPlaylistInTreeItemFromFolderWithName = function(treeItemIndex, sourceFolderItemId, setdmxFileIds, newDmxFolderId, newdmxFileId, newResourceName, callback){
    /*
     ** createPlaylistInTreeItemFromFolderWithName(treeItemIndex, sourceFolderItemId, setdmxFileIds, newDmxFolderId, newdmxFileId, newResourceName, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int treeItemIndex
     **  TreeItemIDs are counted from top to bottom in the project tree. Nesting has no
     **  influence on counting order. The first item is 0 (always the project root
     **  folder)
     ** Int sourceFolderItemId
     **  no description available
     ** Bool setdmxFileIds
     **  no description available
     ** Int newDmxFolderId
     **  no description available
     ** Int newdmxFileId
     **  no description available
     ** StringNarrow newResourceName
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(304);
    message.addInt(treeItemIndex);
    message.addInt(sourceFolderItemId);
    message.addBool(setdmxFileIds);
    message.addInt(newDmxFolderId);
    message.addInt(newdmxFileId);
    message.addStringNarrow(newResourceName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.createPlaylistWithName = function(doSetDmxId, dmxFolderId, dmxFileId, newResourceName, callback){
    /*
     ** createPlaylistWithName(doSetDmxId, dmxFolderId, dmxFileId, newResourceName, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Bool doSetDmxId
     **  no description available
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     ** StringNarrow newResourceName
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(300);
    message.addBool(doSetDmxId);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addStringNarrow(newResourceName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.createProjectFolder = function(folderName, callback){
    /*
     ** createProjectFolder(folderName, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringWide folderName
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(83);
    message.addStringWide(folderName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.createProjectFolderInPath = function(folderName, projectPath, callback){
    /*
     ** createProjectFolderInPath(folderName, projectPath, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringWide folderName
     **  no description available
     ** StringWide projectPath
     **  A path in the project. leave blank for the root folder. Subfolders are separated
     **  by a forward slash, no terminating slash is allowed.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(122);
    message.addStringWide(folderName);
    message.addStringWide(projectPath);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.createProjectFolderInTreeItem = function(folderName, treeItemIndex, callback){
    /*
     ** createProjectFolderInTreeItem(folderName, treeItemIndex, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringWide folderName
     **  no description available
     ** Int treeItemIndex
     **  TreeItemIDs are counted from top to bottom in the project tree. Nesting has no
     **  influence on counting order. The first item is 0 (always the project root
     **  folder)
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(157);
    message.addStringWide(folderName);
    message.addInt(treeItemIndex);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.createSequenceGetId = function(callback){
    /*
     ** createSequenceGetId(callback, callback)
     **  no description available
     **
     ** Arguments:
     **
     **
     ** Return values:
     **
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(130);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "sequenceId";cb[1]["type"] = "Int";
    sendToPb(cb,message);
};
PBAuto.prototype.createTextInput = function(dmxFolderId, dmxFileId, text, callback){
    /*
     ** createTextInput(dmxFolderId, dmxFileId, text, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     ** StringNarrow text
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(52);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addStringNarrow(text);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.createTextInputWide = function(dmxFolderId, dmxFileId, text, callback){
    /*
     ** createTextInputWide(dmxFolderId, dmxFileId, text, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     ** StringWide text
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(69);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addStringWide(text);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.encodeFile = function(resourcePath, encodingPreset, callback){
    /*
     ** encodeFile(resourcePath, encodingPreset, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow resourcePath
     **  A string representing the full path to a resource of the project. Resources in
     **  the root folder can be addressed directly like &quot;resource.mpv&quot;. The same resource
     **  in a subfolder named &quot;sub&quot; can be referenced by &quot;sub/resource.mpv&quot;
     ** StringNarrow encodingPreset
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(228);
    message.addStringNarrow(resourcePath);
    message.addStringNarrow(encodingPreset);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.encodeFileByDmxId = function(folderID, fileID, encodingPreset, callback){
    /*
     ** encodeFileByDmxId(folderID, fileID, encodingPreset, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int folderID
     **  no description available
     ** Int fileID
     **  no description available
     ** StringNarrow encodingPreset
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(230);
    message.addInt(folderID);
    message.addInt(fileID);
    message.addStringNarrow(encodingPreset);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.encodeFileToPath = function(resourcePath, projectPath, overwriteExisting, encodingPreset, callback){
    /*
     ** encodeFileToPath(resourcePath, projectPath, overwriteExisting, encodingPreset, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow resourcePath
     **  A string representing the full path to a resource of the project. Resources in
     **  the root folder can be addressed directly like &quot;resource.mpv&quot;. The same resource
     **  in a subfolder named &quot;sub&quot; can be referenced by &quot;sub/resource.mpv&quot;
     ** StringNarrow projectPath
     **  A path in the project tab. (&quot;somefolder/otherfolder&quot;) Leave empty for root
     **  directory.
     ** Bool overwriteExisting
     **  no description available
     ** StringNarrow encodingPreset
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(229);
    message.addStringNarrow(resourcePath);
    message.addStringNarrow(projectPath);
    message.addBool(overwriteExisting);
    message.addStringNarrow(encodingPreset);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.executeCanvasCmdByDmxId = function(canvasDmxFolderId, canvasDmxFileId, pCmd, cmdContainsResourcePath, callback){
    /*
     ** executeCanvasCmdByDmxId(canvasDmxFolderId, canvasDmxFileId, pCmd, cmdContainsResourcePath, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int canvasDmxFolderId
     **  no description available
     ** Int canvasDmxFileId
     **  no description available
     ** StringNarrow pCmd
     **  no description available
     ** Bool cmdContainsResourcePath
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(245);
    message.addInt(canvasDmxFolderId);
    message.addInt(canvasDmxFileId);
    message.addStringNarrow(pCmd);
    message.addBool(cmdContainsResourcePath);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.executeCanvasCmdByItemId = function(canvasItemId, pCmd, cmdContainsResourcePath, callback){
    /*
     ** executeCanvasCmdByItemId(canvasItemId, pCmd, cmdContainsResourcePath, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int canvasItemId
     **  no description available
     ** StringNarrow pCmd
     **  no description available
     ** Bool cmdContainsResourcePath
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(247);
    message.addInt(canvasItemId);
    message.addStringNarrow(pCmd);
    message.addBool(cmdContainsResourcePath);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.executeCanvasCmdByPath = function(canvasResourcePath, pCmd, cmdContainsResourcePath, callback){
    /*
     ** executeCanvasCmdByPath(canvasResourcePath, pCmd, cmdContainsResourcePath, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow canvasResourcePath
     **  A path in the project to a canvas.
     ** StringNarrow pCmd
     **  no description available
     ** Bool cmdContainsResourcePath
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(246);
    message.addStringNarrow(canvasResourcePath);
    message.addStringNarrow(pCmd);
    message.addBool(cmdContainsResourcePath);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.exportVideo = function(pFilename, encodingPresetName, sequenceId, startHour, startMinute, startSecond, startFrame, endHour, endMinute, endSec, endFrame, callback){
    /*
     ** exportVideo(pFilename, encodingPresetName, sequenceId, startHour, startMinute, startSecond, startFrame, endHour, endMinute, endSec, endFrame, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow pFilename
     **  no description available
     ** StringNarrow encodingPresetName
     **  The name of a encoding preset. A list of possible presets can be found in the
     **  Video Recording Tab
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     ** Int startHour
     **  The time to start at (hours)
     ** Int startMinute
     **  The time to start at (minutes)
     ** Int startSecond
     **  The time to start at (seconds)
     ** Int startFrame
     **  The time to start at (frames)
     ** Int endHour
     **  The time to end at (hours)
     ** Int endMinute
     **  The time to end at (minutes)
     ** Int endSec
     **  The time to end at (seconds)
     ** Int endFrame
     **  The time to end at (frames)
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(227);
    message.addStringNarrow(pFilename);
    message.addStringNarrow(encodingPresetName);
    message.addInt(sequenceId);
    message.addInt(startHour);
    message.addInt(startMinute);
    message.addInt(startSecond);
    message.addInt(startFrame);
    message.addInt(endHour);
    message.addInt(endMinute);
    message.addInt(endSec);
    message.addInt(endFrame);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.getCanvasDrawCommandsByDmxId = function(canvasDmxFolderId, canvasDmxFileId, callback){
    /*
     ** getCanvasDrawCommandsByDmxId(canvasDmxFolderId, canvasDmxFileId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int canvasDmxFolderId
     **  no description available
     ** Int canvasDmxFileId
     **  no description available
     **
     ** Return values:
     **
     ** StringNarrow commands
     **  no description available
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(248);
    message.addInt(canvasDmxFolderId);
    message.addInt(canvasDmxFileId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "commands";cb[1]["type"] = "StringNarrow";
    sendToPb(cb,message);
};
PBAuto.prototype.getCanvasDrawCommandsByItemId = function(canvasItemId, callback){
    /*
     ** getCanvasDrawCommandsByItemId(canvasItemId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int canvasItemId
     **  no description available
     **
     ** Return values:
     **
     ** StringNarrow commands
     **  no description available
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(250);
    message.addInt(canvasItemId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "commands";cb[1]["type"] = "StringNarrow";
    sendToPb(cb,message);
};
PBAuto.prototype.getCanvasDrawCommandsByPath = function(canvasResourcePath, callback){
    /*
     ** getCanvasDrawCommandsByPath(canvasResourcePath, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow canvasResourcePath
     **  A path in the project to a canvas.
     **
     ** Return values:
     **
     ** StringNarrow commands
     **  no description available
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(249);
    message.addStringNarrow(canvasResourcePath);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "commands";cb[1]["type"] = "StringNarrow";
    sendToPb(cb,message);
};
PBAuto.prototype.getClipRemainingTime = function(siteId, deviceId, sequenceId, callback) {
    /*
     ** getClipRemainingTime(siteId, deviceId, sequenceId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     **
     ** Return values:
     **
     ** Int hours
     **  The HOURS part of a time or timespan
     ** Int minutes
     **  The MINUTES part of a time or timespan
     ** Int seconds
     **  The SECONDS part of a time or timespan
     ** Int frames
     **  The FRAMES part of a time or timespan
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(77);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addInt(sequenceId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "hours";cb[1]["type"] = "Int";
    cb[2] = new Object();cb[2]["name"] = "minutes";cb[2]["type"] = "Int";
    cb[3] = new Object();cb[3]["name"] = "seconds";cb[3]["type"] = "Int";
    cb[4] = new Object();cb[4]["name"] = "frames";cb[4]["type"] = "Int";
    sendToPb(cb,message);
};
PBAuto.prototype.getContentIsConsistentByTreeItem = function(treeItemIndex, callback){
    /*
     ** getContentIsConsistentByTreeItem(treeItemIndex, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int treeItemIndex
     **  TreeItemIDs are counted from top to bottom in the project tree. Nesting has no
     **  influence on counting order. The first item is 0 (always the project root
     **  folder)
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(296);
    message.addInt(treeItemIndex);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.getCueName = function(sequenceId, cueId, callback){
    /*
     ** getCueName(sequenceId, cueId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     ** Int cueId
     **  A unique identifier for a cue.
     **
     ** Return values:
     **
     ** StringNarrow cueName
     **  no description available
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(277);
    message.addInt(sequenceId);
    message.addInt(cueId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "cueName";cb[1]["type"] = "StringNarrow";
    sendToPb(cb,message);
};
PBAuto.prototype.getCurrentTimeCueInfo = function(sequenceId, callback){
    /*
     ** getCurrentTimeCueInfo(sequenceId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     **
     ** Return values:
     **
     ** Int hours
     **  The HOURS part of a time or timespan
     ** Int minutes
     **  The MINUTES part of a time or timespan
     ** Int seconds
     **  The SECONDS part of a time or timespan
     ** Int frames
     **  The FRAMES part of a time or timespan
     ** Int previousCueId
     **  no description available
     ** StringNarrow previousCueName
     **  no description available
     ** Int hoursPreviousCue
     **  no description available
     ** Int minutesPreviousCue
     **  no description available
     ** Int secondsPreviousCue
     **  no description available
     ** Int framesPreviousCue
     **  no description available
     ** Int previousCueMode
     **  no description available
     ** Int nextCueId
     **  no description available
     ** StringNarrow nextCueName
     **  no description available
     ** Int hoursNextCue
     **  no description available
     ** Int minutesNextCue
     **  no description available
     ** Int secondsNextCue
     **  no description available
     ** Int framesNextCue
     **  no description available
     ** Int nextCueMode
     **  no description available
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(295);
    message.addInt(sequenceId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "hours";cb[1]["type"] = "Int";
    cb[2] = new Object();cb[2]["name"] = "minutes";cb[2]["type"] = "Int";
    cb[3] = new Object();cb[3]["name"] = "seconds";cb[3]["type"] = "Int";
    cb[4] = new Object();cb[4]["name"] = "frames";cb[4]["type"] = "Int";
    cb[5] = new Object();cb[5]["name"] = "previousCueId";cb[5]["type"] = "Int";
    cb[6] = new Object();cb[6]["name"] = "previousCueName";cb[6]["type"] = "StringNarrow";
    cb[7] = new Object();cb[7]["name"] = "hoursPreviousCue";cb[7]["type"] = "Int";
    cb[8] = new Object();cb[8]["name"] = "minutesPreviousCue";cb[8]["type"] = "Int";
    cb[9] = new Object();cb[9]["name"] = "secondsPreviousCue";cb[9]["type"] = "Int";
    cb[10] = new Object();cb[10]["name"] = "framesPreviousCue";cb[10]["type"] = "Int";
    cb[11] = new Object();cb[11]["name"] = "previousCueMode";cb[11]["type"] = "Int";
    cb[12] = new Object();cb[12]["name"] = "nextCueId";cb[12]["type"] = "Int";
    cb[13] = new Object();cb[13]["name"] = "nextCueName";cb[13]["type"] = "StringNarrow";
    cb[14] = new Object();cb[14]["name"] = "hoursNextCue";cb[14]["type"] = "Int";
    cb[15] = new Object();cb[15]["name"] = "minutesNextCue";cb[15]["type"] = "Int";
    cb[16] = new Object();cb[16]["name"] = "secondsNextCue";cb[16]["type"] = "Int";
    cb[17] = new Object();cb[17]["name"] = "framesNextCue";cb[17]["type"] = "Int";
    cb[18] = new Object();cb[18]["name"] = "nextCueMode";cb[18]["type"] = "Int";
    sendToPb(cb,message);
};
PBAuto.prototype.getIsLayerSelected = function(siteId, deviceId, callback){
    /*
     ** getIsLayerSelected(siteId, deviceId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     **
     ** Return values:
     **
     ** Byte isSelected
     **  States whether something is currently selected in the master interface
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(74);
    message.addInt(siteId);
    message.addInt(deviceId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "isSelected";cb[1]["type"] = "Byte";
    sendToPb(cb,message);
};
PBAuto.prototype.getEnableClxController = function(forJogShuttle, callback){
    /*
     ** getEnableClxController(forJogShuttle, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** ClxHardware forJogShuttle
     **  The target coolux Hardware
     **
     ** Return values:
     **
     ** Bool isEnabled
     **  no description available
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(116);
    message.addByte(forJogShuttle);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "isEnabled";cb[1]["type"] = "Bool";
    sendToPb(cb,message);
};
PBAuto.prototype.getFolderSpreadToSite = function(projectPath, siteId, callback){
    /*
     ** getFolderSpreadToSite(projectPath, siteId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow projectPath
     **  A path in the project tab. (&quot;somefolder/otherfolder&quot;) Leave empty for root
     **  directory.
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     **
     ** Return values:
     **
     ** Bool isEnabled
     **  no description available
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(312);
    message.addStringNarrow(projectPath);
    message.addInt(siteId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "isEnabled";cb[1]["type"] = "Bool";
    sendToPb(cb,message);
};
PBAuto.prototype.getFolderSpreadToSiteByItemId = function(treeItemIndex, siteId, callback){
    /*
     ** getFolderSpreadToSiteByItemId(treeItemIndex, siteId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int treeItemIndex
     **  TreeItemIDs are counted from top to bottom in the project tree. Nesting has no
     **  influence on counting order. The first item is 0 (always the project root
     **  folder)
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     **
     ** Return values:
     **
     ** Bool isEnabled
     **  no description available
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(313);
    message.addInt(treeItemIndex);
    message.addInt(siteId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "isEnabled";cb[1]["type"] = "Bool";
    sendToPb(cb,message);
};
PBAuto.prototype.getIsContentConsistent = function(dmxFolderId, dmxFileId, callback){
    /*
     ** getIsContentConsistent(dmxFolderId, dmxFileId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     **
     ** Return values:
     **
     ** Consistency isContentInconsistent
     **  no description available
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(127);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "isContentInconsistent";cb[1]["type"] = "Int";
    sendToPb(cb,message);
};
PBAuto.prototype.getIsContentConsistentByName = function(resourcePath, callback){
    /*
     ** getIsContentConsistentByName(resourcePath, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringWide resourcePath
     **  A string representing the full path to a resource of the project. Resources in
     **  the root folder can be addressed directly like &quot;resource.mpv&quot;. The same resource
     **  in a subfolder named &quot;sub&quot; can be referenced by &quot;sub/resource.mpv&quot;
     **
     ** Return values:
     **
     ** Consistency isContentInconsistent
     **  no description available
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(128);
    message.addStringWide(resourcePath);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "isContentInconsistent";cb[1]["type"] = "Int";
    sendToPb(cb,message);
};
PBAuto.prototype.getIsSiteConnected = function(siteId, callback){
    /*
     ** getIsSiteConnected(siteId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     **
     ** Return values:
     **
     ** Bool isConnected
     **  no description available
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(109);
    message.addInt(siteId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "isConnected";cb[1]["type"] = "Bool";
    sendToPb(cb,message);
};
PBAuto.prototype.getMediaHeightByDmxId = function(dmxFolderId, dmxFileId, callback){
    /*
     ** getMediaHeightByDmxId(dmxFolderId, dmxFileId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     **
     ** Return values:
     **
     ** Int height
     **  no description available
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(254);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "height";cb[1]["type"] = "Int";
    sendToPb(cb,message);
};
PBAuto.prototype.getMediaHeightByItemId = function(itemId, callback){
    /*
     ** getMediaHeightByItemId(itemId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int itemId
     **  no description available
     **
     ** Return values:
     **
     ** Int height
     **  no description available
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(256);
    message.addInt(itemId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "height";cb[1]["type"] = "Int";
    sendToPb(cb,message);
};
PBAuto.prototype.getMediaHeightByPath = function(folderPathToProject, callback){
    /*
     ** getMediaHeightByPath(folderPathToProject, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow folderPathToProject
     **  A Windows-Styled path to a folder. (&quot;C:\coolux\content\projects\myproject&quot;)
     **
     ** Return values:
     **
     ** Int height
     **  no description available
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(255);
    message.addStringNarrow(folderPathToProject);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "height";cb[1]["type"] = "Int";
    sendToPb(cb,message);
};
PBAuto.prototype.getMediaTransportMode = function(siteId, deviceId, callback){
    /*
     ** getMediaTransportMode(siteId, deviceId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     **
     ** Return values:
     **
     ** TransportMode transportMode
     **  Playback status of a sequence. Possible values are 1 (Play), 2 (Stop) or 3
     **  (Pause)
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(108);
    message.addInt(siteId);
    message.addInt(deviceId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "transportMode";cb[1]["type"] = "Int";
    sendToPb(cb,message);
};
PBAuto.prototype.getMediaWidthByDmxId = function(dmxFolderId, dmxFileId, callback){
    /*
     ** getMediaWidthByDmxId(dmxFolderId, dmxFileId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     **
     ** Return values:
     **
     ** Int width
     **  no description available
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(251);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "width";cb[1]["type"] = "Int";
    sendToPb(cb,message);
};
PBAuto.prototype.getMediaWidthByItemId = function(itemId, callback){
    /*
     ** getMediaWidthByItemId(itemId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int itemId
     **  no description available
     **
     ** Return values:
     **
     ** Int width
     **  no description available
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(253);
    message.addInt(itemId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "width";cb[1]["type"] = "Int";
    sendToPb(cb,message);
};
PBAuto.prototype.getMediaWidthByPath = function(folderPathToProject, callback){
    /*
     ** getMediaWidthByPath(folderPathToProject, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow folderPathToProject
     **  A Windows-Styled path to a folder. (&quot;C:\coolux\content\projects\myproject&quot;)
     **
     ** Return values:
     **
     ** Int width
     **  no description available
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(252);
    message.addStringNarrow(folderPathToProject);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "width";cb[1]["type"] = "Int";
    sendToPb(cb,message);
};
PBAuto.prototype.getParamByteTuples = function(siteId, deviceId, parameterName, callback){
    /*
     ** getParamByteTuples(siteId, deviceId, parameterName, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     ** StringWide parameterName
     **  The parameterName is a string that identifies a property of a device.
     **
     ** Return values:
     **
     ** Int tupleDimension
     **  The number of elements in this tuple
     ** ByteBuffer tupleData
     **  The data of the tuple collection
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(132);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addStringWide(parameterName);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "tupleDimension";cb[1]["type"] = "Int";
    cb[2] = new Object();cb[2]["name"] = "tupleData";cb[2]["type"] = "ByteBuffer";
    sendToPb(cb,message);
};
PBAuto.prototype.getRemainingTimeUntilNextCue = function(sequenceId, callback){
    /*
     ** getRemainingTimeUntilNextCue(sequenceId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     **
     ** Return values:
     **
     ** Int hours
     **  The HOURS part of a time or timespan
     ** Int minutes
     **  The MINUTES part of a time or timespan
     ** Int seconds
     **  The SECONDS part of a time or timespan
     ** Int frames
     **  The FRAMES part of a time or timespan
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(78);
    message.addInt(sequenceId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "hours";cb[1]["type"] = "Int";
    cb[2] = new Object();cb[2]["name"] = "minutes";cb[2]["type"] = "Int";
    cb[3] = new Object();cb[3]["name"] = "seconds";cb[3]["type"] = "Int";
    cb[4] = new Object();cb[4]["name"] = "frames";cb[4]["type"] = "Int";
    sendToPb(cb,message);
};
PBAuto.prototype.getResourceCount = function(callback){
    /*
     ** getResourceCount(callback, callback)
     **  no description available
     **
     ** Arguments:
     **
     **
     ** Return values:
     **
     ** Int mediaCount
     **  no description available
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(82);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "mediaCount";cb[1]["type"] = "Int";
    sendToPb(cb,message);
};
PBAuto.prototype.getParamResource = function(siteId, deviceId, isMedia, parameterName, callback){
    /*
     ** getParamResource(siteId, deviceId, isMedia, parameterName, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     ** Bool isMedia
     **  no description available
     ** StringNarrow parameterName
     **  The parameterName is a string that identifies a property of a device. (ASCII
     **  only)
     **
     ** Return values:
     **
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     ** StringNarrow filePath
     **  A Windows-Styled path to a file. (&quot;C:\coolux\content\sample\video.mpv&quot;)
     ** StringNarrow resourcePath
     **  A string representing the full path to a resource of the project. Resources in
     **  the root folder can be addressed directly like &quot;resource.mpv&quot;. The same resource
     **  in a subfolder named &quot;sub&quot; can be referenced by &quot;sub/resource.mpv&quot;
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(105);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addBool(isMedia);
    message.addStringNarrow(parameterName);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "dmxFolderId";cb[1]["type"] = "Int";
    cb[2] = new Object();cb[2]["name"] = "dmxFileId";cb[2]["type"] = "Int";
    cb[3] = new Object();cb[3]["name"] = "filePath";cb[3]["type"] = "StringNarrow";
    cb[4] = new Object();cb[4]["name"] = "resourcePath";cb[4]["type"] = "StringNarrow";
    sendToPb(cb,message);
};
PBAuto.prototype.getPlaylistSizeByDmxId = function(playlistDmxFolderId, playlistdmxFileId, callback){
    /*
     ** getPlaylistSizeByDmxId(playlistDmxFolderId, playlistdmxFileId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int playlistDmxFolderId
     **  no description available
     ** Int playlistdmxFileId
     **  no description available
     **
     ** Return values:
     **
     ** Int playlistSize
     **  no description available
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(190);
    message.addInt(playlistDmxFolderId);
    message.addInt(playlistdmxFileId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "playlistSize";cb[1]["type"] = "Int";
    sendToPb(cb,message);
};
PBAuto.prototype.getPlaylistSizeByItemId = function(playlistItemId, callback){
    /*
     ** getPlaylistSizeByItemId(playlistItemId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int playlistItemId
     **  no description available
     **
     ** Return values:
     **
     ** Int playlistSize
     **  no description available
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(192);
    message.addInt(playlistItemId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "playlistSize";cb[1]["type"] = "Int";
    sendToPb(cb,message);
};
PBAuto.prototype.getPlaylistSizeByPath = function(playlistPath, callback){
    /*
     ** getPlaylistSizeByPath(playlistPath, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow playlistPath
     **  A path in the project to a playlist.
     **
     ** Return values:
     **
     ** Int playlistSize
     **  no description available
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(191);
    message.addStringNarrow(playlistPath);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "playlistSize";cb[1]["type"] = "Int";
    sendToPb(cb,message);
};
PBAuto.prototype.getParam = function(siteId, deviceId, parameterName, callback){
    /*
     ** getParam(siteId, deviceId, parameterName, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     ** StringNarrow parameterName
     **  The parameterName is a string that identifies a property of a device. (ASCII
     **  only)
     **
     ** Return values:
     **
     ** Double parameterValue
     **  A numeric value to a corresponding parameter.
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(79);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addStringNarrow(parameterName);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "parameterValue";cb[1]["type"] = "Double";
    sendToPb(cb,message);
};
PBAuto.prototype.getParamOfKind = function(siteId, deviceId, parameterKindId, callback){
    /*
     ** getParamOfKind(siteId, deviceId, parameterKindId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     ** ParamKind parameterKindId
     **  A numeric representation for a parameter. This is faster than using the text
     **  based identifier.
     **
     ** Return values:
     **
     ** Double parameterValue
     **  A numeric value to a corresponding parameter.
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(80);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addInt(parameterKindId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "parameterValue";cb[1]["type"] = "Double";
    sendToPb(cb,message);
};
PBAuto.prototype.getProjectPathOnDisc = function(callback){
    /*
     ** getProjectPathOnDisc(callback, callback)
     **  no description available
     **
     ** Arguments:
     **
     **
     ** Return values:
     **
     ** StringNarrow commands
     **  no description available
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(257);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "commands";cb[1]["type"] = "StringNarrow";
    sendToPb(cb,message);
};
PBAuto.prototype.getSelectedDevice = function(selectionIndex, callback){
    /*
     ** getSelectedDevice(selectionIndex, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int selectionIndex
     **  A index for the collection of selected devices. Get selected devices count with
     **  [c:16]
     **
     ** Return values:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(75);
    message.addInt(selectionIndex);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "siteId";cb[1]["type"] = "Int";
    cb[2] = new Object();cb[2]["name"] = "deviceId";cb[2]["type"] = "Int";
    sendToPb(cb,message);
};
PBAuto.prototype.getSelectedDeviceCount = function(callback){
    /*
     ** getSelectedDeviceCount(callback, callback)
     **  no description available
     **
     ** Arguments:
     **
     **
     ** Return values:
     **
     ** Int selectedDevicesCount
     **  Number of devices currently in selection.
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(81);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "selectedDevicesCount";cb[1]["type"] = "Int";
    sendToPb(cb,message);
};
PBAuto.prototype.getSequenceTime = function(sequenceId, callback){
    /*
     ** getSequenceTime(sequenceId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     **
     ** Return values:
     **
     ** Int hours
     **  The HOURS part of a time or timespan
     ** Int minutes
     **  The MINUTES part of a time or timespan
     ** Int seconds
     **  The SECONDS part of a time or timespan
     ** Int frames
     **  The FRAMES part of a time or timespan
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(73);
    message.addInt(sequenceId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "hours";cb[1]["type"] = "Int";
    cb[2] = new Object();cb[2]["name"] = "minutes";cb[2]["type"] = "Int";
    cb[3] = new Object();cb[3]["name"] = "seconds";cb[3]["type"] = "Int";
    cb[4] = new Object();cb[4]["name"] = "frames";cb[4]["type"] = "Int";
    sendToPb(cb,message);
};
PBAuto.prototype.getSequenceTransparency = function(sequenceId, callback){
    /*
     ** getSequenceTransparency(sequenceId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     **
     ** Return values:
     **
     ** Int transparency
     **  The numeric visibility from 0 (totally opaque) to 255 (fully visible)
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(91);
    message.addInt(sequenceId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "transparency";cb[1]["type"] = "Int";
    sendToPb(cb,message);
};
PBAuto.prototype.getSequenceTransportMode = function(sequenceId, callback){
    /*
     ** getSequenceTransportMode(sequenceId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     **
     ** Return values:
     **
     ** TransportMode transportMode
     **  Playback status of a sequence. Possible values are 1 (Play), 2 (Stop) or 3
     **  (Pause)
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(72);
    message.addInt(sequenceId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "transportMode";cb[1]["type"] = "Int";
    sendToPb(cb,message);
};
PBAuto.prototype.getThumbnailByItemIndex = function(treeItemIndex, callback){
    /*
     ** getThumbnailByItemIndex(treeItemIndex, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int treeItemIndex
     **  TreeItemIDs are counted from top to bottom in the project tree. Nesting has no
     **  influence on counting order. The first item is 0 (always the project root
     **  folder)
     **
     ** Return values:
     **
     ** Int thumbnailWidth
     **  The width of a thumbnail image in pixels. Always comes in pair with
     **  [thumbnailHeight]
     ** Int thumbnailHeight
     **  The width of a thumbnail image in pixels. Always comes in pair with
     **  [thumbnailWidth]
     ** ByteBuffer thumbnailData
     **  4 Byte/Pixel encoded image data (BGRA). There is no header, only raw data. The
     **  width and height can be found in [thumbnailWidth] and [thumbnailHeight]
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(163);
    message.addInt(treeItemIndex);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "thumbnailWidth";cb[1]["type"] = "Int";
    cb[2] = new Object();cb[2]["name"] = "thumbnailHeight";cb[2]["type"] = "Int";
    cb[3] = new Object();cb[3]["name"] = "thumbnailData";cb[3]["type"] = "ByteBuffer";
    sendToPb(cb,message);
};
PBAuto.prototype.getThumbnailByPath = function(resourcePath, callback){
    /*
     ** getThumbnailByPath(resourcePath, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringWide resourcePath
     **  A string representing the full path to a resource of the project. Resources in
     **  the root folder can be addressed directly like &quot;resource.mpv&quot;. The same resource
     **  in a subfolder named &quot;sub&quot; can be referenced by &quot;sub/resource.mpv&quot;
     **
     ** Return values:
     **
     ** Int thumbnailWidth
     **  The width of a thumbnail image in pixels. Always comes in pair with
     **  [thumbnailHeight]
     ** Int thumbnailHeight
     **  The width of a thumbnail image in pixels. Always comes in pair with
     **  [thumbnailWidth]
     ** ByteBuffer thumbnailData
     **  4 Byte/Pixel encoded image data (BGRA). There is no header, only raw data. The
     **  width and height can be found in [thumbnailWidth] and [thumbnailHeight]
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(162);
    message.addStringWide(resourcePath);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "thumbnailWidth";cb[1]["type"] = "Int";
    cb[2] = new Object();cb[2]["name"] = "thumbnailHeight";cb[2]["type"] = "Int";
    cb[3] = new Object();cb[3]["name"] = "thumbnailData";cb[3]["type"] = "ByteBuffer";
    sendToPb(cb,message);
};
PBAuto.prototype.getTreeItemCount = function(callback){
    /*
     ** getTreeItemCount(callback, callback)
     **  no description available
     **
     ** Arguments:
     **
     **
     ** Return values:
     **
     ** Int treeItemCount
     **  The total number of items
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(150);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "treeItemCount";cb[1]["type"] = "Int";
    sendToPb(cb,message);
};
PBAuto.prototype.getWatchedFolderProperty = function(projectPath, watchFolderProperty, callback){
    /*
     ** getWatchedFolderProperty(projectPath, watchFolderProperty, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow projectPath
     **  A path in the project tab. (&quot;somefolder/otherfolder&quot;) Leave empty for root
     **  directory.
     ** WatchFolderProperty watchFolderProperty
     **  A trait of a watchfolder.
     **
     ** Return values:
     **
     ** Bool isEnabled
     **  no description available
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(310);
    message.addStringNarrow(projectPath);
    message.addInt(watchFolderProperty);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "isEnabled";cb[1]["type"] = "Bool";
    sendToPb(cb,message);
};
PBAuto.prototype.getWatchedFolderPropertyByItemId = function(treeItemIndex, watchFolderProperty, callback){
    /*
     ** getWatchedFolderPropertyByItemId(treeItemIndex, watchFolderProperty, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int treeItemIndex
     **  TreeItemIDs are counted from top to bottom in the project tree. Nesting has no
     **  influence on counting order. The first item is 0 (always the project root
     **  folder)
     ** WatchFolderProperty watchFolderProperty
     **  A trait of a watchfolder.
     **
     ** Return values:
     **
     ** Bool isEnabled
     **  no description available
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(311);
    message.addInt(treeItemIndex);
    message.addInt(watchFolderProperty);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "isEnabled";cb[1]["type"] = "Bool";
    sendToPb(cb,message);
};
PBAuto.prototype.handleSublayer = function(siteId, deviceId, action, data, callback){
    /*
     ** handleSublayer(siteId, deviceId, action, data, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     ** Int action
     **
     ** Int data
     **
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(275);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addInt(action);
    message.addInt(data);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.insertPlaylistEntryByDmxId = function(playlistDmxFolderId, playlistdmxFileId, resourceDmxFolderId, resourceDmxFileId, index, callback){
    /*
     ** insertPlaylistEntryByDmxId(playlistDmxFolderId, playlistdmxFileId, resourceDmxFolderId, resourceDmxFileId, index, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int playlistDmxFolderId
     **  no description available
     ** Int playlistdmxFileId
     **  no description available
     ** Int resourceDmxFolderId
     **  no description available
     ** Int resourceDmxFileId
     **  no description available
     ** Int index
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(184);
    message.addInt(playlistDmxFolderId);
    message.addInt(playlistdmxFileId);
    message.addInt(resourceDmxFolderId);
    message.addInt(resourceDmxFileId);
    message.addInt(index);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.insertPlaylistEntryByItemId = function(playlistItemId, resourceItemId, index, callback){
    /*
     ** insertPlaylistEntryByItemId(playlistItemId, resourceItemId, index, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int playlistItemId
     **  no description available
     ** Int resourceItemId
     **  no description available
     ** Int index
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(186);
    message.addInt(playlistItemId);
    message.addInt(resourceItemId);
    message.addInt(index);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.insertPlaylistEntryByPath = function(playlistPath, resourcePath, index, callback){
    /*
     ** insertPlaylistEntryByPath(playlistPath, resourcePath, index, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow playlistPath
     **  A path in the project to a playlist.
     ** StringNarrow resourcePath
     **  A path in the project to a resource.
     ** Int index
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(185);
    message.addStringNarrow(playlistPath);
    message.addStringNarrow(resourcePath);
    message.addInt(index);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.loadProject = function(folderPathToProject, projectXmlFileName, saveExisting, callback){
    /*
     ** loadProject(folderPathToProject, projectXmlFileName, saveExisting, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow folderPathToProject
     **  A Windows-Styled path to a folder. (&quot;C:\coolux\content\projects\myproject&quot;)
     ** StringNarrow projectXmlFileName
     **  The name of the XML file of the project. (&quot;myproject.xml&quot;)
     ** Byte saveExisting
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(46);
    message.addStringNarrow(folderPathToProject);
    message.addStringNarrow(projectXmlFileName);
    message.addByte(saveExisting);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.moveLayerDown = function(siteId, deviceId, callback){
    /*
     ** moveLayerDown(siteId, deviceId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(112);
    message.addInt(siteId);
    message.addInt(deviceId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.moveLayerToFirstPosition = function(siteId, deviceId, callback){
    /*
     ** moveLayerToFirstPosition(siteId, deviceId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(113);
    message.addInt(siteId);
    message.addInt(deviceId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.moveLayerToLastPosition = function(siteId, deviceId, callback){
    /*
     ** moveLayerToLastPosition(siteId, deviceId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(114);
    message.addInt(siteId);
    message.addInt(deviceId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.moveLayerUp = function(siteId, deviceId, callback){
    /*
     ** moveLayerUp(siteId, deviceId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(111);
    message.addInt(siteId);
    message.addInt(deviceId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.moveResourceToPath = function(resourcePath, projectPath, callback){
    /*
     ** moveResourceToPath(resourcePath, projectPath, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringWide resourcePath
     **  A string representing the full path to a resource of the project. Resources in
     **  the root folder can be addressed directly like &quot;resource.mpv&quot;. The same resource
     **  in a subfolder named &quot;sub&quot; can be referenced by &quot;sub/resource.mpv&quot;
     ** StringWide projectPath
     **  A path in the project. leave blank for the root folder. Subfolders are separated
     **  by a forward slash, no terminating slash is allowed.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(144);
    message.addStringWide(resourcePath);
    message.addStringWide(projectPath);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.moveSequenceToCue = function(sequenceId, cueId, callback){
    /*
     ** moveSequenceToCue(sequenceId, cueId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     ** Int cueId
     **  A unique identifier for a cue.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(4);
    message.addInt(sequenceId);
    message.addInt(cueId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.moveSequenceToNextCue = function(sequenceId, isNext, callback){
    /*
     ** moveSequenceToNextCue(sequenceId, isNext, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     ** Byte isNext
     **  When true then the action is done to the NEXT element. When set to false then
     **  the action is done to the PREVIOUS element.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(7);
    message.addInt(sequenceId);
    message.addByte(isNext);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.moveSequenceToNextFrame = function(sequenceId, isNext, callback){
    /*
     ** moveSequenceToNextFrame(sequenceId, isNext, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     ** Byte isNext
     **  When true then the action is done to the NEXT element. When set to false then
     **  the action is done to the PREVIOUS element.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(6);
    message.addInt(sequenceId);
    message.addByte(isNext);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.moveSequenceToTime = function(sequenceId, hours, minutes, seconds, frames, callback){
    /*
     ** moveSequenceToTime(sequenceId, hours, minutes, seconds, frames, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     ** Int hours
     **  The HOURS part of a time or timespan
     ** Int minutes
     **  The MINUTES part of a time or timespan
     ** Int seconds
     **  The SECONDS part of a time or timespan
     ** Int frames
     **  The FRAMES part of a time or timespan
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(5);
    message.addInt(sequenceId);
    message.addInt(hours);
    message.addInt(minutes);
    message.addInt(seconds);
    message.addInt(frames);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.moveTreeItem = function(itemIdFrom, itemIdTo, callback){
    /*
     ** moveTreeItem(itemIdFrom, itemIdTo, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int itemIdFrom
     **  Item IDs are counted from top to bottom in the project tree. Nesting has no
     **  influence on counting order. The first item is 0 (always the project root
     **  folder)
     ** Int itemIdTo
     **  Item IDs are counted from top to bottom in the project tree. Nesting has no
     **  influence on counting order. The first item is 0 (always the project root
     **  folder)
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(158);
    message.addInt(itemIdFrom);
    message.addInt(itemIdTo);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.pushBackPlaylistEntryByDmxId = function(playlistDmxFolderId, playlistdmxFileId, resourceDmxFolderId, resourceDmxFileId, callback){
    /*
     ** pushBackPlaylistEntryByDmxId(playlistDmxFolderId, playlistdmxFileId, resourceDmxFolderId, resourceDmxFileId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int playlistDmxFolderId
     **  no description available
     ** Int playlistdmxFileId
     **  no description available
     ** Int resourceDmxFolderId
     **  no description available
     ** Int resourceDmxFileId
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(181);
    message.addInt(playlistDmxFolderId);
    message.addInt(playlistdmxFileId);
    message.addInt(resourceDmxFolderId);
    message.addInt(resourceDmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.pushBackPlaylistEntryByItemId = function(playlistItemId, resourceItemId, callback){
    /*
     ** pushBackPlaylistEntryByItemId(playlistItemId, resourceItemId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int playlistItemId
     **  no description available
     ** Int resourceItemId
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(183);
    message.addInt(playlistItemId);
    message.addInt(resourceItemId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.pushBackPlaylistEntryByPath = function(playlistPath, resourcePath, callback){
    /*
     ** pushBackPlaylistEntryByPath(playlistPath, resourcePath, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow playlistPath
     **  A path in the project to a playlist.
     ** StringNarrow resourcePath
     **  A path in the project to a resource.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(182);
    message.addStringNarrow(playlistPath);
    message.addStringNarrow(resourcePath);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.recordLiveInputByDmxId = function(folderID, fileID, pFilename, encodingPresetName, hours, minutes, seconds, frames, callback){
    /*
     ** recordLiveInputByDmxId(folderID, fileID, pFilename, encodingPresetName, hours, minutes, seconds, frames, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int folderID
     **  no description available
     ** Int fileID
     **  no description available
     ** StringNarrow pFilename
     **  no description available
     ** StringNarrow encodingPresetName
     **  The name of a encoding preset. A list of possible presets can be found in the
     **  Video Recording Tab
     ** Int hours
     **  The HOURS part of a time or timespan
     ** Int minutes
     **  The MINUTES part of a time or timespan
     ** Int seconds
     **  The SECONDS part of a time or timespan
     ** Int frames
     **  The FRAMES part of a time or timespan
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(222);
    message.addInt(folderID);
    message.addInt(fileID);
    message.addStringNarrow(pFilename);
    message.addStringNarrow(encodingPresetName);
    message.addInt(hours);
    message.addInt(minutes);
    message.addInt(seconds);
    message.addInt(frames);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.recordLiveInputByName = function(liveInputResourcePath, pFilename, encodingPresetName, hours, minutes, seconds, frames, callback){
    /*
     ** recordLiveInputByName(liveInputResourcePath, pFilename, encodingPresetName, hours, minutes, seconds, frames, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow liveInputResourcePath
     **  A string representing the full path to a live input resource of the project.
     **  Live Inputs that reside in the root fodler of the project can be addressed
     **  directly like &quot;MyLiveInput&quot;. The same resource in a subfolder named &quot;sub&quot; can be
     **  referenced by &quot;sub/MyLiveInput&quot;
     ** StringNarrow pFilename
     **  no description available
     ** StringNarrow encodingPresetName
     **  The name of a encoding preset. A list of possible presets can be found in the
     **  Video Recording Tab
     ** Int hours
     **  The HOURS part of a time or timespan
     ** Int minutes
     **  The MINUTES part of a time or timespan
     ** Int seconds
     **  The SECONDS part of a time or timespan
     ** Int frames
     **  The FRAMES part of a time or timespan
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(225);
    message.addStringNarrow(liveInputResourcePath);
    message.addStringNarrow(pFilename);
    message.addStringNarrow(encodingPresetName);
    message.addInt(hours);
    message.addInt(minutes);
    message.addInt(seconds);
    message.addInt(frames);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.recordLiveInputStartByDmxId = function(folderID, fileID, pFilename, encodingPresetName, callback){
    /*
     ** recordLiveInputStartByDmxId(folderID, fileID, pFilename, encodingPresetName, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int folderID
     **  no description available
     ** Int fileID
     **  no description available
     ** StringNarrow pFilename
     **  no description available
     ** StringNarrow encodingPresetName
     **  The name of a encoding preset. A list of possible presets can be found in the
     **  Video Recording Tab
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(223);
    message.addInt(folderID);
    message.addInt(fileID);
    message.addStringNarrow(pFilename);
    message.addStringNarrow(encodingPresetName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.recordLiveInputStartByName = function(liveInputResourcePath, pFilename, encodingPresetName, callback){
    /*
     ** recordLiveInputStartByName(liveInputResourcePath, pFilename, encodingPresetName, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow liveInputResourcePath
     **  A string representing the full path to a live input resource of the project.
     **  Live Inputs that reside in the root fodler of the project can be addressed
     **  directly like &quot;MyLiveInput&quot;. The same resource in a subfolder named &quot;sub&quot; can be
     **  referenced by &quot;sub/MyLiveInput&quot;
     ** StringNarrow pFilename
     **  no description available
     ** StringNarrow encodingPresetName
     **  The name of a encoding preset. A list of possible presets can be found in the
     **  Video Recording Tab
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(226);
    message.addStringNarrow(liveInputResourcePath);
    message.addStringNarrow(pFilename);
    message.addStringNarrow(encodingPresetName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.recordLiveInputStop = function(callback){
    /*
     ** recordLiveInputStop(callback, callback)
     **  no description available
     **
     ** Arguments:
     **
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(222);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.refreshBrowserView = function(siteId, deviceId, callback){
    /*
     ** refreshBrowserView(siteId, deviceId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(141);
    message.addInt(siteId);
    message.addInt(deviceId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.reloadAndSpreadResource = function(resourcePath, callback){
    /*
     ** reloadAndSpreadResource(resourcePath, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringWide resourcePath
     **  A string representing the full path to a resource of the project. Resources in
     **  the root folder can be addressed directly like &quot;resource.mpv&quot;. The same resource
     **  in a subfolder named &quot;sub&quot; can be referenced by &quot;sub/resource.mpv&quot;
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(159);
    message.addStringWide(resourcePath);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.reloadMediaById = function(dmxFolderId, dmxFileId, callback){
    /*
     ** reloadMediaById(dmxFolderId, dmxFileId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(44);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.reloadMeshById = function(dmxFolderId, dmxFileId, callback){
    /*
     ** reloadMeshById(dmxFolderId, dmxFileId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(45);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.reloadResource = function(resourcePath, callback){
    /*
     ** reloadResource(resourcePath, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringWide resourcePath
     **  A string representing the full path to a resource of the project. Resources in
     **  the root folder can be addressed directly like &quot;resource.mpv&quot;. The same resource
     **  in a subfolder named &quot;sub&quot; can be referenced by &quot;sub/resource.mpv&quot;
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(147);
    message.addStringWide(resourcePath);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.removeAllCues = function(sequenceId, callback){
    /*
     ** removeAllCues(sequenceId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(95);
    message.addInt(sequenceId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.removeAllResources = function(removeFolder, callback){
    /*
     ** removeAllResources(removeFolder, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Bool removeFolder
     **  True: Remove folders. False: Keep folder structure.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(126);
    message.addBool(removeFolder);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.removeAssetOnSite = function(resourcePath, siteId, callback){
    /*
     ** removeAssetOnSite(resourcePath, siteId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringWide resourcePath
     **  A string representing the full path to a resource of the project. Resources in
     **  the root folder can be addressed directly like &quot;resource.mpv&quot;. The same resource
     **  in a subfolder named &quot;sub&quot; can be referenced by &quot;sub/resource.mpv&quot;
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(170);
    message.addStringWide(resourcePath);
    message.addInt(siteId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.removeAssetOnSiteById = function(dmxFolderId, dmxFileId, siteId, callback){
    /*
     ** removeAssetOnSiteById(dmxFolderId, dmxFileId, siteId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(171);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addInt(siteId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.removeAssetOnSiteByTreeItem = function(treeItemIndex, siteId, callback){
    /*
     ** removeAssetOnSiteByTreeItem(treeItemIndex, siteId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int treeItemIndex
     **  TreeItemIDs are counted from top to bottom in the project tree. Nesting has no
     **  influence on counting order. The first item is 0 (always the project root
     **  folder)
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(172);
    message.addInt(treeItemIndex);
    message.addInt(siteId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.removeContentByName = function(resourcePath, allEquallyNamed, callback){
    /*
     ** removeContentByName(resourcePath, allEquallyNamed, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringWide resourcePath
     **  A string representing the full path to a resource of the project. Resources in
     **  the root folder can be addressed directly like &quot;resource.mpv&quot;. The same resource
     **  in a subfolder named &quot;sub&quot; can be referenced by &quot;sub/resource.mpv&quot;
     ** Bool allEquallyNamed
     **  True: Execute action on all equally named items. False: Do action only for
     **  one/the first item having the target name.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(125);
    message.addStringWide(resourcePath);
    message.addBool(allEquallyNamed);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.removeCueById = function(sequenceId, cueId, callback){
    /*
     ** removeCueById(sequenceId, cueId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     ** Int cueId
     **  A unique identifier for a cue.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(94);
    message.addInt(sequenceId);
    message.addInt(cueId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.removeFolderFromProject = function(projectPath, callback){
    /*
     ** removeFolderFromProject(projectPath, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringWide projectPath
     **  A path in the project. leave blank for the root folder. Subfolders are separated
     **  by a forward slash, no terminating slash is allowed.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(123);
    message.addStringWide(projectPath);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.removeInconsistent = function(callback){
    /*
     ** removeInconsistent(callback, callback)
     **  no description available
     **
     ** Arguments:
     **
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(34);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.removeLayer = function(siteId, layerId, isGraphicLayer, callback){
    /*
     ** removeLayer(siteId, layerId, isGraphicLayer, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int layerId
     **  no description available
     ** Bool isGraphicLayer
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(97);
    message.addInt(siteId);
    message.addInt(layerId);
    message.addBool(isGraphicLayer);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.removeMediaById = function(dmxFolderId, dmxFileId, callback){
    /*
     ** removeMediaById(dmxFolderId, dmxFileId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(20);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.removeMeshById = function(dmxFolderId, dmxFileId, callback){
    /*
     ** removeMeshById(dmxFolderId, dmxFileId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(21);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.removePlaylistEntryByDmxId = function(playlistDmxFolderId, playlistdmxFileId, index, callback){
    /*
     ** removePlaylistEntryByDmxId(playlistDmxFolderId, playlistdmxFileId, index, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int playlistDmxFolderId
     **  no description available
     ** Int playlistdmxFileId
     **  no description available
     ** Int index
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(187);
    message.addInt(playlistDmxFolderId);
    message.addInt(playlistdmxFileId);
    message.addInt(index);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.removePlaylistEntryByItemId = function(playlistItemId, index, callback){
    /*
     ** removePlaylistEntryByItemId(playlistItemId, index, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int playlistItemId
     **  no description available
     ** Int index
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(189);
    message.addInt(playlistItemId);
    message.addInt(index);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.removePlaylistEntryByPath = function(playlistPath, index, callback){
    /*
     ** removePlaylistEntryByPath(playlistPath, index, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow playlistPath
     **  A path in the project to a playlist.
     ** Int index
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(188);
    message.addStringNarrow(playlistPath);
    message.addInt(index);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.removeSequence = function(sequenceId, callback) {
    /*
     ** removeSequence(sequenceId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(131);
    message.addInt(sequenceId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.removeTreeItem = function(treeItemIndex, callback){
    /*
     ** removeTreeItem(treeItemIndex, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int treeItemIndex
     **  TreeItemIDs are counted from top to bottom in the project tree. Nesting has no
     **  influence on counting order. The first item is 0 (always the project root
     **  folder)
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(156);
    message.addInt(treeItemIndex);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.resetAll = function(callback){
    /*
     ** resetAll(callback, callback)
     **  no description available
     **
     ** Arguments:
     **
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(9);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.resetDevice = function(siteId, deviceId, callback){
    /*
     ** resetDevice(siteId, deviceId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(11);
    message.addInt(siteId);
    message.addInt(deviceId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.resetCueTriggerCount = function(sequenceId, cueId, callback){
    /*
     ** resetCueTriggerCount(sequenceId, cueId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     ** Int cueId
     **  A unique identifier for a cue.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(121);
    message.addInt(sequenceId);
    message.addInt(cueId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.resetParam = function(siteId, deviceId, parameterName, callback){
    /*
     ** resetParam(siteId, deviceId, parameterName, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     ** StringNarrow parameterName
     **  The parameterName is a string that identifies a property of a device. (ASCII
     **  only)
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(12);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addStringNarrow(parameterName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.resetSite = function(siteId, callback){
    /*
     ** resetSite(siteId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(10);
    message.addInt(siteId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.saveProject = function(callback){
    /*
     ** saveProject(callback, callback)
     **  no description available
     **
     ** Arguments:
     **
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(62);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.saveProjectAs = function(folderPathToProject, projectXmlFileName, callback){
    /*
     ** saveProjectAs(folderPathToProject, projectXmlFileName, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow folderPathToProject
     **  A Windows-Styled path to a folder. (&quot;C:\coolux\content\projects\myproject&quot;)
     ** StringNarrow projectXmlFileName
     **  The name of the XML file of the project. (&quot;myproject.xml&quot;)
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(258);
    message.addStringNarrow(folderPathToProject);
    message.addStringNarrow(projectXmlFileName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.saveProjectCopy = function(folderPathToProject, projectXmlFileName, callback){
    /*
     ** saveProjectCopy(folderPathToProject, projectXmlFileName, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow folderPathToProject
     **  A Windows-Styled path to a folder. (&quot;C:\coolux\content\projects\myproject&quot;)
     ** StringNarrow projectXmlFileName
     **  The name of the XML file of the project. (&quot;myproject.xml&quot;)
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(259);
    message.addStringNarrow(folderPathToProject);
    message.addStringNarrow(projectXmlFileName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.sendCanvasCmdsToStackByDmxId = function(canvasDmxFolderId, canvasDmxFileId, doAddToStack, callback){
    /*
     ** sendCanvasCmdsToStackByDmxId(canvasDmxFolderId, canvasDmxFileId, doAddToStack, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int canvasDmxFolderId
     **  no description available
     ** Int canvasDmxFileId
     **  no description available
     ** Bool doAddToStack
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(265);
    message.addInt(canvasDmxFolderId);
    message.addInt(canvasDmxFileId);
    message.addBool(doAddToStack);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.sendKeyboardInput = function(siteId, keyboardEventType, keyCode, callback){
    /*
     ** sendKeyboardInput(siteId, keyboardEventType, keyCode, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int keyboardEventType
     **  no description available
     ** Int keyCode
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(137);
    message.addInt(siteId);
    message.addInt(keyboardEventType);
    message.addInt(keyCode);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.sendMouseInput = function(siteId, deviceId, mouseEventType, screenPosX, screenPosY, firstPass, callback){
    /*
     ** sendMouseInput(siteId, deviceId, mouseEventType, screenPosX, screenPosY, firstPass, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     ** Int mouseEventType
     **  no description available
     ** Int screenPosX
     **  no description available
     ** Int screenPosY
     **  no description available
     ** Bool firstPass
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(136);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addInt(mouseEventType);
    message.addInt(screenPosX);
    message.addInt(screenPosY);
    message.addBool(firstPass);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.sendMouseScroll = function(siteId, deviceId, scrollValue, callback){
    /*
     ** sendMouseScroll(siteId, deviceId, scrollValue, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     ** Int scrollValue
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(233);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addInt(scrollValue);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.sendTouchInput = function(siteId, deviceId, touchId, touchType, screenPosX, screenPosY, firstPass, callback){
    /*
     ** sendTouchInput(siteId, deviceId, touchId, touchType, screenPosX, screenPosY, firstPass, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     ** Int touchId
     **  no description available
     ** Int touchType
     **  no description available
     ** Int screenPosX
     **  no description available
     ** Int screenPosY
     **  no description available
     ** Bool firstPass
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(146);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addInt(touchId);
    message.addInt(touchType);
    message.addInt(screenPosX);
    message.addInt(screenPosY);
    message.addBool(firstPass);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setAddCanvasCmdsToStackByItemId = function(canvasItemId, doAddToStack, callback){
    /*
     ** setAddCanvasCmdsToStackByItemId(canvasItemId, doAddToStack, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int canvasItemId
     **  no description available
     ** Bool doAddToStack
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(267);
    message.addInt(canvasItemId);
    message.addBool(doAddToStack);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setAddCanvasCmdsToStackByPath = function(canvasResourcePath, doAddToStack, callback){
    /*
     ** setAddCanvasCmdsToStackByPath(canvasResourcePath, doAddToStack, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow canvasResourcePath
     **  A path in the project to a canvas.
     ** Bool doAddToStack
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(266);
    message.addStringNarrow(canvasResourcePath);
    message.addBool(doAddToStack);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setAllActive = function(callback){
    /*
     ** setAllActive(callback, callback)
     **  no description available
     **
     ** Arguments:
     **
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(35);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setASIOMasterVolume = function(siteId, asioVolume, callback){
    /*
     ** setASIOMasterVolume(siteId, asioVolume, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Double asioVolume
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(169);
    message.addInt(siteId);
    message.addDouble(asioVolume);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setBrowserSize = function(dmxFolderId, dmxFileId, width, height, callback){
    /*
     ** setBrowserSize(dmxFolderId, dmxFileId, width, height, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     ** Int width
     **  no description available
     ** Int height
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(142);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addInt(width);
    message.addInt(height);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setBrowserSizeByName = function(browserProjectPath, width, height, callback){
    /*
     ** setBrowserSizeByName(browserProjectPath, width, height, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringWide browserProjectPath
     **  no description available
     ** Int width
     **  no description available
     ** Int height
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(138);
    message.addStringWide(browserProjectPath);
    message.addInt(width);
    message.addInt(height);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setBrowserURL = function(dmxFolderId, dmxFileId, url, callback){
    /*
     ** setBrowserURL(dmxFolderId, dmxFileId, url, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     ** StringWide url
     **  LIKE
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(139);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addStringWide(url);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setBrowserURLByName = function(browserProjectPath, url, callback){
    /*
     ** setBrowserURLByName(browserProjectPath, url, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringWide browserProjectPath
     **  no description available
     ** StringWide url
     **  LIKE
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(140);
    message.addStringWide(browserProjectPath);
    message.addStringWide(url);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setCanvasResolutionByDmxId = function(canvasDmxFolderId, canvasDmxFileId, width, height, callback){
    /*
     ** setCanvasResolutionByDmxId(canvasDmxFolderId, canvasDmxFileId, width, height, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int canvasDmxFolderId
     **  no description available
     ** Int canvasDmxFileId
     **  no description available
     ** Int width
     **  no description available
     ** Int height
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(239);
    message.addInt(canvasDmxFolderId);
    message.addInt(canvasDmxFileId);
    message.addInt(width);
    message.addInt(height);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setCanvasResolutionByItemId = function(canvasItemId, width, height, callback){
    /*
     ** setCanvasResolutionByItemId(canvasItemId, width, height, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int canvasItemId
     **  no description available
     ** Int width
     **  no description available
     ** Int height
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(241);
    message.addInt(canvasItemId);
    message.addInt(width);
    message.addInt(height);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setCanvasResolutionByPath = function(canvasResourcePath, width, height, callback){
    /*
     ** setCanvasResolutionByPath(canvasResourcePath, width, height, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow canvasResourcePath
     **  A path in the project to a canvas.
     ** Int width
     **  no description available
     ** Int height
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(240);
    message.addStringNarrow(canvasResourcePath);
    message.addInt(width);
    message.addInt(height);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setClxControllerCueMapping = function(cueBtnId, sequenceId, cueId, callback){
    /*
     ** setClxControllerCueMapping(cueBtnId, sequenceId, cueId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int cueBtnId
     **  no description available
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     ** Int cueId
     **  A unique identifier for a cue.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(92);
    message.addInt(cueBtnId);
    message.addInt(sequenceId);
    message.addInt(cueId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setClxControllerFaderMapping = function(faderId, sequenceId, callback){
    /*
     ** setClxControllerFaderMapping(faderId, sequenceId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int faderId
     **  no description available
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(90);
    message.addInt(faderId);
    message.addInt(sequenceId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setContentAtTime = function(siteId, deviceId, sequenceId, hours, minutes, seconds, frames, dmxFolderId, dmxFileId, callback){
    /*
     ** setContentAtTime(siteId, deviceId, sequenceId, hours, minutes, seconds, frames, dmxFolderId, dmxFileId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     ** Int hours
     **  The HOURS part of a time or timespan
     ** Int minutes
     **  The MINUTES part of a time or timespan
     ** Int seconds
     **  The SECONDS part of a time or timespan
     ** Int frames
     **  The FRAMES part of a time or timespan
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(56);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addInt(sequenceId);
    message.addInt(hours);
    message.addInt(minutes);
    message.addInt(seconds);
    message.addInt(frames);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setContentId = function(resourcePath, dmxFolderId, dmxFileId, callback){
    /*
     ** setContentId(resourcePath, dmxFolderId, dmxFileId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringWide resourcePath
     **  A string representing the full path to a resource of the project. Resources in
     **  the root folder can be addressed directly like &quot;resource.mpv&quot;. The same resource
     **  in a subfolder named &quot;sub&quot; can be referenced by &quot;sub/resource.mpv&quot;
     ** Short dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Short dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(234);
    message.addStringWide(resourcePath);
    message.addShort(dmxFolderId);
    message.addShort(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setCueJumpCount = function(sequenceId, cueId, jumpCount, callback){
    /*
     ** setCueJumpCount(sequenceId, cueId, jumpCount, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     ** Int cueId
     **  A unique identifier for a cue.
     ** Int jumpCount
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(120);
    message.addInt(sequenceId);
    message.addInt(cueId);
    message.addInt(jumpCount);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setCueName = function(sequenceId, cueId, cueName, callback){
    /*
     ** setCueName(sequenceId, cueId, cueName, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     ** Int cueId
     **  A unique identifier for a cue.
     ** StringNarrow cueName
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(276);
    message.addInt(sequenceId);
    message.addInt(cueId);
    message.addStringNarrow(cueName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setCuePlayMode = function(sequenceId, cueId, playMode, callback){
    /*
     ** setCuePlayMode(sequenceId, cueId, playMode, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     ** Int cueId
     **  A unique identifier for a cue.
     ** Int playMode
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(53);
    message.addInt(sequenceId);
    message.addInt(cueId);
    message.addInt(playMode);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setDeviceAcceptDmxById = function(siteId, deviceId, acceptDmx, callback){
    /*
     ** setDeviceAcceptDmxById(siteId, deviceId, acceptDmx, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     ** Byte acceptDmx
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(49);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addByte(acceptDmx);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setDeviceActive = function(siteId, deviceId, callback){
    /*
     ** setDeviceActive(siteId, deviceId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(37);
    message.addInt(siteId);
    message.addInt(deviceId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setDeviceDmxAddressById = function(siteId, deviceId, index, id1, id2, callback){
    /*
     ** setDeviceDmxAddressById(siteId, deviceId, index, id1, id2, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     ** Int index
     **  no description available
     ** Int id1
     **  no description available
     ** Int id2
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(51);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addInt(index);
    message.addInt(id1);
    message.addInt(id2);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setDeviceSelection = function(siteId, deviceId, selectionMode, callback){
    /*
     ** setDeviceSelection(siteId, deviceId, selectionMode, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     ** SelectionMode selectionMode
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(86);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addInt(selectionMode);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setEnableClxController = function(forJogShuttle, enable, callback){
    /*
     ** setEnableClxController(forJogShuttle, enable, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** ClxHardware forJogShuttle
     **  The target coolux Hardware
     ** Bool enable
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(117);
    message.addByte(forJogShuttle);
    message.addBool(enable);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setEnableOutputForPicking = function(siteId, outputId, enableInputPicking, callback){
    /*
     ** setEnableOutputForPicking(siteId, outputId, enableInputPicking, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int outputId
     **  no description available
     ** Bool enableInputPicking
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(168);
    message.addInt(siteId);
    message.addInt(outputId);
    message.addBool(enableInputPicking);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setFolderSpreadToSite = function(projectPath, siteId, enable, callback){
    /*
     ** setFolderSpreadToSite(projectPath, siteId, enable, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow projectPath
     **  A path in the project tab. (&quot;somefolder/otherfolder&quot;) Leave empty for root
     **  directory.
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Bool enable
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(307);
    message.addStringNarrow(projectPath);
    message.addInt(siteId);
    message.addBool(enable);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setFolderSpreadToSiteByItemId = function(treeItemIndex, siteId, enable, callback){
    /*
     ** setFolderSpreadToSiteByItemId(treeItemIndex, siteId, enable, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int treeItemIndex
     **  TreeItemIDs are counted from top to bottom in the project tree. Nesting has no
     **  influence on counting order. The first item is 0 (always the project root
     **  folder)
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Bool enable
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(308);
    message.addInt(treeItemIndex);
    message.addInt(siteId);
    message.addBool(enable);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setGroupSelection = function(groupIndex, selectionMode, callback){
    /*
     ** setGroupSelection(groupIndex, selectionMode, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int groupIndex
     **  A index pointing to a group
     ** SelectionMode selectionMode
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(298);
    message.addInt(groupIndex);
    message.addInt(selectionMode);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setIgnoreNextCue = function(sequenceId, doIgnore, callback){
    /*
     ** setIgnoreNextCue(sequenceId, doIgnore, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     ** Byte doIgnore
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(55);
    message.addInt(sequenceId);
    message.addByte(doIgnore);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setIsBackup = function(enable, callback){
    /*
     ** setIsBackup(enable, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Bool enable
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(102);
    message.addBool(enable);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setIsSiteFullscreen = function(siteId, isFullscreen, callback){
    /*
     ** setIsSiteFullscreen(siteId, isFullscreen, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Byte isFullscreen
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(64);
    message.addInt(siteId);
    message.addByte(isFullscreen);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setIsSiteFullscreenByIp = function(ipAddress, isFullscreen, callback){
    /*
     ** setIsSiteFullscreenByIp(ipAddress, isFullscreen, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow ipAddress
     **  no description available
     ** Byte isFullscreen
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(65);
    message.addStringNarrow(ipAddress);
    message.addByte(isFullscreen);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setMediaAlphaChannelById = function(dmxFolderId, dmxFileId, useAlphaChannel, callback){
    /*
     ** setMediaAlphaChannelById(dmxFolderId, dmxFileId, useAlphaChannel, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     ** Bool useAlphaChannel
     **  Enables the use of the alpha channel
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(32);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addBool(useAlphaChannel);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setMediaAnisotropicFilteringById = function(dmxFolderId, dmxFileId, useFiltering, callback){
    /*
     ** setMediaAnisotropicFilteringById(dmxFolderId, dmxFileId, useFiltering, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     ** Bool useFiltering
     **  Anisotropic Filtering
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(29);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addBool(useFiltering);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setMediaDeinterlacingById = function(dmxFolderId, dmxFileId, deinterlacer, callback){
    /*
     ** setMediaDeinterlacingById(dmxFolderId, dmxFileId, deinterlacer, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     ** Int deinterlacer
     **  Sets the deinterlacing mode
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(28);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addInt(deinterlacer);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setMediaFrameBlendingById = function(dmxFolderId, dmxFileId, frameBlended, callback){
    /*
     ** setMediaFrameBlendingById(dmxFolderId, dmxFileId, frameBlended, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     ** Bool frameBlended
     **  Enable/Disable FluidFrame
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(27);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addBool(frameBlended);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setMediaMpegColourSpaceById = function(dmxFolderId, dmxFileId, useMpegColorSpace, callback){
    /*
     ** setMediaMpegColourSpaceById(dmxFolderId, dmxFileId, useMpegColorSpace, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     ** Bool useMpegColorSpace
     **  Convert MPEG color space to full 24bit
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(31);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addBool(useMpegColorSpace);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setMediaUnderscanById = function(dmxFolderId, dmxFileId, useUnderscan, callback){
    /*
     ** setMediaUnderscanById(dmxFolderId, dmxFileId, useUnderscan, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     ** Bool useUnderscan
     **  Underscan for media
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(30);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addBool(useUnderscan);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setNextCuePlayMode = function(sequenceId, playMode, callback){
    /*
     ** setNextCuePlayMode(sequenceId, playMode, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     ** Int playMode
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(54);
    message.addInt(sequenceId);
    message.addInt(playMode);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setNodeOfSiteIsAudioClockMaster = function(siteId, isMaster, callback){
    /*
     ** setNodeOfSiteIsAudioClockMaster(siteId, isMaster, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Bool isMaster
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(145);
    message.addInt(siteId);
    message.addBool(isMaster);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setParam = function(siteId, deviceId, parameterName, parameterValue, doSilent, doDirect, callback){
    /*
     ** setParam(siteId, deviceId, parameterName, parameterValue, doSilent, doDirect, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     ** StringNarrow parameterName
     **  The parameterName is a string that identifies a property of a device. (ASCII
     **  only)
     ** Double parameterValue
     **  A numeric value to a corresponding parameter.
     ** Bool doSilent
     **  doSilent (when set) prevents the activation of a parameter. It will stay
     **  inactive and won&#39;t be treated as an active value.
     ** Bool doDirect
     **  doDirect (when set) sets the value without using the default value smoothing
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(84);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addStringNarrow(parameterName);
    message.addDouble(parameterValue);
    message.addBool(doSilent);
    message.addBool(doDirect);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setParamActive = function(siteId, deviceId, parameterName, callback){
    /*
     ** setParamActive(siteId, deviceId, parameterName, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     ** StringNarrow parameterName
     **  The parameterName is a string that identifies a property of a device. (ASCII
     **  only)
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(38);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addStringNarrow(parameterName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setParamByteTuples = function(siteId, deviceId, parameterName, tupleDimension, tupleData, doSilent, doDirect, callback){
    /*
     ** setParamByteTuples(siteId, deviceId, parameterName, tupleDimension, tupleData, doSilent, doDirect, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     ** StringNarrow parameterName
     **  The parameterName is a string that identifies a property of a device. (ASCII
     **  only)
     ** Int tupleDimension
     **  The number of elements in this tuple
     ** ByteBuffer tupleData
     **  The data of the tuple collection
     ** Bool doSilent
     **  doSilent (when set) prevents the activation of a parameter. It will stay
     **  inactive and won&#39;t be treated as an active value.
     ** Bool doDirect
     **  doDirect (when set) sets the value without using the default value smoothing
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(115);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addStringNarrow(parameterName);
    message.addInt(tupleDimension);
    message.addByteBuffer(tupleData);
    message.addBool(doSilent);
    message.addBool(doDirect);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setParamLerpTime = function(siteId, deviceId, parameterName, smoothingTime, callback){
    /*
     ** setParamLerpTime(siteId, deviceId, parameterName, smoothingTime, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     ** StringNarrow parameterName
     **  The parameterName is a string that identifies a property of a device. (ASCII
     **  only)
     ** Int smoothingTime
     **  A time span in milliseconds that it takes for a parameter to fade to it&#39;s new
     **  value. A value of 0 means no parameter smoothing
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(232);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addStringNarrow(parameterName);
    message.addInt(smoothingTime);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setParamInSelection = function(parameterName, parameterValue, callback){
    /*
     ** setParamInSelection(parameterName, parameterValue, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow parameterName
     **  The parameterName is a string that identifies a property of a device. (ASCII
     **  only)
     ** Int parameterValue
     **  A numeric value to a corresponding parameter.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(58);
    message.addStringNarrow(parameterName);
    message.addInt(parameterValue);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setParamInSelectionDouble = function(parameterName, parameterValue, callback){
    /*
     ** setParamInSelectionDouble(parameterName, parameterValue, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow parameterName
     **  The parameterName is a string that identifies a property of a device. (ASCII
     **  only)
     ** Double parameterValue
     **  A numeric value to a corresponding parameter.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(99);
    message.addStringNarrow(parameterName);
    message.addDouble(parameterValue);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setParamOfKind = function(siteId, deviceId, parameterKindId, parameterValue, doSilent, doDirect, callback){
    /*
     ** setParamOfKind(siteId, deviceId, parameterKindId, parameterValue, doSilent, doDirect, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     ** ParamKind parameterKindId
     **  A numeric representation for a parameter. This is faster than using the text
     **  based identifier.
     ** Int parameterValue
     **  A numeric value to a corresponding parameter.
     ** Bool doSilent
     **  doSilent (when set) prevents the activation of a parameter. It will stay
     **  inactive and won&#39;t be treated as an active value.
     ** Bool doDirect
     **  doDirect (when set) sets the value without using the default value smoothing
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(39);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addInt(parameterKindId);
    message.addInt(parameterValue);
    message.addBool(doSilent);
    message.addBool(doDirect);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setParamOfKindDouble = function(siteId, deviceId, parameterKindId, parameterValue, doSilent, doDirect, callback){
    /*
     ** setParamOfKindDouble(siteId, deviceId, parameterKindId, parameterValue, doSilent, doDirect, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     ** ParamKind parameterKindId
     **  A numeric representation for a parameter. This is faster than using the text
     **  based identifier.
     ** Double parameterValue
     **  A numeric value to a corresponding parameter.
     ** Bool doSilent
     **  doSilent (when set) prevents the activation of a parameter. It will stay
     **  inactive and won&#39;t be treated as an active value.
     ** Bool doDirect
     **  doDirect (when set) sets the value without using the default value smoothing
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(85);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addInt(parameterKindId);
    message.addDouble(parameterValue);
    message.addBool(doSilent);
    message.addBool(doDirect);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setParamOfKindInSelection = function(parameterKindId, parameterValue, callback){
    /*
     ** setParamOfKindInSelection(parameterKindId, parameterValue, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** ParamKind parameterKindId
     **  A numeric representation for a parameter. This is faster than using the text
     **  based identifier.
     ** Int parameterValue
     **  A numeric value to a corresponding parameter.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(59);
    message.addInt(parameterKindId);
    message.addInt(parameterValue);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setParamOfKindInSelectionDouble = function(parameterKindId, parameterValue, callback){
    /*
     ** setParamOfKindInSelectionDouble(parameterKindId, parameterValue, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** ParamKind parameterKindId
     **  A numeric representation for a parameter. This is faster than using the text
     **  based identifier.
     ** Double parameterValue
     **  A numeric value to a corresponding parameter.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(100);
    message.addInt(parameterKindId);
    message.addDouble(parameterValue);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setParamRaw = function(siteId, deviceId, parameterName, parameterValue, doSilent, doDirect, callback){
    /*
     ** setParamRaw(siteId, deviceId, parameterName, parameterValue, doSilent, doDirect, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     ** StringNarrow parameterName
     **  The parameterName is a string that identifies a property of a device. (ASCII
     **  only)
     ** Int parameterValue
     **  A numeric value to a corresponding parameter.
     ** Bool doSilent
     **  doSilent (when set) prevents the activation of a parameter. It will stay
     **  inactive and won&#39;t be treated as an active value.
     ** Bool doDirect
     **  doDirect (when set) sets the value without using the default value smoothing
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(1);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addStringNarrow(parameterName);
    message.addInt(parameterValue);
    message.addBool(doSilent);
    message.addBool(doDirect);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setParamRelative = function(siteId, deviceId, parameterName, parameterValue, callback){
    /*
     ** setParamRelative(siteId, deviceId, parameterName, parameterValue, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     ** StringNarrow parameterName
     **  The parameterName is a string that identifies a property of a device. (ASCII
     **  only)
     ** Int parameterValue
     **  A numeric value to a corresponding parameter.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(98);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addStringNarrow(parameterName);
    message.addInt(parameterValue);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setParamRelativeExtended = function(siteId, deviceId, parameterName, parameterValue, doSilent, doDirect, callback){
    /*
     ** setParamRelativeExtended(siteId, deviceId, parameterName, parameterValue, doSilent, doDirect, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     ** StringNarrow parameterName
     **  The parameterName is a string that identifies a property of a device. (ASCII
     **  only)
     ** Double parameterValue
     **  A numeric value to a corresponding parameter.
     ** Bool doSilent
     **  doSilent (when set) prevents the activation of a parameter. It will stay
     **  inactive and won&#39;t be treated as an active value.
     ** Bool doDirect
     **  doDirect (when set) sets the value without using the default value smoothing
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(149);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addStringNarrow(parameterName);
    message.addDouble(parameterValue);
    message.addBool(doSilent);
    message.addBool(doDirect);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setParamRelativeInSelection = function(parameterName, parameterValue, callback){
    /*
     ** setParamRelativeInSelection(parameterName, parameterValue, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow parameterName
     **  The parameterName is a string that identifies a property of a device. (ASCII
     **  only)
     ** Int parameterValue
     **  A numeric value to a corresponding parameter.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(60);
    message.addStringNarrow(parameterName);
    message.addInt(parameterValue);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setParamRelativeInSelectionDouble = function(parameterName, parameterValue, callback){
    /*
     ** setParamRelativeInSelectionDouble(parameterName, parameterValue, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow parameterName
     **  The parameterName is a string that identifies a property of a device. (ASCII
     **  only)
     ** Double parameterValue
     **  A numeric value to a corresponding parameter.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(101);
    message.addStringNarrow(parameterName);
    message.addDouble(parameterValue);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setPlaylistEntryDurationByDmxId = function(playlistDmxFolderId, playlistdmxFileId, index, hours, minutes, seconds, frames, callback){
    /*
     ** setPlaylistEntryDurationByDmxId(playlistDmxFolderId, playlistdmxFileId, index, hours, minutes, seconds, frames, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int playlistDmxFolderId
     **  no description available
     ** Int playlistdmxFileId
     **  no description available
     ** Int index
     **  no description available
     ** Int hours
     **  The HOURS part of a time or timespan
     ** Int minutes
     **  The MINUTES part of a time or timespan
     ** Int seconds
     **  The SECONDS part of a time or timespan
     ** Int frames
     **  The FRAMES part of a time or timespan
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(202);
    message.addInt(playlistDmxFolderId);
    message.addInt(playlistdmxFileId);
    message.addInt(index);
    message.addInt(hours);
    message.addInt(minutes);
    message.addInt(seconds);
    message.addInt(frames);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setPlaylistEntryDurationByItemId = function(playlistItemId, index, hours, minutes, seconds, frames, callback){
    /*
     ** setPlaylistEntryDurationByItemId(playlistItemId, index, hours, minutes, seconds, frames, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int playlistItemId
     **  no description available
     ** Int index
     **  no description available
     ** Int hours
     **  The HOURS part of a time or timespan
     ** Int minutes
     **  The MINUTES part of a time or timespan
     ** Int seconds
     **  The SECONDS part of a time or timespan
     ** Int frames
     **  The FRAMES part of a time or timespan
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(204);
    message.addInt(playlistItemId);
    message.addInt(index);
    message.addInt(hours);
    message.addInt(minutes);
    message.addInt(seconds);
    message.addInt(frames);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setPlaylistEntryDurationByPath = function(playlistPath, index, hours, minutes, seconds, frames, callback){
    /*
     ** setPlaylistEntryDurationByPath(playlistPath, index, hours, minutes, seconds, frames, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow playlistPath
     **  A path in the project to a playlist.
     ** Int index
     **  no description available
     ** Int hours
     **  The HOURS part of a time or timespan
     ** Int minutes
     **  The MINUTES part of a time or timespan
     ** Int seconds
     **  The SECONDS part of a time or timespan
     ** Int frames
     **  The FRAMES part of a time or timespan
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(203);
    message.addStringNarrow(playlistPath);
    message.addInt(index);
    message.addInt(hours);
    message.addInt(minutes);
    message.addInt(seconds);
    message.addInt(frames);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setPlaylistEntryFadeOutTimeByDmxId = function(playlistDmxFolderId, playlistdmxFileId, index, hours, minutes, seconds, frames, callback){
    /*
     ** setPlaylistEntryFadeOutTimeByDmxId(playlistDmxFolderId, playlistdmxFileId, index, hours, minutes, seconds, frames, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int playlistDmxFolderId
     **  no description available
     ** Int playlistdmxFileId
     **  no description available
     ** Int index
     **  no description available
     ** Int hours
     **  The HOURS part of a time or timespan
     ** Int minutes
     **  The MINUTES part of a time or timespan
     ** Int seconds
     **  The SECONDS part of a time or timespan
     ** Int frames
     **  The FRAMES part of a time or timespan
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(205);
    message.addInt(playlistDmxFolderId);
    message.addInt(playlistdmxFileId);
    message.addInt(index);
    message.addInt(hours);
    message.addInt(minutes);
    message.addInt(seconds);
    message.addInt(frames);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setPlaylistEntryFadeOutTimeByItemId = function(playlistItemId, index, hours, minutes, seconds, frames, callback){
    /*
     ** setPlaylistEntryFadeOutTimeByItemId(playlistItemId, index, hours, minutes, seconds, frames, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int playlistItemId
     **  no description available
     ** Int index
     **  no description available
     ** Int hours
     **  The HOURS part of a time or timespan
     ** Int minutes
     **  The MINUTES part of a time or timespan
     ** Int seconds
     **  The SECONDS part of a time or timespan
     ** Int frames
     **  The FRAMES part of a time or timespan
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(207);
    message.addInt(playlistItemId);
    message.addInt(index);
    message.addInt(hours);
    message.addInt(minutes);
    message.addInt(seconds);
    message.addInt(frames);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setPlaylistEntryFadeOutTimeByPath = function(playlistPath, index, hours, minutes, seconds, frames, callback){
    /*
     ** setPlaylistEntryFadeOutTimeByPath(playlistPath, index, hours, minutes, seconds, frames, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow playlistPath
     **  A path in the project to a playlist.
     ** Int index
     **  no description available
     ** Int hours
     **  The HOURS part of a time or timespan
     ** Int minutes
     **  The MINUTES part of a time or timespan
     ** Int seconds
     **  The SECONDS part of a time or timespan
     ** Int frames
     **  The FRAMES part of a time or timespan
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(206);
    message.addStringNarrow(playlistPath);
    message.addInt(index);
    message.addInt(hours);
    message.addInt(minutes);
    message.addInt(seconds);
    message.addInt(frames);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setPlaylistEntryIndexByDmxId = function(playlistDmxFolderId, playlistdmxFileId, index, newIndex, callback){
    /*
     ** setPlaylistEntryIndexByDmxId(playlistDmxFolderId, playlistdmxFileId, index, newIndex, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int playlistDmxFolderId
     **  no description available
     ** Int playlistdmxFileId
     **  no description available
     ** Int index
     **  no description available
     ** Int newIndex
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(199);
    message.addInt(playlistDmxFolderId);
    message.addInt(playlistdmxFileId);
    message.addInt(index);
    message.addInt(newIndex);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setPlaylistEntryIndexByItemId = function(playlistItemId, index, newIndex, callback){
    /*
     ** setPlaylistEntryIndexByItemId(playlistItemId, index, newIndex, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int playlistItemId
     **  no description available
     ** Int index
     **  no description available
     ** Int newIndex
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(201);
    message.addInt(playlistItemId);
    message.addInt(index);
    message.addInt(newIndex);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setPlaylistEntryIndexByPath = function(playlistPath, index, newIndex, callback){
    /*
     ** setPlaylistEntryIndexByPath(playlistPath, index, newIndex, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow playlistPath
     **  A path in the project to a playlist.
     ** Int index
     **  no description available
     ** Int newIndex
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(200);
    message.addStringNarrow(playlistPath);
    message.addInt(index);
    message.addInt(newIndex);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setPlaylistEntryInPointByDmxId = function(playlistDmxFolderId, playlistdmxFileId, index, hours, minutes, seconds, frames, callback){
    /*
     ** setPlaylistEntryInPointByDmxId(playlistDmxFolderId, playlistdmxFileId, index, hours, minutes, seconds, frames, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int playlistDmxFolderId
     **  no description available
     ** Int playlistdmxFileId
     **  no description available
     ** Int index
     **  no description available
     ** Int hours
     **  The HOURS part of a time or timespan
     ** Int minutes
     **  The MINUTES part of a time or timespan
     ** Int seconds
     **  The SECONDS part of a time or timespan
     ** Int frames
     **  The FRAMES part of a time or timespan
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(208);
    message.addInt(playlistDmxFolderId);
    message.addInt(playlistdmxFileId);
    message.addInt(index);
    message.addInt(hours);
    message.addInt(minutes);
    message.addInt(seconds);
    message.addInt(frames);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setPlaylistEntryInPointByItemId = function(playlistItemId, index, hours, minutes, seconds, frames, callback){
    /*
     ** setPlaylistEntryInPointByItemId(playlistItemId, index, hours, minutes, seconds, frames, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int playlistItemId
     **  no description available
     ** Int index
     **  no description available
     ** Int hours
     **  The HOURS part of a time or timespan
     ** Int minutes
     **  The MINUTES part of a time or timespan
     ** Int seconds
     **  The SECONDS part of a time or timespan
     ** Int frames
     **  The FRAMES part of a time or timespan
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(211);
    message.addInt(playlistItemId);
    message.addInt(index);
    message.addInt(hours);
    message.addInt(minutes);
    message.addInt(seconds);
    message.addInt(frames);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setPlaylistEntryInPointByPath = function(playlistPath, index, hours, minutes, seconds, frames, callback){
    /*
     ** setPlaylistEntryInPointByPath(playlistPath, index, hours, minutes, seconds, frames, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow playlistPath
     **  A path in the project to a playlist.
     ** Int index
     **  no description available
     ** Int hours
     **  The HOURS part of a time or timespan
     ** Int minutes
     **  The MINUTES part of a time or timespan
     ** Int seconds
     **  The SECONDS part of a time or timespan
     ** Int frames
     **  The FRAMES part of a time or timespan
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(210);
    message.addStringNarrow(playlistPath);
    message.addInt(index);
    message.addInt(hours);
    message.addInt(minutes);
    message.addInt(seconds);
    message.addInt(frames);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setPlaylistEntryOutPointByDmxId = function(playlistDmxFolderId, playlistdmxFileId, index, hours, minutes, seconds, frames, callback){
    /*
     ** setPlaylistEntryOutPointByDmxId(playlistDmxFolderId, playlistdmxFileId, index, hours, minutes, seconds, frames, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int playlistDmxFolderId
     **  no description available
     ** Int playlistdmxFileId
     **  no description available
     ** Int index
     **  no description available
     ** Int hours
     **  The HOURS part of a time or timespan
     ** Int minutes
     **  The MINUTES part of a time or timespan
     ** Int seconds
     **  The SECONDS part of a time or timespan
     ** Int frames
     **  The FRAMES part of a time or timespan
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(212);
    message.addInt(playlistDmxFolderId);
    message.addInt(playlistdmxFileId);
    message.addInt(index);
    message.addInt(hours);
    message.addInt(minutes);
    message.addInt(seconds);
    message.addInt(frames);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setPlaylistEntryOutPointByItemId = function(playlistItemId, index, hours, minutes, seconds, frames, callback){
    /*
     ** setPlaylistEntryOutPointByItemId(playlistItemId, index, hours, minutes, seconds, frames, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int playlistItemId
     **  no description available
     ** Int index
     **  no description available
     ** Int hours
     **  The HOURS part of a time or timespan
     ** Int minutes
     **  The MINUTES part of a time or timespan
     ** Int seconds
     **  The SECONDS part of a time or timespan
     ** Int frames
     **  The FRAMES part of a time or timespan
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(214);
    message.addInt(playlistItemId);
    message.addInt(index);
    message.addInt(hours);
    message.addInt(minutes);
    message.addInt(seconds);
    message.addInt(frames);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setPlaylistEntryOutPointByPath = function(playlistPath, index, hours, minutes, seconds, frames, callback){
    /*
     ** setPlaylistEntryOutPointByPath(playlistPath, index, hours, minutes, seconds, frames, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow playlistPath
     **  A path in the project to a playlist.
     ** Int index
     **  no description available
     ** Int hours
     **  The HOURS part of a time or timespan
     ** Int minutes
     **  The MINUTES part of a time or timespan
     ** Int seconds
     **  The SECONDS part of a time or timespan
     ** Int frames
     **  The FRAMES part of a time or timespan
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(213);
    message.addStringNarrow(playlistPath);
    message.addInt(index);
    message.addInt(hours);
    message.addInt(minutes);
    message.addInt(seconds);
    message.addInt(frames);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setPlaylistEntryNoteByDmxId = function(playlistDmxFolderId, playlistdmxFileId, index, pNote, callback){
    /*
     ** setPlaylistEntryNoteByDmxId(playlistDmxFolderId, playlistdmxFileId, index, pNote, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int playlistDmxFolderId
     **  no description available
     ** Int playlistdmxFileId
     **  no description available
     ** Int index
     **  no description available
     ** StringNarrow pNote
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(218);
    message.addInt(playlistDmxFolderId);
    message.addInt(playlistdmxFileId);
    message.addInt(index);
    message.addStringNarrow(pNote);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setPlaylistEntryNoteByItemId = function(playlistItemId, index, pNote, callback){
    /*
     ** setPlaylistEntryNoteByItemId(playlistItemId, index, pNote, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int playlistItemId
     **  no description available
     ** Int index
     **  no description available
     ** StringNarrow pNote
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(220);
    message.addInt(playlistItemId);
    message.addInt(index);
    message.addStringNarrow(pNote);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setPlaylistEntryNoteByPath = function(playlistPath, index, pNote, callback){
    /*
     ** setPlaylistEntryNoteByPath(playlistPath, index, pNote, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow playlistPath
     **  A path in the project to a playlist.
     ** Int index
     **  no description available
     ** StringNarrow pNote
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(219);
    message.addStringNarrow(playlistPath);
    message.addInt(index);
    message.addStringNarrow(pNote);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setPlaylistEntryTransitionByDmxId = function(playlistDmxFolderId, playlistdmxFileId, index, fadeFxId, callback){
    /*
     ** setPlaylistEntryTransitionByDmxId(playlistDmxFolderId, playlistdmxFileId, index, fadeFxId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int playlistDmxFolderId
     **  no description available
     ** Int playlistdmxFileId
     **  no description available
     ** Int index
     **  no description available
     ** Int fadeFxId
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(215);
    message.addInt(playlistDmxFolderId);
    message.addInt(playlistdmxFileId);
    message.addInt(index);
    message.addInt(fadeFxId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setPlaylistEntryTransitionByItemId = function(playlistItemId, index, fadeFxId, callback){
    /*
     ** setPlaylistEntryTransitionByItemId(playlistItemId, index, fadeFxId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int playlistItemId
     **  no description available
     ** Int index
     **  no description available
     ** Int fadeFxId
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(217);
    message.addInt(playlistItemId);
    message.addInt(index);
    message.addInt(fadeFxId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setPlaylistEntryTransitionByPath = function(playlistPath, index, fadeFxId, callback){
    /*
     ** setPlaylistEntryTransitionByPath(playlistPath, index, fadeFxId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow playlistPath
     **  A path in the project to a playlist.
     ** Int index
     **  no description available
     ** Int fadeFxId
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(216);
    message.addStringNarrow(playlistPath);
    message.addInt(index);
    message.addInt(fadeFxId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setResourceNameByDmxId = function(dmxFolderId, dmxFileId, newResourceName, callback){
    /*
     ** setResourceNameByDmxId(dmxFolderId, dmxFileId, newResourceName, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     ** StringNarrow newResourceName
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(262);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addStringNarrow(newResourceName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setResourceNameByItemIndex = function(treeItemIndex, newResourceName, callback){
    /*
     ** setResourceNameByItemIndex(treeItemIndex, newResourceName, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int treeItemIndex
     **  TreeItemIDs are counted from top to bottom in the project tree. Nesting has no
     **  influence on counting order. The first item is 0 (always the project root
     **  folder)
     ** StringNarrow newResourceName
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(263);
    message.addInt(treeItemIndex);
    message.addStringNarrow(newResourceName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setResourceNameByPath = function(resourcePath, newResourceName, callback){
    /*
     ** setResourceNameByPath(resourcePath, newResourceName, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow resourcePath
     **  A string representing the full path to a resource of the project. Resources in
     **  the root folder can be addressed directly like &quot;resource.mpv&quot;. The same resource
     **  in a subfolder named &quot;sub&quot; can be referenced by &quot;sub/resource.mpv&quot;
     ** StringNarrow newResourceName
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(261);
    message.addStringNarrow(resourcePath);
    message.addStringNarrow(newResourceName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setRouteInputToAutomation = function(siteId, enableInputAutomation, callback){
    /*
     ** setRouteInputToAutomation(siteId, enableInputAutomation, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Bool enableInputAutomation
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(167);
    message.addInt(siteId);
    message.addBool(enableInputAutomation);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setRouteInputToLayer = function(siteId, enableInputRouting, callback){
    /*
     ** setRouteInputToLayer(siteId, enableInputRouting, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Bool enableInputRouting
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(166);
    message.addInt(siteId);
    message.addBool(enableInputRouting);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setSequenceCueJumpTargetTime = function(sequenceId, cueId, hours, minutes, seconds, frames, callback){
    /*
     ** setSequenceCueJumpTargetTime(sequenceId, cueId, hours, minutes, seconds, frames, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     ** Int cueId
     **  A unique identifier for a cue.
     ** Int hours
     **  The HOURS part of a time or timespan
     ** Int minutes
     **  The MINUTES part of a time or timespan
     ** Int seconds
     **  The SECONDS part of a time or timespan
     ** Int frames
     **  The FRAMES part of a time or timespan
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(119);
    message.addInt(sequenceId);
    message.addInt(cueId);
    message.addInt(hours);
    message.addInt(minutes);
    message.addInt(seconds);
    message.addInt(frames);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setSequenceCueWaitTime = function(sequenceId, cueId, hours, minutes, seconds, frames, callback){
    /*
     ** setSequenceCueWaitTime(sequenceId, cueId, hours, minutes, seconds, frames, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     ** Int cueId
     **  A unique identifier for a cue.
     ** Int hours
     **  The HOURS part of a time or timespan
     ** Int minutes
     **  The MINUTES part of a time or timespan
     ** Int seconds
     **  The SECONDS part of a time or timespan
     ** Int frames
     **  The FRAMES part of a time or timespan
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(118);
    message.addInt(sequenceId);
    message.addInt(cueId);
    message.addInt(hours);
    message.addInt(minutes);
    message.addInt(seconds);
    message.addInt(frames);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setSequenceSelection = function(sequenceId, callback){
    /*
     ** setSequenceSelection(sequenceId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(299);
    message.addInt(sequenceId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setSequenceTimeCodeMode = function(sequenceId, timeCodeMode, callback){
    /*
     ** setSequenceTimeCodeMode(sequenceId, timeCodeMode, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     ** SequenceSmpteMode timeCodeMode
     **  The mode for the SMTPE link: 0 (None), 1 (Send) or 2 (Receive)
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(41);
    message.addInt(sequenceId);
    message.addInt(timeCodeMode);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setSequenceTimeCodeOffset = function(sequenceId, hours, minutes, seconds, frames, callback){
    /*
     ** setSequenceTimeCodeOffset(sequenceId, hours, minutes, seconds, frames, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     ** Int hours
     **  The HOURS part of a time or timespan
     ** Int minutes
     **  The MINUTES part of a time or timespan
     ** Int seconds
     **  The SECONDS part of a time or timespan
     ** Int frames
     **  The FRAMES part of a time or timespan
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(42);
    message.addInt(sequenceId);
    message.addInt(hours);
    message.addInt(minutes);
    message.addInt(seconds);
    message.addInt(frames);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setSequenceTimeCodeStopAction = function(sequenceId, stopAction, callback){
    /*
     ** setSequenceTimeCodeStopAction(sequenceId, stopAction, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     ** SequenceSmpteStopMode stopAction
     **  Determines what should happen when the incoming timecode stops
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(43);
    message.addInt(sequenceId);
    message.addInt(stopAction);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setSequenceTransparency = function(sequenceId, transparency, callback){
    /*
     ** setSequenceTransparency(sequenceId, transparency, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     ** Int transparency
     **  The numeric visibility from 0 (totally opaque) to 255 (fully visible)
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(8);
    message.addInt(sequenceId);
    message.addInt(transparency);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setSequenceTransportMode = function(sequenceId, transportMode, callback){
    /*
     ** setSequenceTransportMode(sequenceId, transportMode, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     ** TransportMode transportMode
     **  Playback status of a sequence. Possible values are 1 (Play), 2 (Stop) or 3
     **  (Pause)
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(3);
    message.addInt(sequenceId);
    message.addInt(transportMode);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setShowCursorInFullscreen = function(siteId, showCursor, callback){
    /*
     ** setShowCursorInFullscreen(siteId, showCursor, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Bool showCursor
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(138);
    message.addInt(siteId);
    message.addBool(showCursor);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setSiteAcceptDmxById = function(siteId, acceptDmx, callback){
    /*
     ** setSiteAcceptDmxById(siteId, acceptDmx, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Byte acceptDmx
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(50);
    message.addInt(siteId);
    message.addByte(acceptDmx);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setSiteActive = function(siteId, callback){
    /*
     ** setSiteActive(siteId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(36);
    message.addInt(siteId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setSiteDmxAddressById = function(siteId, index, id1, id2, callback){
    /*
     ** setSiteDmxAddressById(siteId, index, id1, id2, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int index
     **  no description available
     ** Int id1
     **  no description available
     ** Int id2
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(235);
    message.addInt(siteId);
    message.addInt(index);
    message.addInt(id1);
    message.addInt(id2);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setSiteIpById = function(siteId, ip, callback){
    /*
     ** setSiteIpById(siteId, Ip, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** StringNarrow ip
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(71);
    message.addInt(siteId);
    message.addStringNarrow(ip);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setSpareFromSpread = function(siteId, spareFromSpread, callback){
    /*
     ** setSpareFromSpread(siteId, spareFromSpread, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Bool spareFromSpread
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(104);
    message.addInt(siteId);
    message.addBool(spareFromSpread);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setSublayerParamOfKindDouble = function(siteId, deviceId, sublayerId, parameterKindId, parameterValue, doSilent, doDirect, callback){
    /*
     ** setSublayerParamOfKindDouble(siteId, deviceId, sublayerId, parameterKindId, parameterValue, doSilent, doDirect, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     ** Int sublayerId
     **  no description available
     ** ParamKind parameterKindId
     **  A numeric representation for a parameter. This is faster than using the text
     **  based identifier.
     ** Double parameterValue
     **  A numeric value to a corresponding parameter.
     ** Bool doSilent
     **  doSilent (when set) prevents the activation of a parameter. It will stay
     **  inactive and won&#39;t be treated as an active value.
     ** Bool doDirect
     **  doDirect (when set) sets the value without using the default value smoothing
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(274);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addInt(sublayerId);
    message.addInt(parameterKindId);
    message.addDouble(parameterValue);
    message.addBool(doSilent);
    message.addBool(doDirect);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setText = function(dmxFolderId, dmxFileId, text, callback){
    /*
     ** setText(dmxFolderId, dmxFileId, text, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     ** StringNarrow text
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(33);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addStringNarrow(text);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setTextCenterOnTexture = function(dmxFolderId, dmxFileId, centerOnTexture, callback){
    /*
     ** setTextCenterOnTexture(dmxFolderId, dmxFileId, centerOnTexture, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     ** Byte centerOnTexture
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(68);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addByte(centerOnTexture);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setTextFormatted = function(dmxFolderId, dmxFileId, text, isFormatted, callback){
    /*
     ** setTextFormatted(dmxFolderId, dmxFileId, text, isFormatted, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     ** StringNarrow text
     **  no description available
     ** Bool isFormatted
     **  True: This text contains formatting that should be applied to the text asset.
     **  False: Set the raw text only.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(293);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addStringNarrow(text);
    message.addBool(isFormatted);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setTextFormattedWide = function(dmxFolderId, dmxFileId, text, isFormatted, callback){
    /*
     ** setTextFormattedWide(dmxFolderId, dmxFileId, text, isFormatted, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     ** StringWide text
     **  no description available
     ** Bool isFormatted
     **  True: This text contains formatting that should be applied to the text asset.
     **  False: Set the raw text only.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(294);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addStringWide(text);
    message.addBool(isFormatted);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setTextProperties = function(dmxFolderId, dmxFileId, fontFamily, size, style, alignment, colorRed, colorGreen, colorBlue, callback){
    /*
     ** setTextProperties(dmxFolderId, dmxFileId, FontFamily, size, style, alignment, colorRed, colorGreen, colorBlue, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     ** StringNarrow fontFamily
     **  no description available
     ** Int size
     **  no description available
     ** Byte style
     **  no description available
     ** Byte alignment
     **  no description available
     ** Byte colorRed
     **  no description available
     ** Byte colorGreen
     **  no description available
     ** Byte colorBlue
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(67);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addStringNarrow(fontFamily);
    message.addInt(size);
    message.addByte(style);
    message.addByte(alignment);
    message.addByte(colorRed);
    message.addByte(colorGreen);
    message.addByte(colorBlue);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setTextTextureSize = function(dmxFolderId, dmxFileId, width, height, callback){
    /*
     ** setTextTextureSize(dmxFolderId, dmxFileId, width, height, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     ** Int width
     **  no description available
     ** Int height
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(66);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addInt(width);
    message.addInt(height);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setTextWide = function(dmxFolderId, dmxFileId, text, callback){
    /*
     ** setTextWide(dmxFolderId, dmxFileId, text, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     ** StringWide text
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(70);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addStringWide(text);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setWatchedFolderProperty = function(projectPath, watchFolderProperty, enable, callback){
    /*
     ** setWatchedFolderProperty(projectPath, watchFolderProperty, enable, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow projectPath
     **  A path in the project tab. (&quot;somefolder/otherfolder&quot;) Leave empty for root
     **  directory.
     ** WatchFolderProperty watchFolderProperty
     **  A trait of a watchfolder.
     ** Bool enable
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(305);
    message.addStringNarrow(projectPath);
    message.addInt(watchFolderProperty);
    message.addBool(enable);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.setWatchedFolderPropertyByItemId = function(treeItemIndex, watchFolderProperty, enable, callback){
    /*
     ** setWatchedFolderPropertyByItemId(treeItemIndex, watchFolderProperty, enable, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int treeItemIndex
     **  TreeItemIDs are counted from top to bottom in the project tree. Nesting has no
     **  influence on counting order. The first item is 0 (always the project root
     **  folder)
     ** WatchFolderProperty watchFolderProperty
     **  A trait of a watchfolder.
     ** Bool enable
     **  no description available
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(306);
    message.addInt(treeItemIndex);
    message.addInt(watchFolderProperty);
    message.addBool(enable);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.spreadAll = function(callback){
    /*
     ** spreadAll(callback, callback)
     **  no description available
     **
     ** Arguments:
     **
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(22);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.spreadMediaById = function(dmxFolderId, dmxFileId, callback){
    /*
     ** spreadMediaById(dmxFolderId, dmxFileId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(23);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.spreadMeshById = function(dmxFolderId, dmxFileId, callback){
    /*
     ** spreadMeshById(dmxFolderId, dmxFileId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int dmxFolderId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FOLDER part. The Widget Designer also
     **  takes advantage of this kind of addressing of resources.
     ** Int dmxFileId
     **  Resources can have a identifier pair (Folder and File ID) for external control
     **  like DMX,Art-net and alike. This is the FILE part. The dmxFileId identifier is
     **  unique in each dmx-folder. The Widget Designer also takes advantage of this kind
     **  of addressing of resources.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(24);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.spreadResource = function(resourcePath, callback){
    /*
     ** spreadResource(resourcePath, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringWide resourcePath
     **  A string representing the full path to a resource of the project. Resources in
     **  the root folder can be addressed directly like &quot;resource.mpv&quot;. The same resource
     **  in a subfolder named &quot;sub&quot; can be referenced by &quot;sub/resource.mpv&quot;
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(148);
    message.addStringWide(resourcePath);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.spreadToSite = function(resourcePath, siteId, callback){
    /*
     ** spreadToSite(resourcePath, siteId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** StringNarrow resourcePath
     **  A string representing the full path to a resource of the project. Resources in
     **  the root folder can be addressed directly like &quot;resource.mpv&quot;. The same resource
     **  in a subfolder named &quot;sub&quot; can be referenced by &quot;sub/resource.mpv&quot;
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(297);
    message.addStringNarrow(resourcePath);
    message.addInt(siteId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.storeActive = function(sequenceId, callback){
    /*
     ** storeActive(sequenceId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(25);
    message.addInt(sequenceId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.storeActiveDevice = function(sequenceId, siteId, deviceId, callback){
    /*
     ** storeActiveDevice(sequenceId, siteId, deviceId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(279);
    message.addInt(sequenceId);
    message.addInt(siteId);
    message.addInt(deviceId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.storeActiveParam = function(sequenceId, siteId, deviceId, parameterName, callback){
    /*
     ** storeActiveParam(sequenceId, siteId, deviceId, parameterName, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     ** Int deviceId
     **  The deviceId is a per-site unique number that identifies a kind of layer,
     **  camera, output or a dmx-device.
     ** StringNarrow parameterName
     **  The parameterName is a string that identifies a property of a device. (ASCII
     **  only)
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(280);
    message.addInt(sequenceId);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addStringNarrow(parameterName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.storeActiveSite = function(sequenceId, siteId, callback){
    /*
     ** storeActiveSite(sequenceId, siteId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(278);
    message.addInt(sequenceId);
    message.addInt(siteId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.storeActiveToTime = function(sequenceId, hours, minutes, seconds, frames, callback){
    /*
     ** storeActiveToTime(sequenceId, hours, minutes, seconds, frames, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int sequenceId
     **  The unique identifier for a sequence. The first/default sequence is 1
     ** Int hours
     **  The HOURS part of a time or timespan
     ** Int minutes
     **  The MINUTES part of a time or timespan
     ** Int seconds
     **  The SECONDS part of a time or timespan
     ** Int frames
     **  The FRAMES part of a time or timespan
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(26);
    message.addInt(sequenceId);
    message.addInt(hours);
    message.addInt(minutes);
    message.addInt(seconds);
    message.addInt(frames);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};
PBAuto.prototype.toggleFullscreen = function(siteId, callback){
    /*
     ** toggleFullscreen(siteId, callback)
     **  no description available
     **
     ** Arguments:
     **
     ** Int siteId
     **  The siteId is a unique number that identifies a manager, player or server in a
     **  project. Sites can also be created without assigning them to a specific physical
     **  machine. The site id can be found when looking at the Master in the Devices Tab
     **
     ** Return values:
     **
     */
    var message = new PBUtilBytesNetwork();
    message.addShort(17);
    message.addInt(siteId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
};


module.exports = PBAuto;
