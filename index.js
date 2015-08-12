var net = require('net');
var http = require('http');
var request = require('request');

var eAutoCmdError =  -1;
var eAutoCmdNone = 0;
var eAutoCmdAssignResource = 2;
var eAutoCmdSetSequenceTransportMode = 3;
var eAutoCmdMoveSequenceToCue = 4;
var eAutoCmdMoveSequenceToTime = 5;
var eAutoCmdMoveSequenceToLastNextFrame = 6;
var eAutoCmdMoveSequenceToLastNextCue = 7;
var eAutoCmdSetSequenceTransparency = 8;
var eAutoCmdResetAll = 9;
var eAutoCmdResetSite = 10;
var eAutoCmdResetDevice = 11;
var eAutoCmdResetParam = 12;
var eAutoCmdClearAllActive = 13;
var eAutoCmdClearActiveSite = 14;
var eAutoCmdClearActiveDevice = 15;
var eAutoCmdClearActiveParam = 16;
var eAutoCmdToggleFullscreen = 17;
var eAutoCmdSetParamRelative = 18;
var eAutoCmdAddContent = 19;
var eAutoCmdRemoveMediaById = 20;
var eAutoCmdRemoveMeshById = 21;
var eAutoCmdSpreadAll = 22;
var eAutoCmdSpreadMediaById = 23;
var eAutoCmdSpreadMeshById = 24;
var eAutoCmdStoreActive = 25;
var eAutoCmdStoreActiveToTime = 26;
var eAutoCmdSetMediaFrameBlendingById = 27;
var eAutoCmdSetMediaDeinterlacingById = 28;
var eAutoCmdSetMediaAnisotropicFilteringById = 29;
var eAutoCmdSetMediaUnderscanById = 30;
var eAutoCmdSetMediaMpegColourSpaceById = 31;
var eAutoCmdSetMediaAlphaChannelById = 32;
var eAutoCmdSetText = 33;
var eAutoCmdRemoveInconsistent = 34;
var eAutoCmdActivateAll = 35;
var eAutoCmdActivateSite = 36;
var eAutoCmdActivateDevice = 37;
var eAutoCmdActivateParam = 38;
var eAutoCmdSetParamOfKind = 39;
var eAutoCmdApplyPreset = 40;
var eAutoCmdSetSequenceTimeCodeMode = 41;
var eAutoCmdSetSequenceTimeCodeOffset = 42;
var eAutoCmdSetSequenceTimeCodeStopAction = 43;
var eAutoCmdReloadMediaById = 44;
var eAutoCmdReloadMeshById = 45;
var eAutoCmdLoadProject = 46;
var eAutoCmdCloseProject = 47;
var eAutoCmdClearSelection = 48;
var eAutoCmdSetDeviceAcceptDmxById = 49;
var eAutoCmdSetSiteAcceptDmxById = 50;
var eAutoCmdSetDeviceDmxAddressById = 51;
var eAutoCmdAddTextInput = 52;
var eAutoCmdSetCuePlayMode = 53;
var eAutoCmdSetNextCuePlayMode = 54;
var eAutoCmdIgnoreNextCue = 55;
var eAutoCmdSetContentAtTime = 56;
var eAutoCmdSetChannelEvents = 57;
var eAutoCmdSetParamInSelection = 58;
var eAutoCmdSetParamOfKindInSelection = 59;
var eAutoCmdSetParamRelativeInSelection = 60;
var eAutoCmdAssignResourceToSelection = 61;
var eAutoCmdSaveProject = 62;
var eAutoCmdAddContentFromLocalNode = 63;
var eAutoCmdChangeFullscreenStateById = 64;
var eAutoCmdChangeFullscreenStateByIp = 65;
var eAutoCmdSetTextTextureSize = 66;
var eAutoCmdSetTextProperties = 67;
var eAutoCmdSetTextCenterOnTexture = 68;
var eAutoCmdAddTextInputWide = 69;
var eAutoCmdSetTextWide = 70;
var eAutoCmdSetSiteIp = 71;
var eAutoCmdGetSequenceTransportMode = 72;
var eAutoCmdGetSequenceNowTime = 73;
var eAutoCmdIsLayerSelected = 74;
var eAutoCmdGetAllSelectedLayers = 75;
var eAutoCmdGetAllMediaInProject = 76;
var eAutoCmdGetClipRemainingTime = 77;
var eAutoCmdGetRemainingTimeUntilNextCue = 78;
var eAutoCmdGetParamValue = 79;
var eAutoCmdGetParamKindValue = 80;
var eAutoCmdGetNumSelectedLayers = 81;
var eAutoCmdGetNumMediaInProject = 82;
var eAutoCmdAddFolderToProject = 83;
var eAutoCmdSetParamDouble = 84;
var eAutoCmdSetParamOfKindDouble = 85;
var eAutoCmdSetDeviceSelection = 86;
var eAutoCmdAddContentToFolder = 87;
var eAutoCmdSetClxPlaybackFader = 90;
var eAutoCmdGetSequenceTransparency = 91;
var eAutoCmdSetClxCueMapping = 92;
var eAutoCmdAddCue = 93;
var eAutoCmdRemoveCueById = 94;
var eAutoCmdRemoveAllCues = 95;
var eAutoCmdAddGraphicLayer = 96;
var eAutoCmdRemoveGraphicLayer = 97;
var eAutoCmdSetParamRelativeDouble = 98;
var eAutoCmdSetParamInSelectionDouble = 99;
var eAutoCmdSetParamOfKindInSelectionDouble = 100;
var eAutoCmdSetParamRelativeInSelectionDouble = 101;
var eAutoCmdBackupMode = 102;
var eAutoCmdApplyView = 103;
var eAutoCmdSetSpareFromSpread = 104;
var eAutoCmdGetParamMedia = 105;
var eAutoCmdGetParamObject = 106;
var eAutoCmdAddMediaIncrementID = 107;
var eAutoCmdGetMediaTransportMode = 108;
var eAutoCmdIsSiteConnected = 109;
var eAutoCmdAddVideoLayer = 110;
var eAutoCmdMoveLayerUp = 111;
var eAutoCmdMoveLayerDown = 112;
var eAutoCmdMoveLayerToFirstPosition = 113;
var eAutoCmdMoveLayerToLastPosition = 114;
var eAutoCmdSetParamArrayBytes = 115;
var eAutoCmdGetClxControllerIsEnabled = 116;
var eAutoCmdSetClxControllerIsEnabled = 117;
var eAutoCmdSetSequenceCueWaitTime = 118;
var eAutoCmdSetSequenceCueJumpTargetTime = 119;
var eAutoCmdSetSequenceCueJumpCount = 120;
var eAutoCmdResetSequenceCueTriggerCount = 121;
var eAutoCmdAddFolderToProjectWithPath = 122;
var eAutoCmdRemoveFolderFromProject = 123;
var eAutoCmdAddContentFolder = 124;
var eAutoCmdRemoveContentByName = 125;
var eAutoCmdRemoveAllContent = 126;
var eAutoCmdGetContentIsConsistent = 127;
var eAutoCmdGetContentIsConsistentByName = 128;
var eAutoCmdAssignResourceByName = 129;
var eAutoCmdCreateSequence = 130;
var eAutoCmdRemoveSequence = 131;
var eAutoCmdGetParamByteTuples = 132;
var eAutoCmdAddContentFolderFromLocalNode = 133;
var eAutoCmdAddContentFolderFromLocalNodeToFolder = 134;
var eAutoCmdAddContentFromLocalNodeToFolder = 135;
var eAutoCmdSendMouseInput = 136;
var eAutoCmdSendKeyboardInput = 137;
var eAutoCmdSetShowCursorInFullscreen = 138;
var eAutoCmdSetBrowserURL = 139;
var eAutoCmdSetBrowserURLByName = 140;
var eAutoCmdRefreshBrowserView = 141;
var eAutoCmdSetBrowserSize = 142;
var eAutoCmdSetBrowserSizeByName = 143;
var eAutoCmdMoveContentToFolder = 144;
var eAutoCmdSetNodeOfSiteIsAudioClockMaster = 145;

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

function PBUtilBytesNetwork() {
    this.bytes = new Array();
}

PBUtilBytesNetwork.prototype.addBoolean = function (val) {
    if(val)
    {
        this.bytes.push(1);
    }
    else
    {
        this.bytes.push(0);
    }
};
PBUtilBytesNetwork.prototype.addByte = function (val) {
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
};
PBUtilBytesNetwork.prototype.addShort = function (val) {
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
};
PBUtilBytesNetwork.prototype.addInt = function (val) {
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
};
PBUtilBytesNetwork.prototype.addDouble = function (val) {
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
};
PBUtilBytesNetwork.prototype.addStringNarrow = function (val) {
    var strLength = val.length;
    this.addShort(strLength);
    var oldLength = this.bytes.length;
    for(var i = 0; i < strLength; i++)
    {
        this.bytes[oldLength+i] = val.charCodeAt(i);
    }
};
PBUtilBytesNetwork.prototype.addStringWide = function (val) {
    var strLength = val.length;
    this.addShort(strLength);
    for(var i = 0; i < strLength; i++)
    {
        this.addShort(val.charCodeAt(i));
    }
};
PBUtilBytesNetwork.prototype.addByteBuffer = function (val) {
    var bufferLength = val.length;
    this.addInt(bufferLength);
    for(var i = 0; i < bufferLength; i++)
    {
        this.bytes.push(val[i]);
    }
};
PBUtilBytesNetwork.prototype.getRawBytes = function () {
    return this.bytes;
};
PBUtilBytesNetwork.prototype.printOutBytes = function () {
    var i = 0;
    while(i < this.bytes.length)
    {
        console.log(this.bytes[i++]);
    }
    return this.bytes;
};

function PbUtilBytesHost(rawNetworkBytes) {
    this.deliveredByteCt = 0;
    this.bytes = rawNetworkBytes.slice(0, rawNetworkBytes.length);
}
PbUtilBytesHost.prototype.getNextAsBoolean = function () {
    var val = this.bytes[this.deliveredByteCt];
    this.deliveredByteCt++;
    if(val === 1)
    {
        return true;
    }
    return false;
};
PbUtilBytesHost.prototype.getNextAsByte = function () {
    var val = this.bytes[this.deliveredByteCt];
    this.deliveredByteCt++;
    return val;
};
PbUtilBytesHost.prototype.getNextAsShort = function () {
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
};
PbUtilBytesHost.prototype.getNextAsInt = function () {
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
};
PbUtilBytesHost.prototype.getNextAsDouble = function () {
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
};
PbUtilBytesHost.prototype.getNextAsStringNarrow = function () {
    var strLength = this.getNextAsShort();
    var val = new Array();
    for(var i = 0; i < strLength; i++)
    {
        val[i] = String.fromCharCode(this.bytes[this.deliveredByteCt]);
        this.deliveredByteCt++;
    }
    return val.join('');
};
PbUtilBytesHost.prototype.getNextAsStringWide = function () {
    var strLength = this.getNextAsShort();
    var val = new Array();
    for(var i = 0; i < strLength; i++)
    {
        val[i] = String.fromCharCode(this.getNextAsShort());
    }
    return val.join('');
};
PbUtilBytesHost.prototype.getNextAsByteBuffer = function () {
    var bufferLength = this.getNextAsInt();
    var val = new Array();
    for(var i = 0; i < bufferLength; i++)
    {
        val[i] = this.bytes[this.deliveredByteCt];
        this.deliveredByteCt++;
    }
    return val;
};

function testPbUtilBytes() {
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
        moreByte
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

function sendToHost(cmdBytes, callback) {

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

    var req = http.request(options, function (res) {

        res.setEncoding('utf8');

        res.on('data', function (data) {

            if (callback !== false) {
                if (res.statusCode === 200) {
                    callback(new PbUtilBytesHost(Base64.decode(data)));
                }
                else {
                    callback(false);
                    console.log("Error", res.statusCode);
                }
            }
        });
    });

    // Error event
    req.on('error', function (e) {
        console.log('problem with request: ' + e.message);
        callback(false);
    });

    // Send data
    req.write(rawBytes);

    // Close connection
    req.end();
}

function PB(options) {

    /* Configuration object
        options = {
            ip: // IP Address of PB Server
            port: // PB Web server port. Default 6214
        }
     */

    pbHost =  options.ip;
    pbPort = typeof options.port !== 'undefined' ? port : 6214;
}
PB.prototype.getNumSelectedLayers = function(callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdGetNumSelectedLayers);
    sendToHost(message, callback);
};
PB.prototype.getContentIsConsistent = function(FolderId, FileId, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdGetContentIsConsistent);
    message.addInt(FolderId);
    message.addInt(FileId);
    this.sendToHost(message, callback);
};
PB.prototype.getEnableClxController = function(forJogShuttle, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdGetClxControllerIsEnabled);
    message.addBoolean(forJogShuttle);
    sendToHost(message, callback);
};
PB.prototype.isSiteConnected = function(siteNum, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdIsSiteConnected);
    message.addInt(siteNum);
    sendToHost(message, callback);
};
PB.prototype.getMediaTransportMode = function(siteNum, deviceNum, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdGetMediaTransportMode);
    message.addInt(siteNum);
    message.addInt(deviceNum);
    sendToHost(message, callback);
};
PB.prototype.getRemainingTimeUntilNextCue = function(seqNum, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdGetRemainingTimeUntilNextCue);
    message.addInt(seqNum);
    sendToHost(message, callback);
};
PB.prototype.getClipRemainingTime = function(siteNum, deviceNum, seqNum, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdGetClipRemainingTime);
    message.addInt(siteNum);
    message.addInt(deviceNum);
    message.addInt(seqNum);
    sendToHost(message, callback);
};
PB.prototype.getSequenceTransportMode = function(seqNum, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdGetSequenceTransportMode);
    message.addInt(seqNum);
    sendToHost(message, callback);
};
PB.prototype.getSequenceTime = function (seqNum, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdGetSequenceNowTime);
    message.addInt(seqNum);
    sendToHost(message, callback);
};
PB.prototype.getSequenceTransparency = function(seqNum, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdGetSequenceTransparency);
    message.addInt(seqNum);
    sendToHost(message,callback);
};
PB.prototype.assignResource = function(siteNum, deviceNum, FolderId, FileId, forMesh, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdAssignResource);
    message.addInt(siteNum);
    message.addInt(deviceNum);
    message.addInt(FolderId);
    message.addInt(FileId);
    message.addByte(forMesh);
    sendToHost(message,callback);
};
PB.prototype.isLayerReallySelected = function(siteNum, deviceNum, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdIsLayerSelected);
    message.addInt(siteNum);
    message.addInt(deviceNum);
    sendToHost(message,callback);
};
PB.prototype.getSelectedLayer = function(layerIndex, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdGetAllSelectedLayers);
    message.addInt(layerIndex);
    sendToHost(message,callback);
};
PB.prototype.getParam = function(siteNum, deviceNum, paramName, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdGetParamValue);
    message.addInt(siteNum);
    message.addInt(deviceNum);
    message.addStringNarrow(paramName);
    sendToHost(message,callback);
};
PB.prototype.getParamOfKind = function(siteNum, deviceNum, paramKindId, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdGetParamKindValue);
    message.addInt(siteNum);
    message.addInt(deviceNum);
    message.addInt(paramKindId);
    sendToHost(message,callback);
};
PB.prototype.setParam = function(siteNum, deviceNum, pParamName, value, silent, direct, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetParam);
    message.addInt(siteNum);
    message.addInt(deviceNum);
    message.addStringNarrow(pParamName);
    message.addInt(value);
    message.addBoolean(silent);
    message.addBoolean(direct);
    sendToHost(message,callback);
};
PB.prototype.setParamDouble = function(siteNum, deviceNum, pParamName, value, silent, direct, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetParamDouble);
    message.addInt(siteNum);
    message.addInt(deviceNum);
    message.addStringNarrow(pParamName);
    message.addDouble(value);
    message.addBoolean(silent);
    message.addBoolean(direct);
    sendToHost(message,callback);
};
PB.prototype.setParamOfKind = function(siteNum, deviceNum, paramKindId, value, silent, direct, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetParamOfKind);
    message.addInt(siteNum);
    message.addInt(deviceNum);
    message.addInt(paramKindId);
    message.addInt(value);
    message.addBoolean(silent);
    message.addBoolean(direct);
    sendToHost(message,callback);
};
PB.prototype.setParamOfKindDouble = function(siteNum, deviceNum, paramKindId, value, silent, direct, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetParamOfKindDouble);
    message.addInt(siteNum);
    message.addInt(deviceNum);
    message.addInt(paramKindId);
    message.addDouble(value);
    message.addBoolean(silent);
    message.addBoolean(direct);
    sendToHost(message,callback);
};
PB.prototype.setParamInSelection = function(pParamName, value, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetParamInSelection);
    message.addStringNarrow(pParamName);
    message.addInt(value);
    sendToHost(message,callback);
};
PB.prototype.setParamInSelectionDouble = function(pParamName, value, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetParamInSelectionDouble);
    message.addStringNarrow(pParamName);
    message.addDouble(value);
    sendToHost(message,callback);
};
PB.prototype.setParamOfKindInSelection = function(paramKindId, value, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetParamInSelection);
    message.addInt(paramKindId);
    message.addInt(value);
    sendToHost(message,callback);
};
PB.prototype.setParamOfKindInSelectionDouble = function(paramKindId, value, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetParamOfKindInSelectionDouble);
    message.addInt(paramKindId);
    message.addDouble(value);
    sendToHost(message,callback);
};
PB.prototype.setContentAtTime = function(siteNum, deviceNum, seqNum, hours, minutes, seconds, frames, FolderId, FileId, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetContentAtTime);
    message.addInt(siteNum);
    message.addInt(deviceNum);
    message.addInt(seqNum);
    message.addInt(hours);
    message.addInt(minutes);
    message.addInt(seconds);
    message.addInt(frames);
    message.addInt(FolderId);
    message.addInt(FileId);
    sendToHost(message,callback);
};
PB.prototype.applyPreset = function(bankNum, presetNum, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdApplyPreset);
    message.addInt(bankNum);
    message.addInt(presetNum);
    sendToHost(message,callback);
};
PB.prototype.assignResourceToSelection = function(FolderId, FileId, forMesh, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdAssignResourceToSelection);
    message.addInt(FolderId);
    message.addInt(FileId);
    message.addByte(forMesh);
    sendToHost(message,callback);
};
PB.prototype.setSequenceTransportMode = function(seqNum, pModeName, callback) {
    var modeNum;
    if (pModeName == "Play") {
        modeNum = 1;
    }
    else if (pModeName == "Stop") {
        modeNum = 2;
    }
    else if (pModeName == "Pause") {
        modeNum = 3;
    }
    else {
        return false;
    }

    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetSequenceTransportMode);
    message.addInt(seqNum);
    message.addInt(modeNum);
    sendToHost(message,callback);
};
PB.prototype.moveSequenceToTime = function(seqNum, hours, minutes, seconds, frames, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdMoveSequenceToTime);
    message.addInt(seqNum);
    message.addInt(hours);
    message.addInt(minutes);
    message.addInt(seconds);
    message.addInt(frames);
    sendToHost(message,callback);
};
PB.prototype.moveSequenceToLastNextFrame = function(seqNum, isNext, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdMoveSequenceToLastNextFrame);
    message.addInt(seqNum);
    message.addByte(isNext);
    sendToHost(message,callback);
};
PB.prototype.moveSequenceToLastNextCue = function(seqNum, isNext, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdMoveSequenceToLastNextCue);
    message.addInt(seqNum);
    message.addByte(isNext);
    sendToHost(message,callback);
};
PB.prototype.setSequenceTransparency = function(seqNum, transparency, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetSequenceTransparency);
    message.addInt(seqNum);
    message.addInt(transparency);
    sendToHost(message,callback);
};
PB.prototype.setSequenceTimeCodeMode = function(seqNum, timeCodeMode, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetSequenceTimeCodeMode);
    message.addInt(seqNum);
    message.addInt(timeCodeMode);
    sendToHost(message,callback);
};
PB.prototype.setSequenceTimeCodeOffset = function(seqNum, hours, minutes, seconds, frames, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetSequenceTimeCodeOffset);
    message.addInt(seqNum);
    message.addInt(hours);
    message.addInt(minutes);
    message.addInt(seconds);
    message.addInt(frames);
    sendToHost(message,callback);
};
PB.prototype.setSequenceTimeCodeStopAction = function(seqNum, stopAction, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetSequenceTimeCodeStopAction);
    message.addInt(seqNum);
    message.addInt(stopAction);
    sendToHost(message,callback);
};
PB.prototype.resetSite = function(siteNum, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdResetSite);
    message.addInt(siteNum);
    sendToHost(message,callback);
};
PB.prototype.resetDevice = function(siteNum, deviceNum, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdResetDevice);
    message.addInt(siteNum);
    message.addInt(deviceNum);
    sendToHost(message,callback);
};
PB.prototype.resetParam = function(siteNum, deviceNum, pParamName, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdResetParam);
    message.addInt(siteNum);
    message.addInt(deviceNum);
    message.addStringNarrow(pParamName);
    sendToHost(message,callback);
};
PB.prototype.activateSite = function (siteNum, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdActivateSite);
    message.addInt(siteNum);
    sendToHost(message,callback);
};
PB.prototype.activateDevice = function(siteNum, deviceNum, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdActivateDevice);
    message.addInt(siteNum);
    message.addInt(deviceNum);
    sendToHost(message,callback);
};
PB.prototype.activateParam = function(siteNum, deviceNum, pParamName, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdActivateParam);
    message.addInt(siteNum);
    message.addInt(deviceNum);
    message.addStringNarrow(pParamName);
    sendToHost(message,callback);
};
PB.prototype.clearActiveSite = function (siteNum, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdClearActiveSite);
    message.addInt(siteNum);
    sendToHost(message,callback);
};
PB.prototype.clearActiveDevice = function(siteNum, deviceNum, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdClearActiveDevice);
    message.addInt(siteNum);
    message.addInt(deviceNum);
    sendToHost(message,callback);
};
PB.prototype.clearActiveParam = function(siteNum, deviceNum, pParamName, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdClearActiveParam);
    message.addInt(siteNum);
    message.addInt(deviceNum);
    message.addStringNarrow(pParamName);
    sendToHost(message,callback);
};
PB.prototype.toggleFullscreen = function(siteNum, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdToggleFullscreen);
    message.addInt(siteNum);
    sendToHost(message,callback);
};
PB.prototype.setParamRelative = function(siteNum, deviceNum, pParamName, value, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetParamRelative);
    message.addInt(siteNum);
    message.addInt(deviceNum);
    message.addStringNarrow(pParamName);
    message.addInt(value);
    sendToHost(message,callback);
};
PB.prototype.setParamRelativeDouble = function(siteNum, deviceNum, pParamName, value, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetParamRelativeDouble);
    message.addInt(siteNum);
    message.addInt(deviceNum);
    message.addStringNarrow(pParamName);
    message.addDouble(value);
    sendToHost(message,callback);
};
PB.prototype.setParamRelativeInSelection = function(pParamName, value, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetParamRelativeInSelection);
    message.addStringNarrow(pParamName);
    message.addInt(value);
    sendToHost(message,callback);
};
PB.prototype.setParamRelativeInSelectionDouble = function(pParamName, value, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetParamRelativeInSelectionDouble);
    message.addStringNarrow(pParamName);
    message.addDouble(value);
    sendToHost(message,callback);
};
PB.prototype.addContent = function(pFullPath, siteNum, FolderId, FileId, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdAddContent);
    message.addStringNarrow(pFullPath);
    message.addInt(siteNum);
    message.addInt(FolderId);
    message.addInt(FileId);
    message.addBoolean(false);
    sendToHost(message,callback);
};
PB.prototype.addContentToFolder = function(pFullPath, siteNum, FolderId, FileId, pFoldername, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdAddContentToFolder);
    message.addStringNarrow(pFullPath);
    message.addInt(siteNum);
    message.addInt(FolderId);
    message.addInt(FileId);
    message.addStringNarrow(pFoldername);
    sendToHost(message,callback);
};
PB.prototype.addContentFromLocalNode = function(pFullPath, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdAddContentFromLocalNode);
    message.addStringNarrow(pFullPath);
    sendToHost(message,callback);
};
PB.prototype.addContentFromLocalNodeToFolder = function(pFullPath, pFoldername, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdAddContentFromLocalNodeToFolder);
    message.addStringNarrow(pFullPath);
    message.addStringNarrow(pFoldername);
    sendToHost(message,callback);
};
PB.prototype.addContentFolderFromLocalNode = function(pFolderPath, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdAddContentFolderFromLocalNode);
    sendToHost(message,callback);
};
PB.prototype.addContentFolderFromLocalNodeToFolder = function(pFolderPath, pFoldername, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdAddContentFolderFromLocalNodeToFolder);
    message.addStringNarrow(pFolderPath);
    message.addStringNarrow(pFoldername);
    sendToHost(message,callback);
};
PB.prototype.removeMediaById = function(FolderId, FileId, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdRemoveMediaById);
    message.addInt(FolderId);
    message.addInt(FileId);
    sendToHost(message,callback);
};
PB.prototype.removeMeshById = function(FolderId, FileId, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdRemoveMeshById);
    message.addInt(FolderId);
    message.addInt(FileId);
    sendToHost(message,callback);
};
PB.prototype.removeAllResources = function(removeFolder, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdRemoveAllContent);
    message.addBoolean(removeFolder);
    sendToHost(message,callback);
};
PB.prototype.spreadMediaById = function(FolderId, FileId, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSpreadMediaById);
    message.addInt(FolderId);
    message.addInt(FileId);
    sendToHost(message,callback);
};
PB.prototype.spreadMeshById = function(FolderId, FileId, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSpreadMeshById);
    message.addInt(FolderId);
    message.addInt(FileId);
    sendToHost(message,callback);
};
PB.prototype.reloadMediaById = function(FolderId, FileId, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdReloadMediaById);
    message.addInt(FolderId);
    message.addInt(FileId);
    sendToHost(message,callback);
};
PB.prototype.reloadMeshById = function(FolderId, FileId, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdReloadMeshById);
    message.addInt(FolderId);
    message.addInt(FileId);
    sendToHost(message,callback);
};
PB.prototype.storeActive = function(seqNum, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdStoreActive);
    message.addInt(seqNum);
    sendToHost(message,callback);
};
PB.prototype.storeActiveToTime = function(seqNum, hours, minutes, seconds, frames, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdStoreActiveToTime);
    message.addInt(seqNum);
    message.addInt(hours);
    message.addInt(minutes);
    message.addInt(seconds);
    message.addInt(frames);
    sendToHost(message,callback);
};
PB.prototype.setMediaFrameBlendingById = function(FolderId, FileId, frameBlended, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetMediaFrameBlendingById);
    message.addInt(FolderId);
    message.addInt(FileId);
    message.addByte(frameBlended);
    sendToHost(message,callback);
};
PB.prototype.setMediaDeinterlacingById = function(FolderId, FileId, deinterlacer, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetMediaDeinterlacingById);
    message.addInt(FolderId);
    message.addInt(FileId);
    message.addInt(deinterlacer);
    sendToHost(message,callback);
};
PB.prototype.setMediaAnisotropicFilteringById = function(FolderId, FileId, useFiltering, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetMediaAnisotropicFilteringById);
    message.addInt(FolderId);
    message.addInt(FileId);
    message.addByte(useFiltering);
    sendToHost(message,callback);
};
PB.prototype.setMediaUnderscanById = function(FolderId, FileId, useUnderscan, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetMediaUnderscanById);
    message.addInt(FolderId);
    message.addInt(FileId);
    message.addByte(useUnderscan);
    sendToHost(message,callback);
};
PB.prototype.setMediaMpegColourSpaceById = function(FolderId, FileId, useMpegColourSpace, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetMediaMpegColourSpaceById);
    message.addInt(FolderId);
    message.addInt(FileId);
    message.addByte(useMpegColourSpace);
    sendToHost(message,callback);
};
PB.prototype.setMediaAlphaChannelById = function(FolderId, FileId, useAlphaChannel, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetMediaAlphaChannelById);
    message.addInt(FolderId);
    message.addInt(FileId);
    message.addByte(useAlphaChannel);
    sendToHost(message,callback);
};
PB.prototype.createTextInput = function(FolderId, FileId, pText, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdAddTextInput);
    message.addInt(FolderId);
    message.addInt(FileId);
    message.addStringNarrow(pText);
    sendToHost(message,callback);
};
PB.prototype.setText = function(FolderId, FileId, pText, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetTextTextureSize);
    message.addInt(FolderId);
    message.addInt(FileId);
    message.addStringNarrow(pText);
    sendToHost(message,callback);
};
PB.prototype.loadProject = function(pPath, pName, saveExisting, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdLoadProject);
    message.addStringNarrow(pPath);
    message.addStringNarrow(pName);
    message.addByte(saveExisting);
    sendToHost(message,callback);
};
PB.prototype.closeProject = function(save, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdCloseProject);
    message.addByte(save);
    sendToHost(message,callback);
};
PB.prototype.setDeviceAcceptDmxById = function(siteNum, deviceNum, acceptDmx, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetDeviceAcceptDmxById);
    message.addInt(siteNum);
    message.addInt(deviceNum);
    message.addByte(acceptDmx);
    sendToHost(message,callback);
};
PB.prototype.setSiteAcceptDmxById = function(siteNum, acceptDmx, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetSiteAcceptDmxById);
    message.addInt(siteNum);
    message.addByte(acceptDmx);
    sendToHost(message,callback);
};
PB.prototype.setDeviceDmxAddressById = function(siteNum, deviceNum, index, id1, id2, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetDeviceDmxAddressById);
    message.addInt(siteNum);
    message.addInt(deviceNum);
    message.addInt(index);
    message.addInt(id1);
    message.addInt(id2);
    sendToHost(message,callback);
};
PB.prototype.setCuePlayMode = function(seqNum, cueId, playMode, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetCuePlayMode);
    message.addInt(seqNum);
    message.addInt(cueId);
    message.addInt(playMode);
    sendToHost(message,callback);
};
PB.prototype.setNextCuePlayMode = function(seqNum, playMode, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetNextCuePlayMode);
    message.addInt(seqNum);
    message.addInt(playMode);
    sendToHost(message,callback);
};
PB.prototype.setIgnoreNextCue = function(seqNum, doIgnore, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdIgnoreNextCue);
    message.addInt(seqNum);
    message.addByte(doIgnore);
    sendToHost(message,callback);
};
PB.prototype.changeFullscreenStateById = function(siteNum, enterFullscreen, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdChangeFullscreenStateById);
    message.addInt(siteNum);
    message.addByte(enterFullscreen);
    sendToHost(message,callback);
};
PB.prototype.changeFullscreenStateByIp = function(pIp, enterFullscreen, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdChangeFullscreenStateByIp);
    message.addStringNarrow(pIp);
    message.addByte(enterFullscreen);
    sendToHost(message,callback);
};
PB.prototype.setTextTextureSize = function(FolderId, FileId, width, height, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetTextTextureSize);
    message.addInt(FolderId);
    message.addInt(FileId);
    message.addInt(width);
    message.addInt(height);
    sendToHost(message,callback);
};
PB.prototype.setTextProperties = function(FolderId, FileId, pFont, size, style, alignment, colorRed, colorGreen, colorBlue, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetTextProperties);
    message.addInt(FolderId);
    message.addInt(FileId);
    message.addStringNarrow(pFont);
    message.addInt(size);
    message.addByte(style);
    message.addByte(alignment);
    message.addByte(colorRed);
    message.addByte(colorGreen);
    message.addByte(colorBlue);
    sendToHost(message,callback);
};
PB.prototype.setTextCenterOnTexture = function(FolderId, FileId, centerOnTexture, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetTextCenterOnTexture);
    message.addInt(FolderId);
    message.addInt(FileId);
    message.addByte(centerOnTexture);
    sendToHost(message,callback);
};
PB.prototype.setSiteIpById = function(siteNum, pIp, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetSiteIp);
    message.addInt(siteNum);
    message.addStringNarrow(pIp);
    sendToHost(message,callback);
};
PB.prototype.setDeviceSelection = function(siteNum, deviceNum, selectionMode, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetDeviceSelection);
    message.addInt(siteNum);
    message.addInt(deviceNum);
    message.addInt(selectionMode);
    sendToHost(message,callback);
};
PB.prototype.setClxControllerFaderMapping = function(faderId, seqNum, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetClxPlaybackFader);
    message.addInt(faderId);
    message.addInt(seqNum);
    sendToHost(message,callback);
};
PB.prototype.setClxControllerCueMapping = function(cueBtnId, seqNum, cueId, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetClxCueMapping);
    message.addInt(cueBtnId);
    message.addInt(seqNum);
    message.addInt(cueId);
    sendToHost(message,callback);
};
PB.prototype.removeCueById = function(seqNum, cueId, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdRemoveCueById);
    message.addInt(seqNum);
    message.addInt(cueId);
    sendToHost(message,callback);
};
PB.prototype.removeAllCues = function(seqNum, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdRemoveAllCues);
    message.addInt(seqNum);
    sendToHost(message,callback);
};
PB.prototype.removeLayer = function(siteId, layerId, isGraphicLayer, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdRemoveGraphicLayer);
    message.addInt(siteId);
    message.addInt(layerId);
    message.addBoolean(isGraphicLayer);
    sendToHost(message,callback);
};
PB.prototype.backupMode = function(enable, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdBackupMode);
    message.addBoolean(enable);
    sendToHost(message,callback);
};
PB.prototype.applyView = function(viewNum, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdApplyView);
    message.addInt(viewNum);
    sendToHost(message,callback);
};
PB.prototype.setSpareFromSpread = function(siteId, spareFromSpread, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetSpareFromSpread);
    message.addInt(siteId);
    message.addBoolean(spareFromSpread);
    sendToHost(message,callback);
};
PB.prototype.addMediaIncrementID = function(pMediaPath, siteNum, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdAddContent);
    message.addStringNarrow(pMediaPath);
    message.addInt(siteNum);
    message.addInt(0);
    message.addInt(0);
    message.addBoolean(true);
    sendToHost(message,callback);
};
PB.prototype.setEnableClxController = function(forJogShuttle, enable, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetClxControllerIsEnabled);
    message.addBoolean(forJogShuttle);
    message.addBoolean(enable);
    sendToHost(message,callback);
};
PB.prototype.setSequenceCueWaitTime = function(seqNum, cueId, hours, minutes, seconds, frames, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetSequenceCueWaitTime);
    message.addInt(seqNum);
    message.addInt(cueId);
    message.addInt(hours);
    message.addInt(minutes);
    message.addInt(seconds);
    message.addInt(frames);
    sendToHost(message,callback);
};
PB.prototype.setSequenceCueJumpTargetTime = function(seqNum, cueId, hours, minutes, seconds, frames, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetSequenceCueJumpTargetTime);
    message.addInt(seqNum);
    message.addInt(cueId);
    message.addInt(hours);
    message.addInt(minutes);
    message.addInt(seconds);
    message.addInt(frames);
    sendToHost(message,callback);
};
PB.prototype.setSequenceCueJumpCount = function(seqNum, cueId, jumpCount, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetSequenceCueJumpCount);
    message.addInt(seqNum);
    message.addInt(cueId);
    message.addInt(jumpCount);
    sendToHost(message,callback);
};
PB.prototype.resetSequenceCueTriggerCount = function(seqNum, cueId, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdResetSequenceCueTriggerCount);
    message.addInt(seqNum);
    message.addInt(cueId);
    sendToHost(message,callback);
};
PB.prototype.removeSequence = function(seqNum, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdRemoveSequence);
    message.addInt(seqNum);
    sendToHost(message,callback);
};
PB.prototype.sendMouseInput = function(siteNum, eventType, screenPosX, screenPosY, screenWidth, screenHeight, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSendMouseInput);
    message.addInt(siteNum);
    message.addInt(eventType);
    message.addInt(screenPosX);
    message.addInt(screenPosY);
    message.addInt(screenWidth);
    message.addInt(screenHeight);
    sendToHost(message,callback);
};
PB.prototype.sendKeyboardInput = function(siteNum, eventType, keyCode, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSendKeyboardInput);
    message.addInt(siteNum);
    message.addInt(eventType);
    message.addInt(keyCode);
    sendToHost(message,callback);
};
PB.prototype.setShowCursorInFullscreen = function(siteNum, showCursor, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetShowCursorInFullscreen);
    message.addInt(siteNum);
    message.addBoolean(showCursor);
    sendToHost(message,callback);
};
PB.prototype.setBrowserURL = function(dmxFolderId, dmxId, pURL, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetBrowserURL);
    message.addInt(dmxFolderId);
    message.addInt(dmxId);
    message.addStringWide(pURL);
    sendToHost(message,callback);
};
PB.prototype.setBrowserURLByName = function(pProjectPath, pURL, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetBrowserURLByName);
    message.addStringWide(pProjectPath);
    message.addStringWide(pURL);
    sendToHost(message,callback);
};
PB.prototype.refreshBrowserView = function(siteNum, deviceNum, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdRefreshBrowserView);
    message.addInt(siteNum);
    message.addInt(deviceNum);
    sendToHost(message,callback);
};
PB.prototype.setBrowserSize = function(dmxFolderId, dmxId, width, height, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetBrowserSize);
    message.addInt(dmxFolderId);
    message.addInt(dmxId);
    message.addInt(width);
    message.addInt(height);
    sendToHost(message,callback);
};
PB.prototype.setBrowserSizeByName = function(pProjectPath, width, height, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetShowCursorInFullscreen);
    message.addStringWide(pProjectPath);
    message.addInt(width);
    message.addInt(height);
    sendToHost(message,callback);
};
PB.prototype.moveResourceToFolder = function(pResName, pFolderName, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdMoveContentToFolder);
    message.addStringWide(pResName);
    message.addStringWide(pFolderName);
    sendToHost(message,callback);
};
PB.prototype.setNodeOfSiteIsAudioClockMaster = function(siteNum, isMaster, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdSetNodeOfSiteIsAudioClockMaster);
    message.addInt(siteNum);
    message.addBoolean(isMaster);
    sendToHost(message,callback);
};
PB.prototype.sendCommandWithoutParam = function(command, waitForAnswer, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(command);
    sendToHost(message,callback);
};
PB.prototype.createTextInputWide = function(dmxFolderId, dmxId, pText, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdAddTextInputWide);
    message.addInt(dmxFolderId);
    message.addInt(dmxId);
    message.addStringWide(pText);
    sendToHost(message,callback);
};
PB.prototype.sendMediaInfoQuery = function(index, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdGetAllMediaInProject);
    message.addInt(index);
    sendToHost(message,callback);
};
PB.prototype.addLayer = function(siteId, isGraphicLayer, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(inCmd);
    message.addInt(siteId);
    message.addBoolean(isGraphicLayer);
    sendToHost(message,callback);
};
PB.prototype.getParamResource = function(siteNum, deviceNum, pParamName, pInfo, isMedia, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdGetParamMedia);
    message.addInt(siteNum);
    message.addInt(deviceNum);
    message.addBoolean(isMedia);
    message.addStringNarrow(ParamName);
    sendToHost(message,callback);
};
PB.prototype.moveLayer = function(siteNum, deviceNum, moveTypeCmd, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(moveTypeCmd);
    message.addInt(siteNum);
    message.addInt(deviceNum);
    sendToHost(message,callback);
};
PB.prototype.moveLayerUp = function(siteNum, deviceNum, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdMoveLayerUp);
    message.addInt(siteNum);
    message.addInt(deviceNum);
    sendToHost(message,callback);
};
PB.prototype.moveLayerDown = function(siteNum, deviceNum, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdMoveLayerDown);
    message.addInt(siteNum);
    message.addInt(deviceNum);
    sendToHost(message,callback);
};
PB.prototype.getThumbnailByItemIndex = function(itemIndex, callback) {
    var message = new PBUtilBytesNetwork();
    message.addShort(eAutoCmdMoveLayerDown);
    message.addInt(siteNum);
    message.addInt(deviceNum);
    sendToHost(message,callback);
};

module.exports = PB;