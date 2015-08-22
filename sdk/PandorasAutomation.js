/*
** Pandoras Box SDK // PandorasAutomation
**
** created: 27.4.2015
** contact: support@coolux.de
*/

var usesProxy = false;

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
    }
    var ClxHardware = {
        FaderExtension: 0,
        JogShuttle: 1
    }
    var Consistency = {
        Inconsistent: 1,
        Consistent: 0
    }
    var SelectionMode = {
        SetSelection: 0,
        AddSelection: 1,
        Unselect: 2,
        UnselectAll: 3
    }
    var WatchFolderProperty = {
        IncludeSubdirectories: 1,
        DeleteInProject: 2,
        DeleteInClients: 3
    }
    var TransportMode = {
        Play: 1,
        Pause: 3,
        Stop: 2
    }
    var SequenceSmpteMode = {
        None: 0,
        Send: 1,
        Receive: 2
    }
    var SequenceSmpteStopMode = {
        None: 0,
        Stop: 1,
        Pause: 2,
        Continue: 3
    }

var PBAuto = {

/*
** setParamRaw(callback, siteId, deviceId, parameterName, parameterValue, doSilent, doDirect)
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
setParamRaw: function(callback, siteId, deviceId, parameterName, parameterValue, doSilent, doDirect)
{
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
},
/*
** setParam(callback, siteId, deviceId, parameterName, parameterValue, doSilent, doDirect)
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
setParam: function(callback, siteId, deviceId, parameterName, parameterValue, doSilent, doDirect)
{
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
},
/*
** setParamByteTuples(callback, siteId, deviceId, parameterName, tupleDimension, tupleData, doSilent, doDirect)
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
setParamByteTuples: function(callback, siteId, deviceId, parameterName, tupleDimension, tupleData, doSilent, doDirect)
{
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
},
/*
** getParam(callback, siteId, deviceId, parameterName)
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
getParam: function(callback, siteId, deviceId, parameterName)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(79);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addStringNarrow(parameterName);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "parameterValue";cb[1]["type"] = "Double";
    sendToPb(cb,message);
},
/*
** getParamByteTuples(callback, siteId, deviceId, parameterName)
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
getParamByteTuples: function(callback, siteId, deviceId, parameterName)
{
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
},
/*
** setParamOfKind(callback, siteId, deviceId, parameterKindId, parameterValue, doSilent, doDirect)
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
setParamOfKind: function(callback, siteId, deviceId, parameterKindId, parameterValue, doSilent, doDirect)
{
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
},
/*
** setParamOfKindDouble(callback, siteId, deviceId, parameterKindId, parameterValue, doSilent, doDirect)
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
setParamOfKindDouble: function(callback, siteId, deviceId, parameterKindId, parameterValue, doSilent, doDirect)
{
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
},
/*
** getParamOfKind(callback, siteId, deviceId, parameterKindId)
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
getParamOfKind: function(callback, siteId, deviceId, parameterKindId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(80);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addInt(parameterKindId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "parameterValue";cb[1]["type"] = "Double";
    sendToPb(cb,message);
},
/*
** setParamInSelection(callback, parameterName, parameterValue)
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
setParamInSelection: function(callback, parameterName, parameterValue)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(58);
    message.addStringNarrow(parameterName);
    message.addInt(parameterValue);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setParamInSelectionDouble(callback, parameterName, parameterValue)
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
setParamInSelectionDouble: function(callback, parameterName, parameterValue)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(99);
    message.addStringNarrow(parameterName);
    message.addDouble(parameterValue);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setParamOfKindInSelection(callback, parameterKindId, parameterValue)
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
setParamOfKindInSelection: function(callback, parameterKindId, parameterValue)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(59);
    message.addInt(parameterKindId);
    message.addInt(parameterValue);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setParamOfKindInSelectionDouble(callback, parameterKindId, parameterValue)
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
setParamOfKindInSelectionDouble: function(callback, parameterKindId, parameterValue)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(100);
    message.addInt(parameterKindId);
    message.addDouble(parameterValue);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setParamLerpTime(callback, siteId, deviceId, parameterName, smoothingTime)
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
setParamLerpTime: function(callback, siteId, deviceId, parameterName, smoothingTime)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(232);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addStringNarrow(parameterName);
    message.addInt(smoothingTime);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** getIsLayerSelected(callback, siteId, deviceId)
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
getIsLayerSelected: function(callback, siteId, deviceId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(74);
    message.addInt(siteId);
    message.addInt(deviceId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "isSelected";cb[1]["type"] = "Byte";
    sendToPb(cb,message);
},
/*
** getSelectedDeviceCount(callback)
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
getSelectedDeviceCount: function(callback)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(81);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "selectedDevicesCount";cb[1]["type"] = "Int";
    sendToPb(cb,message);
},
/*
** getSelectedDevice(callback, selectionIndex)
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
getSelectedDevice: function(callback, selectionIndex)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(75);
    message.addInt(selectionIndex);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "siteId";cb[1]["type"] = "Int";
    cb[2] = new Object();cb[2]["name"] = "deviceId";cb[2]["type"] = "Int";
    sendToPb(cb,message);
},
/*
** setContentAtTime(callback, siteId, deviceId, sequenceId, hours, minutes, seconds, frames, dmxFolderId, dmxFileId)
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
setContentAtTime: function(callback, siteId, deviceId, sequenceId, hours, minutes, seconds, frames, dmxFolderId, dmxFileId)
{
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
},
/*
** applyPreset(callback, bankId, presetId)
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
applyPreset: function(callback, bankId, presetId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(40);
    message.addInt(bankId);
    message.addInt(presetId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** assignResource(callback, siteId, deviceId, dmxFolderId, dmxFileId, forMesh)
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
assignResource: function(callback, siteId, deviceId, dmxFolderId, dmxFileId, forMesh)
{
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
},
/*
** assignResourceByName(callback, siteId, deviceId, resourcePath, parameterName, forMesh)
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
assignResourceByName: function(callback, siteId, deviceId, resourcePath, parameterName, forMesh)
{
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
},
/*
** assignResourceToSelection(callback, dmxFolderId, dmxFileId, forMesh)
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
assignResourceToSelection: function(callback, dmxFolderId, dmxFileId, forMesh)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(61);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addBool(forMesh);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** moveResourceToPath(callback, resourcePath, projectPath)
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
moveResourceToPath: function(callback, resourcePath, projectPath)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(144);
    message.addStringWide(resourcePath);
    message.addStringWide(projectPath);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** moveTreeItem(callback, itemIdFrom, itemIdTo)
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
moveTreeItem: function(callback, itemIdFrom, itemIdTo)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(158);
    message.addInt(itemIdFrom);
    message.addInt(itemIdTo);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setSequenceTransportMode(callback, sequenceId, transportMode)
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
setSequenceTransportMode: function(callback, sequenceId, transportMode)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(3);
    message.addInt(sequenceId);
    message.addInt(transportMode);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** getSequenceTransportMode(callback, sequenceId)
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
getSequenceTransportMode: function(callback, sequenceId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(72);
    message.addInt(sequenceId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "transportMode";cb[1]["type"] = "Int";
    sendToPb(cb,message);
},
/*
** moveSequenceToTime(callback, sequenceId, hours, minutes, seconds, frames)
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
moveSequenceToTime: function(callback, sequenceId, hours, minutes, seconds, frames)
{
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
},
/*
** getSequenceTime(callback, sequenceId)
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
getSequenceTime: function(callback, sequenceId)
{
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
},
/*
** moveSequenceToNextFrame(callback, sequenceId, isNext)
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
moveSequenceToNextFrame: function(callback, sequenceId, isNext)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(6);
    message.addInt(sequenceId);
    message.addByte(isNext);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** moveSequenceToCue(callback, sequenceId, cueId)
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
moveSequenceToCue: function(callback, sequenceId, cueId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(4);
    message.addInt(sequenceId);
    message.addInt(cueId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** moveSequenceToNextCue(callback, sequenceId, isNext)
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
moveSequenceToNextCue: function(callback, sequenceId, isNext)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(7);
    message.addInt(sequenceId);
    message.addByte(isNext);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setSequenceTransparency(callback, sequenceId, transparency)
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
setSequenceTransparency: function(callback, sequenceId, transparency)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(8);
    message.addInt(sequenceId);
    message.addInt(transparency);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** getSequenceTransparency(callback, sequenceId)
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
getSequenceTransparency: function(callback, sequenceId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(91);
    message.addInt(sequenceId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "transparency";cb[1]["type"] = "Int";
    sendToPb(cb,message);
},
/*
** setSequenceTimeCodeMode(callback, sequenceId, timeCodeMode)
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
setSequenceTimeCodeMode: function(callback, sequenceId, timeCodeMode)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(41);
    message.addInt(sequenceId);
    message.addInt(timeCodeMode);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setSequenceTimeCodeOffset(callback, sequenceId, hours, minutes, seconds, frames)
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
setSequenceTimeCodeOffset: function(callback, sequenceId, hours, minutes, seconds, frames)
{
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
},
/*
** setSequenceTimeCodeStopAction(callback, sequenceId, stopAction)
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
setSequenceTimeCodeStopAction: function(callback, sequenceId, stopAction)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(43);
    message.addInt(sequenceId);
    message.addInt(stopAction);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** resetAll(callback)
**  no description available
**
** Arguments:
**
**
** Return values:
**
*/
resetAll: function(callback)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(9);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** resetSite(callback, siteId)
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
resetSite: function(callback, siteId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(10);
    message.addInt(siteId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** resetDevice(callback, siteId, deviceId)
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
resetDevice: function(callback, siteId, deviceId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(11);
    message.addInt(siteId);
    message.addInt(deviceId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** resetParam(callback, siteId, deviceId, parameterName)
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
resetParam: function(callback, siteId, deviceId, parameterName)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(12);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addStringNarrow(parameterName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setAllActive(callback)
**  no description available
**
** Arguments:
**
**
** Return values:
**
*/
setAllActive: function(callback)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(35);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setSiteActive(callback, siteId)
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
setSiteActive: function(callback, siteId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(36);
    message.addInt(siteId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setDeviceActive(callback, siteId, deviceId)
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
setDeviceActive: function(callback, siteId, deviceId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(37);
    message.addInt(siteId);
    message.addInt(deviceId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setParamActive(callback, siteId, deviceId, parameterName)
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
setParamActive: function(callback, siteId, deviceId, parameterName)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(38);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addStringNarrow(parameterName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** clearAllActive(callback)
**  no description available
**
** Arguments:
**
**
** Return values:
**
*/
clearAllActive: function(callback)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(13);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** clearActiveSite(callback, siteId)
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
clearActiveSite: function(callback, siteId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(14);
    message.addInt(siteId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** clearActiveDevice(callback, siteId, deviceId)
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
clearActiveDevice: function(callback, siteId, deviceId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(15);
    message.addInt(siteId);
    message.addInt(deviceId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** clearActiveParam(callback, siteId, deviceId, parameterName)
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
clearActiveParam: function(callback, siteId, deviceId, parameterName)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(16);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addStringNarrow(parameterName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** toggleFullscreen(callback, siteId)
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
toggleFullscreen: function(callback, siteId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(17);
    message.addInt(siteId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setParamRelative(callback, siteId, deviceId, parameterName, parameterValue)
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
setParamRelative: function(callback, siteId, deviceId, parameterName, parameterValue)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(98);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addStringNarrow(parameterName);
    message.addInt(parameterValue);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setParamRelativeExtended(callback, siteId, deviceId, parameterName, parameterValue, doSilent, doDirect)
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
setParamRelativeExtended: function(callback, siteId, deviceId, parameterName, parameterValue, doSilent, doDirect)
{
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
},
/*
** setParamRelativeInSelection(callback, parameterName, parameterValue)
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
setParamRelativeInSelection: function(callback, parameterName, parameterValue)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(60);
    message.addStringNarrow(parameterName);
    message.addInt(parameterValue);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setParamRelativeInSelectionDouble(callback, parameterName, parameterValue)
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
setParamRelativeInSelectionDouble: function(callback, parameterName, parameterValue)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(101);
    message.addStringNarrow(parameterName);
    message.addDouble(parameterValue);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** addContentToPath(callback, filePath, siteId, dmxFolderId, dmxFileId, projectPath)
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
addContentToPath: function(callback, filePath, siteId, dmxFolderId, dmxFileId, projectPath)
{
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
},
/*
** addContentToTreeItem(callback, filePath, siteId, dmxFolderId, dmxFileId, treeItemIndex)
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
addContentToTreeItem: function(callback, filePath, siteId, dmxFolderId, dmxFileId, treeItemIndex)
{
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
},
/*
** addContentFromLocalNode(callback, filePath, dmxFolderId, dmxFileId)
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
addContentFromLocalNode: function(callback, filePath, dmxFolderId, dmxFileId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(63);
    message.addStringNarrow(filePath);
    message.addShort(dmxFolderId);
    message.addShort(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** addContentFromLocalNodeToPath(callback, filePath, projectPath, dmxFolderId, dmxFileId)
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
addContentFromLocalNodeToPath: function(callback, filePath, projectPath, dmxFolderId, dmxFileId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(135);
    message.addStringNarrow(filePath);
    message.addStringNarrow(projectPath);
    message.addShort(dmxFolderId);
    message.addShort(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** addContentFromLocalNodeToTreeItem(callback, filePath, treeItemIndex, dmxFolderId, dmxFileId)
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
addContentFromLocalNodeToTreeItem: function(callback, filePath, treeItemIndex, dmxFolderId, dmxFileId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(154);
    message.addStringNarrow(filePath);
    message.addInt(treeItemIndex);
    message.addShort(dmxFolderId);
    message.addShort(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** addContentFromFolder(callback, folderPath, siteId, dmxFolderId, dmxFileId, projectPath)
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
addContentFromFolder: function(callback, folderPath, siteId, dmxFolderId, dmxFileId, projectPath)
{
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
},
/*
** addContentFromLocalNodeFolder(callback, folderPath, dmxFolderId, dmxFileId)
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
addContentFromLocalNodeFolder: function(callback, folderPath, dmxFolderId, dmxFileId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(133);
    message.addStringWide(folderPath);
    message.addShort(dmxFolderId);
    message.addShort(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** addContentFromLocalNodeFolderToPath(callback, folderPath, projectPath, dmxFolderId, dmxFileId)
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
addContentFromLocalNodeFolderToPath: function(callback, folderPath, projectPath, dmxFolderId, dmxFileId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(134);
    message.addStringNarrow(folderPath);
    message.addStringNarrow(projectPath);
    message.addShort(dmxFolderId);
    message.addShort(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** addContentFolderFromLocalNodeToTreeItem(callback, folderPath, treeItemIndex, dmxFolderId, dmxFileId)
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
addContentFolderFromLocalNodeToTreeItem: function(callback, folderPath, treeItemIndex, dmxFolderId, dmxFileId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(155);
    message.addStringNarrow(folderPath);
    message.addInt(treeItemIndex);
    message.addShort(dmxFolderId);
    message.addShort(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** removeMediaById(callback, dmxFolderId, dmxFileId)
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
removeMediaById: function(callback, dmxFolderId, dmxFileId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(20);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** removeMeshById(callback, dmxFolderId, dmxFileId)
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
removeMeshById: function(callback, dmxFolderId, dmxFileId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(21);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** removeContentByName(callback, resourcePath, allEquallyNamed)
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
removeContentByName: function(callback, resourcePath, allEquallyNamed)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(125);
    message.addStringWide(resourcePath);
    message.addBool(allEquallyNamed);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** removeTreeItem(callback, treeItemIndex)
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
removeTreeItem: function(callback, treeItemIndex)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(156);
    message.addInt(treeItemIndex);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** removeAllResources(callback, removeFolder)
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
removeAllResources: function(callback, removeFolder)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(126);
    message.addBool(removeFolder);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setContentId(callback, resourcePath, dmxFolderId, dmxFileId)
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
setContentId: function(callback, resourcePath, dmxFolderId, dmxFileId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(234);
    message.addStringWide(resourcePath);
    message.addShort(dmxFolderId);
    message.addShort(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** spreadAll(callback)
**  no description available
**
** Arguments:
**
**
** Return values:
**
*/
spreadAll: function(callback)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(22);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** spreadMediaById(callback, dmxFolderId, dmxFileId)
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
spreadMediaById: function(callback, dmxFolderId, dmxFileId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(23);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** spreadMeshById(callback, dmxFolderId, dmxFileId)
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
spreadMeshById: function(callback, dmxFolderId, dmxFileId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(24);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** reloadMediaById(callback, dmxFolderId, dmxFileId)
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
reloadMediaById: function(callback, dmxFolderId, dmxFileId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(44);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** reloadMeshById(callback, dmxFolderId, dmxFileId)
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
reloadMeshById: function(callback, dmxFolderId, dmxFileId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(45);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** reloadResource(callback, resourcePath)
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
reloadResource: function(callback, resourcePath)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(147);
    message.addStringWide(resourcePath);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** spreadResource(callback, resourcePath)
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
spreadResource: function(callback, resourcePath)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(148);
    message.addStringWide(resourcePath);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** reloadAndSpreadResource(callback, resourcePath)
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
reloadAndSpreadResource: function(callback, resourcePath)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(159);
    message.addStringWide(resourcePath);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** reloadAndSpreadResource(callback, treeItemIndex)
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
reloadAndSpreadResource: function(callback, treeItemIndex)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(160);
    message.addInt(treeItemIndex);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** reloadAndSpreadResource(callback, dmxFolderId, dmxFileId)
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
reloadAndSpreadResource: function(callback, dmxFolderId, dmxFileId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(161);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** removeInconsistent(callback)
**  no description available
**
** Arguments:
**
**
** Return values:
**
*/
removeInconsistent: function(callback)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(34);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** removeAssetOnSite(callback, resourcePath, siteId)
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
removeAssetOnSite: function(callback, resourcePath, siteId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(170);
    message.addStringWide(resourcePath);
    message.addInt(siteId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** removeAssetOnSiteById(callback, dmxFolderId, dmxFileId, siteId)
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
removeAssetOnSiteById: function(callback, dmxFolderId, dmxFileId, siteId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(171);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addInt(siteId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** removeAssetOnSiteByTreeItem(callback, treeItemIndex, siteId)
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
removeAssetOnSiteByTreeItem: function(callback, treeItemIndex, siteId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(172);
    message.addInt(treeItemIndex);
    message.addInt(siteId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** attachAssetOnSite(callback, filePath, resourcePath, siteId)
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
attachAssetOnSite: function(callback, filePath, resourcePath, siteId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(173);
    message.addStringWide(filePath);
    message.addStringWide(resourcePath);
    message.addInt(siteId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** attachAssetOnSiteByDmxId(callback, filePath, dmxFolderId, dmxFileId, siteId)
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
attachAssetOnSiteByDmxId: function(callback, filePath, dmxFolderId, dmxFileId, siteId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(174);
    message.addStringWide(filePath);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addInt(siteId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** attachAssetOnSiteByTreeItem(callback, filePath, treeItemIndex, siteId)
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
attachAssetOnSiteByTreeItem: function(callback, filePath, treeItemIndex, siteId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(175);
    message.addStringWide(filePath);
    message.addInt(treeItemIndex);
    message.addInt(siteId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** storeActive(callback, sequenceId)
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
storeActive: function(callback, sequenceId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(25);
    message.addInt(sequenceId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** storeActiveToTime(callback, sequenceId, hours, minutes, seconds, frames)
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
storeActiveToTime: function(callback, sequenceId, hours, minutes, seconds, frames)
{
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
},
/*
** setMediaFrameBlendingById(callback, dmxFolderId, dmxFileId, frameBlended)
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
setMediaFrameBlendingById: function(callback, dmxFolderId, dmxFileId, frameBlended)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(27);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addBool(frameBlended);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setMediaDeinterlacingById(callback, dmxFolderId, dmxFileId, deinterlacer)
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
setMediaDeinterlacingById: function(callback, dmxFolderId, dmxFileId, deinterlacer)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(28);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addInt(deinterlacer);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setMediaAnisotropicFilteringById(callback, dmxFolderId, dmxFileId, useFiltering)
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
setMediaAnisotropicFilteringById: function(callback, dmxFolderId, dmxFileId, useFiltering)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(29);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addBool(useFiltering);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setMediaUnderscanById(callback, dmxFolderId, dmxFileId, useUnderscan)
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
setMediaUnderscanById: function(callback, dmxFolderId, dmxFileId, useUnderscan)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(30);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addBool(useUnderscan);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setMediaMpegColourSpaceById(callback, dmxFolderId, dmxFileId, useMpegColorSpace)
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
setMediaMpegColourSpaceById: function(callback, dmxFolderId, dmxFileId, useMpegColorSpace)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(31);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addBool(useMpegColorSpace);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setMediaAlphaChannelById(callback, dmxFolderId, dmxFileId, useAlphaChannel)
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
setMediaAlphaChannelById: function(callback, dmxFolderId, dmxFileId, useAlphaChannel)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(32);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addBool(useAlphaChannel);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** createTextInput(callback, dmxFolderId, dmxFileId, text)
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
createTextInput: function(callback, dmxFolderId, dmxFileId, text)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(52);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addStringNarrow(text);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setText(callback, dmxFolderId, dmxFileId, text)
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
setText: function(callback, dmxFolderId, dmxFileId, text)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(33);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addStringNarrow(text);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** loadProject(callback, folderPathToProject, projectXmlFileName, saveExisting)
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
loadProject: function(callback, folderPathToProject, projectXmlFileName, saveExisting)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(46);
    message.addStringNarrow(folderPathToProject);
    message.addStringNarrow(projectXmlFileName);
    message.addByte(saveExisting);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** closeProject(callback, save)
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
closeProject: function(callback, save)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(47);
    message.addByte(save);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** clearSelection(callback)
**  no description available
**
** Arguments:
**
**
** Return values:
**
*/
clearSelection: function(callback)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(48);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setDeviceAcceptDmxById(callback, siteId, deviceId, acceptDmx)
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
setDeviceAcceptDmxById: function(callback, siteId, deviceId, acceptDmx)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(49);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addByte(acceptDmx);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setSiteAcceptDmxById(callback, siteId, acceptDmx)
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
setSiteAcceptDmxById: function(callback, siteId, acceptDmx)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(50);
    message.addInt(siteId);
    message.addByte(acceptDmx);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setDeviceDmxAddressById(callback, siteId, deviceId, index, id1, id2)
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
setDeviceDmxAddressById: function(callback, siteId, deviceId, index, id1, id2)
{
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
},
/*
** setSiteDmxAddressById(callback, siteId, index, id1, id2)
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
setSiteDmxAddressById: function(callback, siteId, index, id1, id2)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(235);
    message.addInt(siteId);
    message.addInt(index);
    message.addInt(id1);
    message.addInt(id2);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setCuePlayMode(callback, sequenceId, cueId, playMode)
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
setCuePlayMode: function(callback, sequenceId, cueId, playMode)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(53);
    message.addInt(sequenceId);
    message.addInt(cueId);
    message.addInt(playMode);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setNextCuePlayMode(callback, sequenceId, playMode)
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
setNextCuePlayMode: function(callback, sequenceId, playMode)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(54);
    message.addInt(sequenceId);
    message.addInt(playMode);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setIgnoreNextCue(callback, sequenceId, doIgnore)
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
setIgnoreNextCue: function(callback, sequenceId, doIgnore)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(55);
    message.addInt(sequenceId);
    message.addByte(doIgnore);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** saveProject(callback)
**  no description available
**
** Arguments:
**
**
** Return values:
**
*/
saveProject: function(callback)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(62);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setIsSiteFullscreen(callback, siteId, isFullscreen)
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
setIsSiteFullscreen: function(callback, siteId, isFullscreen)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(64);
    message.addInt(siteId);
    message.addByte(isFullscreen);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setIsSiteFullscreenByIp(callback, ipAddress, isFullscreen)
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
setIsSiteFullscreenByIp: function(callback, ipAddress, isFullscreen)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(65);
    message.addStringNarrow(ipAddress);
    message.addByte(isFullscreen);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setTextTextureSize(callback, dmxFolderId, dmxFileId, width, height)
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
setTextTextureSize: function(callback, dmxFolderId, dmxFileId, width, height)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(66);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addInt(width);
    message.addInt(height);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setTextProperties(callback, dmxFolderId, dmxFileId, FontFamily, size, style, alignment, colorRed, colorGreen, colorBlue)
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
setTextProperties: function(callback, dmxFolderId, dmxFileId, fontFamily, size, style, alignment, colorRed, colorGreen, colorBlue)
{
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
},
/*
** setTextCenterOnTexture(callback, dmxFolderId, dmxFileId, centerOnTexture)
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
setTextCenterOnTexture: function(callback, dmxFolderId, dmxFileId, centerOnTexture)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(68);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addByte(centerOnTexture);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** createTextInputWide(callback, dmxFolderId, dmxFileId, text)
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
createTextInputWide: function(callback, dmxFolderId, dmxFileId, text)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(69);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addStringWide(text);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setTextWide(callback, dmxFolderId, dmxFileId, text)
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
setTextWide: function(callback, dmxFolderId, dmxFileId, text)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(70);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addStringWide(text);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setSiteIpById(callback, siteId, Ip)
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
setSiteIpById: function(callback, siteId, ip)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(71);
    message.addInt(siteId);
    message.addStringNarrow(ip);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** getClipRemainingTime(callback, siteId, deviceId, sequenceId)
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
getClipRemainingTime: function(callback, siteId, deviceId, sequenceId)
{
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
},
/*
** getRemainingTimeUntilNextCue(callback, sequenceId)
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
getRemainingTimeUntilNextCue: function(callback, sequenceId)
{
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
},
/*
** getResourceCount(callback)
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
getResourceCount: function(callback)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(82);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "mediaCount";cb[1]["type"] = "Int";
    sendToPb(cb,message);
},
/*
** getTreeItemCount(callback)
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
getTreeItemCount: function(callback)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(150);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "treeItemCount";cb[1]["type"] = "Int";
    sendToPb(cb,message);
},
/*
** createProjectFolder(callback, folderName)
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
createProjectFolder: function(callback, folderName)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(83);
    message.addStringWide(folderName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** createProjectFolderInPath(callback, folderName, projectPath)
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
createProjectFolderInPath: function(callback, folderName, projectPath)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(122);
    message.addStringWide(folderName);
    message.addStringWide(projectPath);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** createProjectFolderInTreeItem(callback, folderName, treeItemIndex)
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
createProjectFolderInTreeItem: function(callback, folderName, treeItemIndex)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(157);
    message.addStringWide(folderName);
    message.addInt(treeItemIndex);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** removeFolderFromProject(callback, projectPath)
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
removeFolderFromProject: function(callback, projectPath)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(123);
    message.addStringWide(projectPath);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setDeviceSelection(callback, siteId, deviceId, selectionMode)
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
setDeviceSelection: function(callback, siteId, deviceId, selectionMode)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(86);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addInt(selectionMode);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setClxControllerFaderMapping(callback, faderId, sequenceId)
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
setClxControllerFaderMapping: function(callback, faderId, sequenceId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(90);
    message.addInt(faderId);
    message.addInt(sequenceId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setClxControllerCueMapping(callback, cueBtnId, sequenceId, cueId)
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
setClxControllerCueMapping: function(callback, cueBtnId, sequenceId, cueId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(92);
    message.addInt(cueBtnId);
    message.addInt(sequenceId);
    message.addInt(cueId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** createCue(callback, sequenceId, cueId, hours, minutes, seconds, frames, cueName, cueKindId)
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
createCue: function(callback, sequenceId, cueId, hours, minutes, seconds, frames, cueName, cueKindId)
{
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
},
/*
** removeCueById(callback, sequenceId, cueId)
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
removeCueById: function(callback, sequenceId, cueId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(94);
    message.addInt(sequenceId);
    message.addInt(cueId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** removeAllCues(callback, sequenceId)
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
removeAllCues: function(callback, sequenceId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(95);
    message.addInt(sequenceId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** createLayerGetId(callback, siteId, isGraphicLayer)
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
createLayerGetId: function(callback, siteId, isGraphicLayer)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(96);
    message.addInt(siteId);
    message.addBool(isGraphicLayer);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "layerId";cb[1]["type"] = "Int";
    sendToPb(cb,message);
},
/*
** removeLayer(callback, siteId, layerId, isGraphicLayer)
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
removeLayer: function(callback, siteId, layerId, isGraphicLayer)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(97);
    message.addInt(siteId);
    message.addInt(layerId);
    message.addBool(isGraphicLayer);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setIsBackup(callback, enable)
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
setIsBackup: function(callback, enable)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(102);
    message.addBool(enable);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** applyView(callback, viewId)
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
applyView: function(callback, viewId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(103);
    message.addInt(viewId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setSpareFromSpread(callback, siteId, spareFromSpread)
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
setSpareFromSpread: function(callback, siteId, spareFromSpread)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(104);
    message.addInt(siteId);
    message.addBool(spareFromSpread);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** getParamResource(callback, siteId, deviceId, isMedia, parameterName)
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
getParamResource: function(callback, siteId, deviceId, isMedia, parameterName)
{
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
},
/*
** getMediaTransportMode(callback, siteId, deviceId)
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
getMediaTransportMode: function(callback, siteId, deviceId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(108);
    message.addInt(siteId);
    message.addInt(deviceId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "transportMode";cb[1]["type"] = "Int";
    sendToPb(cb,message);
},
/*
** getIsSiteConnected(callback, siteId)
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
getIsSiteConnected: function(callback, siteId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(109);
    message.addInt(siteId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "isConnected";cb[1]["type"] = "Bool";
    sendToPb(cb,message);
},
/*
** moveLayerUp(callback, siteId, deviceId)
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
moveLayerUp: function(callback, siteId, deviceId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(111);
    message.addInt(siteId);
    message.addInt(deviceId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** moveLayerDown(callback, siteId, deviceId)
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
moveLayerDown: function(callback, siteId, deviceId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(112);
    message.addInt(siteId);
    message.addInt(deviceId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** moveLayerToFirstPosition(callback, siteId, deviceId)
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
moveLayerToFirstPosition: function(callback, siteId, deviceId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(113);
    message.addInt(siteId);
    message.addInt(deviceId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** moveLayerToLastPosition(callback, siteId, deviceId)
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
moveLayerToLastPosition: function(callback, siteId, deviceId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(114);
    message.addInt(siteId);
    message.addInt(deviceId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setEnableClxController(callback, forJogShuttle, enable)
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
setEnableClxController: function(callback, forJogShuttle, enable)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(117);
    message.addByte(forJogShuttle);
    message.addBool(enable);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** getEnableClxController(callback, forJogShuttle)
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
getEnableClxController: function(callback, forJogShuttle)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(116);
    message.addByte(forJogShuttle);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "isEnabled";cb[1]["type"] = "Bool";
    sendToPb(cb,message);
},
/*
** setSequenceCueWaitTime(callback, sequenceId, cueId, hours, minutes, seconds, frames)
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
setSequenceCueWaitTime: function(callback, sequenceId, cueId, hours, minutes, seconds, frames)
{
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
},
/*
** setSequenceCueJumpTargetTime(callback, sequenceId, cueId, hours, minutes, seconds, frames)
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
setSequenceCueJumpTargetTime: function(callback, sequenceId, cueId, hours, minutes, seconds, frames)
{
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
},
/*
** setCueJumpCount(callback, sequenceId, cueId, jumpCount)
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
setCueJumpCount: function(callback, sequenceId, cueId, jumpCount)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(120);
    message.addInt(sequenceId);
    message.addInt(cueId);
    message.addInt(jumpCount);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** resetCueTriggerCount(callback, sequenceId, cueId)
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
resetCueTriggerCount: function(callback, sequenceId, cueId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(121);
    message.addInt(sequenceId);
    message.addInt(cueId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** getIsContentConsistent(callback, dmxFolderId, dmxFileId)
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
getIsContentConsistent: function(callback, dmxFolderId, dmxFileId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(127);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "isContentInconsistent";cb[1]["type"] = "Int";
    sendToPb(cb,message);
},
/*
** getIsContentConsistentByName(callback, resourcePath)
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
getIsContentConsistentByName: function(callback, resourcePath)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(128);
    message.addStringWide(resourcePath);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "isContentInconsistent";cb[1]["type"] = "Int";
    sendToPb(cb,message);
},
/*
** createSequenceGetId(callback)
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
createSequenceGetId: function(callback)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(130);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "sequenceId";cb[1]["type"] = "Int";
    sendToPb(cb,message);
},
/*
** removeSequence(callback, sequenceId)
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
removeSequence: function(callback, sequenceId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(131);
    message.addInt(sequenceId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** sendMouseInput(callback, siteId, deviceId, mouseEventType, screenPosX, screenPosY, firstPass)
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
sendMouseInput: function(callback, siteId, deviceId, mouseEventType, screenPosX, screenPosY, firstPass)
{
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
},
/*
** sendMouseScroll(callback, siteId, deviceId, scrollValue)
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
sendMouseScroll: function(callback, siteId, deviceId, scrollValue)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(233);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addInt(scrollValue);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** sendTouchInput(callback, siteId, deviceId, touchId, touchType, screenPosX, screenPosY, firstPass)
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
sendTouchInput: function(callback, siteId, deviceId, touchId, touchType, screenPosX, screenPosY, firstPass)
{
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
},
/*
** sendKeyboardInput(callback, siteId, keyboardEventType, keyCode)
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
sendKeyboardInput: function(callback, siteId, keyboardEventType, keyCode)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(137);
    message.addInt(siteId);
    message.addInt(keyboardEventType);
    message.addInt(keyCode);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setShowCursorInFullscreen(callback, siteId, showCursor)
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
setShowCursorInFullscreen: function(callback, siteId, showCursor)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(138);
    message.addInt(siteId);
    message.addBool(showCursor);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setBrowserURL(callback, dmxFolderId, dmxFileId, url)
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
setBrowserURL: function(callback, dmxFolderId, dmxFileId, url)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(139);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addStringWide(url);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setBrowserURLByName(callback, browserProjectPath, url)
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
setBrowserURLByName: function(callback, browserProjectPath, url)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(140);
    message.addStringWide(browserProjectPath);
    message.addStringWide(url);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** refreshBrowserView(callback, siteId, deviceId)
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
refreshBrowserView: function(callback, siteId, deviceId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(141);
    message.addInt(siteId);
    message.addInt(deviceId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setBrowserSize(callback, dmxFolderId, dmxFileId, width, height)
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
setBrowserSize: function(callback, dmxFolderId, dmxFileId, width, height)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(142);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addInt(width);
    message.addInt(height);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setBrowserSizeByName(callback, browserProjectPath, width, height)
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
setBrowserSizeByName: function(callback, browserProjectPath, width, height)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(138);
    message.addStringWide(browserProjectPath);
    message.addInt(width);
    message.addInt(height);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setNodeOfSiteIsAudioClockMaster(callback, siteId, isMaster)
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
setNodeOfSiteIsAudioClockMaster: function(callback, siteId, isMaster)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(145);
    message.addInt(siteId);
    message.addBool(isMaster);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** addEncryptionKeyGetId(callback, encryptionKey)
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
addEncryptionKeyGetId: function(callback, encryptionKey)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(164);
    message.addStringWide(encryptionKey);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "isKeyAdded";cb[1]["type"] = "Bool";
    sendToPb(cb,message);
},
/*
** addEncryptionPolicyGetId(callback, encryptionPolicy)
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
addEncryptionPolicyGetId: function(callback, encryptionPolicy)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(165);
    message.addStringWide(encryptionPolicy);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "isKeyAdded";cb[1]["type"] = "Bool";
    sendToPb(cb,message);
},
/*
** setRouteInputToLayer(callback, siteId, enableInputRouting)
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
setRouteInputToLayer: function(callback, siteId, enableInputRouting)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(166);
    message.addInt(siteId);
    message.addBool(enableInputRouting);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setRouteInputToAutomation(callback, siteId, enableInputAutomation)
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
setRouteInputToAutomation: function(callback, siteId, enableInputAutomation)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(167);
    message.addInt(siteId);
    message.addBool(enableInputAutomation);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setEnableOutputForPicking(callback, siteId, outputId, enableInputPicking)
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
setEnableOutputForPicking: function(callback, siteId, outputId, enableInputPicking)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(168);
    message.addInt(siteId);
    message.addInt(outputId);
    message.addBool(enableInputPicking);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setASIOMasterVolume(callback, siteId, asioVolume)
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
setASIOMasterVolume: function(callback, siteId, asioVolume)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(169);
    message.addInt(siteId);
    message.addDouble(asioVolume);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** getThumbnailByPath(callback, resourcePath)
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
getThumbnailByPath: function(callback, resourcePath)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(162);
    message.addStringWide(resourcePath);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "thumbnailWidth";cb[1]["type"] = "Int";
    cb[2] = new Object();cb[2]["name"] = "thumbnailHeight";cb[2]["type"] = "Int";
    cb[3] = new Object();cb[3]["name"] = "thumbnailData";cb[3]["type"] = "ByteBuffer";
    sendToPb(cb,message);
},
/*
** getThumbnailByItemIndex(callback, treeItemIndex)
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
getThumbnailByItemIndex: function(callback, treeItemIndex)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(163);
    message.addInt(treeItemIndex);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "thumbnailWidth";cb[1]["type"] = "Int";
    cb[2] = new Object();cb[2]["name"] = "thumbnailHeight";cb[2]["type"] = "Int";
    cb[3] = new Object();cb[3]["name"] = "thumbnailData";cb[3]["type"] = "ByteBuffer";
    sendToPb(cb,message);
},
/*
** createPlaylist(callback, doSetDmxId, dmxFolderId, dmxFileId)
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
createPlaylist: function(callback, doSetDmxId, dmxFolderId, dmxFileId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(176);
    message.addBool(doSetDmxId);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** createPlaylistInPath(callback, projectPath, doSetDmxId, dmxFolderId, dmxFileId)
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
createPlaylistInPath: function(callback, projectPath, doSetDmxId, dmxFolderId, dmxFileId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(177);
    message.addStringNarrow(projectPath);
    message.addBool(doSetDmxId);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** createPlaylistInItemId(callback, treeItemIndex, setdmxFileIds, newDmxFolderId, newdmxFileId)
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
createPlaylistInItemId: function(callback, treeItemIndex, setdmxFileIds, newDmxFolderId, newdmxFileId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(178);
    message.addInt(treeItemIndex);
    message.addBool(setdmxFileIds);
    message.addInt(newDmxFolderId);
    message.addInt(newdmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** createPlaylistInPathFromFolder(callback, projectPath, sourceProjectPath, setdmxFileIds, newDmxFolderId, newdmxFileId)
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
createPlaylistInPathFromFolder: function(callback, projectPath, sourceProjectPath, setdmxFileIds, newDmxFolderId, newdmxFileId)
{
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
},
/*
** createPlaylistInTreeItemFromFolder(callback, treeItemIndex, sourceFolderItemId, setdmxFileIds, newDmxFolderId, newdmxFileId)
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
createPlaylistInTreeItemFromFolder: function(callback, treeItemIndex, sourceFolderItemId, setdmxFileIds, newDmxFolderId, newdmxFileId)
{
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
},
/*
** pushBackPlaylistEntryByDmxId(callback, playlistDmxFolderId, playlistdmxFileId, resourceDmxFolderId, resourceDmxFileId)
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
pushBackPlaylistEntryByDmxId: function(callback, playlistDmxFolderId, playlistdmxFileId, resourceDmxFolderId, resourceDmxFileId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(181);
    message.addInt(playlistDmxFolderId);
    message.addInt(playlistdmxFileId);
    message.addInt(resourceDmxFolderId);
    message.addInt(resourceDmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** pushBackPlaylistEntryByPath(callback, playlistPath, resourcePath)
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
pushBackPlaylistEntryByPath: function(callback, playlistPath, resourcePath)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(182);
    message.addStringNarrow(playlistPath);
    message.addStringNarrow(resourcePath);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** pushBackPlaylistEntryByItemId(callback, playlistItemId, resourceItemId)
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
pushBackPlaylistEntryByItemId: function(callback, playlistItemId, resourceItemId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(183);
    message.addInt(playlistItemId);
    message.addInt(resourceItemId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** insertPlaylistEntryByDmxId(callback, playlistDmxFolderId, playlistdmxFileId, resourceDmxFolderId, resourceDmxFileId, index)
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
insertPlaylistEntryByDmxId: function(callback, playlistDmxFolderId, playlistdmxFileId, resourceDmxFolderId, resourceDmxFileId, index)
{
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
},
/*
** insertPlaylistEntryByPath(callback, playlistPath, resourcePath, index)
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
insertPlaylistEntryByPath: function(callback, playlistPath, resourcePath, index)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(185);
    message.addStringNarrow(playlistPath);
    message.addStringNarrow(resourcePath);
    message.addInt(index);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** insertPlaylistEntryByItemId(callback, playlistItemId, resourceItemId, index)
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
insertPlaylistEntryByItemId: function(callback, playlistItemId, resourceItemId, index)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(186);
    message.addInt(playlistItemId);
    message.addInt(resourceItemId);
    message.addInt(index);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** removePlaylistEntryByDmxId(callback, playlistDmxFolderId, playlistdmxFileId, index)
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
removePlaylistEntryByDmxId: function(callback, playlistDmxFolderId, playlistdmxFileId, index)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(187);
    message.addInt(playlistDmxFolderId);
    message.addInt(playlistdmxFileId);
    message.addInt(index);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** removePlaylistEntryByPath(callback, playlistPath, index)
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
removePlaylistEntryByPath: function(callback, playlistPath, index)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(188);
    message.addStringNarrow(playlistPath);
    message.addInt(index);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** removePlaylistEntryByItemId(callback, playlistItemId, index)
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
removePlaylistEntryByItemId: function(callback, playlistItemId, index)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(189);
    message.addInt(playlistItemId);
    message.addInt(index);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** getPlaylistSizeByDmxId(callback, playlistDmxFolderId, playlistdmxFileId)
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
getPlaylistSizeByDmxId: function(callback, playlistDmxFolderId, playlistdmxFileId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(190);
    message.addInt(playlistDmxFolderId);
    message.addInt(playlistdmxFileId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "playlistSize";cb[1]["type"] = "Int";
    sendToPb(cb,message);
},
/*
** getPlaylistSizeByPath(callback, playlistPath)
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
getPlaylistSizeByPath: function(callback, playlistPath)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(191);
    message.addStringNarrow(playlistPath);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "playlistSize";cb[1]["type"] = "Int";
    sendToPb(cb,message);
},
/*
** getPlaylistSizeByItemId(callback, playlistItemId)
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
getPlaylistSizeByItemId: function(callback, playlistItemId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(192);
    message.addInt(playlistItemId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "playlistSize";cb[1]["type"] = "Int";
    sendToPb(cb,message);
},
/*
** setPlaylistEntryIndexByDmxId(callback, playlistDmxFolderId, playlistdmxFileId, index, newIndex)
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
setPlaylistEntryIndexByDmxId: function(callback, playlistDmxFolderId, playlistdmxFileId, index, newIndex)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(199);
    message.addInt(playlistDmxFolderId);
    message.addInt(playlistdmxFileId);
    message.addInt(index);
    message.addInt(newIndex);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setPlaylistEntryIndexByPath(callback, playlistPath, index, newIndex)
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
setPlaylistEntryIndexByPath: function(callback, playlistPath, index, newIndex)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(200);
    message.addStringNarrow(playlistPath);
    message.addInt(index);
    message.addInt(newIndex);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setPlaylistEntryIndexByItemId(callback, playlistItemId, index, newIndex)
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
setPlaylistEntryIndexByItemId: function(callback, playlistItemId, index, newIndex)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(201);
    message.addInt(playlistItemId);
    message.addInt(index);
    message.addInt(newIndex);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setPlaylistEntryDurationByDmxId(callback, playlistDmxFolderId, playlistdmxFileId, index, hours, minutes, seconds, frames)
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
setPlaylistEntryDurationByDmxId: function(callback, playlistDmxFolderId, playlistdmxFileId, index, hours, minutes, seconds, frames)
{
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
},
/*
** setPlaylistEntryDurationByPath(callback, playlistPath, index, hours, minutes, seconds, frames)
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
setPlaylistEntryDurationByPath: function(callback, playlistPath, index, hours, minutes, seconds, frames)
{
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
},
/*
** setPlaylistEntryDurationByItemId(callback, playlistItemId, index, hours, minutes, seconds, frames)
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
setPlaylistEntryDurationByItemId: function(callback, playlistItemId, index, hours, minutes, seconds, frames)
{
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
},
/*
** setPlaylistEntryFadeOutTimeByDmxId(callback, playlistDmxFolderId, playlistdmxFileId, index, hours, minutes, seconds, frames)
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
setPlaylistEntryFadeOutTimeByDmxId: function(callback, playlistDmxFolderId, playlistdmxFileId, index, hours, minutes, seconds, frames)
{
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
},
/*
** setPlaylistEntryFadeOutTimeByPath(callback, playlistPath, index, hours, minutes, seconds, frames)
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
setPlaylistEntryFadeOutTimeByPath: function(callback, playlistPath, index, hours, minutes, seconds, frames)
{
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
},
/*
** setPlaylistEntryFadeOutTimeByItemId(callback, playlistItemId, index, hours, minutes, seconds, frames)
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
setPlaylistEntryFadeOutTimeByItemId: function(callback, playlistItemId, index, hours, minutes, seconds, frames)
{
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
},
/*
** setPlaylistEntryInPointByDmxId(callback, playlistDmxFolderId, playlistdmxFileId, index, hours, minutes, seconds, frames)
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
setPlaylistEntryInPointByDmxId: function(callback, playlistDmxFolderId, playlistdmxFileId, index, hours, minutes, seconds, frames)
{
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
},
/*
** setPlaylistEntryInPointByPath(callback, playlistPath, index, hours, minutes, seconds, frames)
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
setPlaylistEntryInPointByPath: function(callback, playlistPath, index, hours, minutes, seconds, frames)
{
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
},
/*
** setPlaylistEntryInPointByItemId(callback, playlistItemId, index, hours, minutes, seconds, frames)
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
setPlaylistEntryInPointByItemId: function(callback, playlistItemId, index, hours, minutes, seconds, frames)
{
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
},
/*
** setPlaylistEntryOutPointByDmxId(callback, playlistDmxFolderId, playlistdmxFileId, index, hours, minutes, seconds, frames)
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
setPlaylistEntryOutPointByDmxId: function(callback, playlistDmxFolderId, playlistdmxFileId, index, hours, minutes, seconds, frames)
{
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
},
/*
** setPlaylistEntryOutPointByPath(callback, playlistPath, index, hours, minutes, seconds, frames)
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
setPlaylistEntryOutPointByPath: function(callback, playlistPath, index, hours, minutes, seconds, frames)
{
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
},
/*
** setPlaylistEntryOutPointByItemId(callback, playlistItemId, index, hours, minutes, seconds, frames)
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
setPlaylistEntryOutPointByItemId: function(callback, playlistItemId, index, hours, minutes, seconds, frames)
{
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
},
/*
** setPlaylistEntryTransitionByDmxId(callback, playlistDmxFolderId, playlistdmxFileId, index, fadeFxId)
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
setPlaylistEntryTransitionByDmxId: function(callback, playlistDmxFolderId, playlistdmxFileId, index, fadeFxId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(215);
    message.addInt(playlistDmxFolderId);
    message.addInt(playlistdmxFileId);
    message.addInt(index);
    message.addInt(fadeFxId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setPlaylistEntryTransitionByPath(callback, playlistPath, index, fadeFxId)
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
setPlaylistEntryTransitionByPath: function(callback, playlistPath, index, fadeFxId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(216);
    message.addStringNarrow(playlistPath);
    message.addInt(index);
    message.addInt(fadeFxId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setPlaylistEntryTransitionByItemId(callback, playlistItemId, index, fadeFxId)
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
setPlaylistEntryTransitionByItemId: function(callback, playlistItemId, index, fadeFxId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(217);
    message.addInt(playlistItemId);
    message.addInt(index);
    message.addInt(fadeFxId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setPlaylistEntryNoteByDmxId(callback, playlistDmxFolderId, playlistdmxFileId, index, pNote)
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
setPlaylistEntryNoteByDmxId: function(callback, playlistDmxFolderId, playlistdmxFileId, index, pNote)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(218);
    message.addInt(playlistDmxFolderId);
    message.addInt(playlistdmxFileId);
    message.addInt(index);
    message.addStringNarrow(pNote);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setPlaylistEntryNoteByPath(callback, playlistPath, index, pNote)
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
setPlaylistEntryNoteByPath: function(callback, playlistPath, index, pNote)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(219);
    message.addStringNarrow(playlistPath);
    message.addInt(index);
    message.addStringNarrow(pNote);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setPlaylistEntryNoteByItemId(callback, playlistItemId, index, pNote)
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
setPlaylistEntryNoteByItemId: function(callback, playlistItemId, index, pNote)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(220);
    message.addInt(playlistItemId);
    message.addInt(index);
    message.addStringNarrow(pNote);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** recordLiveInputByDmxId(callback, folderID, fileID, pFilename, encodingPresetName, hours, minutes, seconds, frames)
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
recordLiveInputByDmxId: function(callback, folderID, fileID, pFilename, encodingPresetName, hours, minutes, seconds, frames)
{
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
},
/*
** recordLiveInputStartByDmxId(callback, folderID, fileID, pFilename, encodingPresetName)
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
recordLiveInputStartByDmxId: function(callback, folderID, fileID, pFilename, encodingPresetName)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(223);
    message.addInt(folderID);
    message.addInt(fileID);
    message.addStringNarrow(pFilename);
    message.addStringNarrow(encodingPresetName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** recordLiveInputStop(callback)
**  no description available
**
** Arguments:
**
**
** Return values:
**
*/
recordLiveInputStop: function(callback)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(222);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** recordLiveInputByName(callback, liveInputResourcePath, pFilename, encodingPresetName, hours, minutes, seconds, frames)
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
recordLiveInputByName: function(callback, liveInputResourcePath, pFilename, encodingPresetName, hours, minutes, seconds, frames)
{
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
},
/*
** recordLiveInputStartByName(callback, liveInputResourcePath, pFilename, encodingPresetName)
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
recordLiveInputStartByName: function(callback, liveInputResourcePath, pFilename, encodingPresetName)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(226);
    message.addStringNarrow(liveInputResourcePath);
    message.addStringNarrow(pFilename);
    message.addStringNarrow(encodingPresetName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** exportVideo(callback, pFilename, encodingPresetName, sequenceId, startHour, startMinute, startSecond, startFrame, endHour, endMinute, endSec, endFrame)
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
exportVideo: function(callback, pFilename, encodingPresetName, sequenceId, startHour, startMinute, startSecond, startFrame, endHour, endMinute, endSec, endFrame)
{
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
},
/*
** encodeFile(callback, resourcePath, encodingPreset)
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
encodeFile: function(callback, resourcePath, encodingPreset)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(228);
    message.addStringNarrow(resourcePath);
    message.addStringNarrow(encodingPreset);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** encodeFileByDmxId(callback, folderID, fileID, encodingPreset)
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
encodeFileByDmxId: function(callback, folderID, fileID, encodingPreset)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(230);
    message.addInt(folderID);
    message.addInt(fileID);
    message.addStringNarrow(encodingPreset);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** encodeFileToPath(callback, resourcePath, projectPath, overwriteExisting, encodingPreset)
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
encodeFileToPath: function(callback, resourcePath, projectPath, overwriteExisting, encodingPreset)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(229);
    message.addStringNarrow(resourcePath);
    message.addStringNarrow(projectPath);
    message.addBool(overwriteExisting);
    message.addStringNarrow(encodingPreset);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** encodeFile(callback, folderID, fileID, projectPath, overwriteExisting, encodingPreset)
**  no description available
**
** Arguments:
**
** Int folderID
**  no description available
** Int fileID
**  no description available
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
encodeFile: function(callback, folderID, fileID, projectPath, overwriteExisting, encodingPreset)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(231);
    message.addInt(folderID);
    message.addInt(fileID);
    message.addStringNarrow(projectPath);
    message.addBool(overwriteExisting);
    message.addStringNarrow(encodingPreset);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setCanvasResolutionByDmxId(callback, canvasDmxFolderId, canvasDmxFileId, width, height)
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
setCanvasResolutionByDmxId: function(callback, canvasDmxFolderId, canvasDmxFileId, width, height)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(239);
    message.addInt(canvasDmxFolderId);
    message.addInt(canvasDmxFileId);
    message.addInt(width);
    message.addInt(height);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setCanvasResolutionByPath(callback, canvasResourcePath, width, height)
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
setCanvasResolutionByPath: function(callback, canvasResourcePath, width, height)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(240);
    message.addStringNarrow(canvasResourcePath);
    message.addInt(width);
    message.addInt(height);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setCanvasResolutionByItemId(callback, canvasItemId, width, height)
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
setCanvasResolutionByItemId: function(callback, canvasItemId, width, height)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(241);
    message.addInt(canvasItemId);
    message.addInt(width);
    message.addInt(height);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** clearCanvasByDmxId(callback, canvasDmxFolderId, canvasDmxFileId)
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
clearCanvasByDmxId: function(callback, canvasDmxFolderId, canvasDmxFileId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(242);
    message.addInt(canvasDmxFolderId);
    message.addInt(canvasDmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** clearCanvasByPath(callback, canvasResourcePath)
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
clearCanvasByPath: function(callback, canvasResourcePath)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(243);
    message.addStringNarrow(canvasResourcePath);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** clearCanvasByItemId(callback, canvasItemId)
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
clearCanvasByItemId: function(callback, canvasItemId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(244);
    message.addInt(canvasItemId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** executeCanvasCmdByDmxId(callback, canvasDmxFolderId, canvasDmxFileId, pCmd, cmdContainsResourcePath)
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
executeCanvasCmdByDmxId: function(callback, canvasDmxFolderId, canvasDmxFileId, pCmd, cmdContainsResourcePath)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(245);
    message.addInt(canvasDmxFolderId);
    message.addInt(canvasDmxFileId);
    message.addStringNarrow(pCmd);
    message.addBool(cmdContainsResourcePath);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** executeCanvasCmdByPath(callback, canvasResourcePath, pCmd, cmdContainsResourcePath)
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
executeCanvasCmdByPath: function(callback, canvasResourcePath, pCmd, cmdContainsResourcePath)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(246);
    message.addStringNarrow(canvasResourcePath);
    message.addStringNarrow(pCmd);
    message.addBool(cmdContainsResourcePath);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** executeCanvasCmdByItemId(callback, canvasItemId, pCmd, cmdContainsResourcePath)
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
executeCanvasCmdByItemId: function(callback, canvasItemId, pCmd, cmdContainsResourcePath)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(247);
    message.addInt(canvasItemId);
    message.addStringNarrow(pCmd);
    message.addBool(cmdContainsResourcePath);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** getCanvasDrawCommandsByDmxId(callback, canvasDmxFolderId, canvasDmxFileId)
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
getCanvasDrawCommandsByDmxId: function(callback, canvasDmxFolderId, canvasDmxFileId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(248);
    message.addInt(canvasDmxFolderId);
    message.addInt(canvasDmxFileId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "commands";cb[1]["type"] = "StringNarrow";
    sendToPb(cb,message);
},
/*
** getCanvasDrawCommandsByPath(callback, canvasResourcePath)
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
getCanvasDrawCommandsByPath: function(callback, canvasResourcePath)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(249);
    message.addStringNarrow(canvasResourcePath);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "commands";cb[1]["type"] = "StringNarrow";
    sendToPb(cb,message);
},
/*
** getCanvasDrawCommandsByItemId(callback, canvasItemId)
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
getCanvasDrawCommandsByItemId: function(callback, canvasItemId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(250);
    message.addInt(canvasItemId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "commands";cb[1]["type"] = "StringNarrow";
    sendToPb(cb,message);
},
/*
** getMediaWidthByDmxId(callback, dmxFolderId, dmxFileId)
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
getMediaWidthByDmxId: function(callback, dmxFolderId, dmxFileId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(251);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "width";cb[1]["type"] = "Int";
    sendToPb(cb,message);
},
/*
** getMediaWidthByPath(callback, folderPathToProject)
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
getMediaWidthByPath: function(callback, folderPathToProject)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(252);
    message.addStringNarrow(folderPathToProject);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "width";cb[1]["type"] = "Int";
    sendToPb(cb,message);
},
/*
** getMediaWidthByItemId(callback, itemId)
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
getMediaWidthByItemId: function(callback, itemId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(253);
    message.addInt(itemId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "width";cb[1]["type"] = "Int";
    sendToPb(cb,message);
},
/*
** getMediaHeightByDmxId(callback, dmxFolderId, dmxFileId)
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
getMediaHeightByDmxId: function(callback, dmxFolderId, dmxFileId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(254);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "height";cb[1]["type"] = "Int";
    sendToPb(cb,message);
},
/*
** getMediaHeightByPath(callback, folderPathToProject)
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
getMediaHeightByPath: function(callback, folderPathToProject)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(255);
    message.addStringNarrow(folderPathToProject);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "height";cb[1]["type"] = "Int";
    sendToPb(cb,message);
},
/*
** getMediaHeightByItemId(callback, itemId)
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
getMediaHeightByItemId: function(callback, itemId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(256);
    message.addInt(itemId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "height";cb[1]["type"] = "Int";
    sendToPb(cb,message);
},
/*
** getProjectPathOnDisc(callback)
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
getProjectPathOnDisc: function(callback)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(257);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "commands";cb[1]["type"] = "StringNarrow";
    sendToPb(cb,message);
},
/*
** saveProjectAs(callback, folderPathToProject, projectXmlFileName)
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
saveProjectAs: function(callback, folderPathToProject, projectXmlFileName)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(258);
    message.addStringNarrow(folderPathToProject);
    message.addStringNarrow(projectXmlFileName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** saveProjectCopy(callback, folderPathToProject, projectXmlFileName)
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
saveProjectCopy: function(callback, folderPathToProject, projectXmlFileName)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(259);
    message.addStringNarrow(folderPathToProject);
    message.addStringNarrow(projectXmlFileName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** bundleProject(callback, bundlePath, bundleName)
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
bundleProject: function(callback, bundlePath, bundleName)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(260);
    message.addStringNarrow(bundlePath);
    message.addStringNarrow(bundleName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setResourceNameByPath(callback, resourcePath, newResourceName)
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
setResourceNameByPath: function(callback, resourcePath, newResourceName)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(261);
    message.addStringNarrow(resourcePath);
    message.addStringNarrow(newResourceName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setResourceNameByItemIndex(callback, treeItemIndex, newResourceName)
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
setResourceNameByItemIndex: function(callback, treeItemIndex, newResourceName)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(263);
    message.addInt(treeItemIndex);
    message.addStringNarrow(newResourceName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setResourceNameByDmxId(callback, dmxFolderId, dmxFileId, newResourceName)
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
setResourceNameByDmxId: function(callback, dmxFolderId, dmxFileId, newResourceName)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(262);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addStringNarrow(newResourceName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** sendCanvasCmdsToStackByDmxId(callback, canvasDmxFolderId, canvasDmxFileId, doAddToStack)
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
sendCanvasCmdsToStackByDmxId: function(callback, canvasDmxFolderId, canvasDmxFileId, doAddToStack)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(265);
    message.addInt(canvasDmxFolderId);
    message.addInt(canvasDmxFileId);
    message.addBool(doAddToStack);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setAddCanvasCmdsToStackByPath(callback, canvasResourcePath, doAddToStack)
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
setAddCanvasCmdsToStackByPath: function(callback, canvasResourcePath, doAddToStack)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(266);
    message.addStringNarrow(canvasResourcePath);
    message.addBool(doAddToStack);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setAddCanvasCmdsToStackByItemId(callback, canvasItemId, doAddToStack)
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
setAddCanvasCmdsToStackByItemId: function(callback, canvasItemId, doAddToStack)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(267);
    message.addInt(canvasItemId);
    message.addBool(doAddToStack);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** clearEmptyPlaylistEntriesByDmxId(callback, playlistDmxFolderId, playlistdmxFileId)
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
clearEmptyPlaylistEntriesByDmxId: function(callback, playlistDmxFolderId, playlistdmxFileId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(268);
    message.addInt(playlistDmxFolderId);
    message.addInt(playlistdmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** clearEmptyPlaylistEntriesByPath(callback, playlistPath)
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
clearEmptyPlaylistEntriesByPath: function(callback, playlistPath)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(269);
    message.addStringNarrow(playlistPath);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** clearEmptyPlaylistEntriesByItemId(callback, playlistItemId)
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
clearEmptyPlaylistEntriesByItemId: function(callback, playlistItemId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(270);
    message.addInt(playlistItemId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** clearAllPlaylistEntriesByDmxId(callback, playlistDmxFolderId, playlistdmxFileId)
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
clearAllPlaylistEntriesByDmxId: function(callback, playlistDmxFolderId, playlistdmxFileId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(271);
    message.addInt(playlistDmxFolderId);
    message.addInt(playlistdmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** clearAllPlaylistEntriesByPath(callback, playlistPath)
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
clearAllPlaylistEntriesByPath: function(callback, playlistPath)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(272);
    message.addStringNarrow(playlistPath);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** clearAllPlaylistEntriesByItemIndex(callback, playlistItemId)
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
clearAllPlaylistEntriesByItemIndex: function(callback, playlistItemId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(273);
    message.addInt(playlistItemId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setSublayerParamOfKindDouble(callback, siteId, deviceId, sublayerId, parameterKindId, parameterValue, doSilent, doDirect)
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
setSublayerParamOfKindDouble: function(callback, siteId, deviceId, sublayerId, parameterKindId, parameterValue, doSilent, doDirect)
{
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
},
/*
** handleSublayer(callback, siteId, deviceId, action, data)
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
handleSublayer: function(callback, siteId, deviceId, action, data)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(275);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addInt(action);
    message.addInt(data);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setCueName(callback, sequenceId, cueId, cueName)
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
setCueName: function(callback, sequenceId, cueId, cueName)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(276);
    message.addInt(sequenceId);
    message.addInt(cueId);
    message.addStringNarrow(cueName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** getCueName(callback, sequenceId, cueId)
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
getCueName: function(callback, sequenceId, cueId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(277);
    message.addInt(sequenceId);
    message.addInt(cueId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "cueName";cb[1]["type"] = "StringNarrow";
    sendToPb(cb,message);
},
/*
** storeActiveSite(callback, sequenceId, siteId)
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
storeActiveSite: function(callback, sequenceId, siteId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(278);
    message.addInt(sequenceId);
    message.addInt(siteId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** storeActiveDevice(callback, sequenceId, siteId, deviceId)
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
storeActiveDevice: function(callback, sequenceId, siteId, deviceId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(279);
    message.addInt(sequenceId);
    message.addInt(siteId);
    message.addInt(deviceId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** storeActiveParam(callback, sequenceId, siteId, deviceId, parameterName)
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
storeActiveParam: function(callback, sequenceId, siteId, deviceId, parameterName)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(280);
    message.addInt(sequenceId);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addStringNarrow(parameterName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** assignDevice(callback, siteId, deviceId, sourceDeviceId, parameterName)
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
assignDevice: function(callback, siteId, deviceId, sourceDeviceId, parameterName)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(282);
    message.addInt(siteId);
    message.addInt(deviceId);
    message.addInt(sourceDeviceId);
    message.addStringNarrow(parameterName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** assignResourceToParam(callback, siteId, deviceId, dmxFolderId, dmxFileId, forMesh, parameterName)
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
assignResourceToParam: function(callback, siteId, deviceId, dmxFolderId, dmxFileId, forMesh, parameterName)
{
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
},
/*
** addImageSequence(callback, folderPath, siteId, dmxFolderId, dmxFileId, fps)
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
addImageSequence: function(callback, folderPath, siteId, dmxFolderId, dmxFileId, fps)
{
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
},
/*
** addImageSequenceToFolder(callback, folderPath, siteId, dmxFolderId, dmxFileId, fps, projectPath)
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
addImageSequenceToFolder: function(callback, folderPath, siteId, dmxFolderId, dmxFileId, fps, projectPath)
{
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
},
/*
** addImageSequenceToTreeItem(callback, folderPath, siteId, dmxFolderId, dmxFileId, fps, treeItemIndex)
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
addImageSequenceToTreeItem: function(callback, folderPath, siteId, dmxFolderId, dmxFileId, fps, treeItemIndex)
{
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
},
/*
** addImageSequenceFromLocalNode(callback, folderPath, fps)
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
addImageSequenceFromLocalNode: function(callback, folderPath, fps)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(287);
    message.addStringNarrow(folderPath);
    message.addInt(fps);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** addImageSequenceFromLocalNodeId(callback, folderPath, fps, dmxFolderId, dmxFileId)
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
addImageSequenceFromLocalNodeId: function(callback, folderPath, fps, dmxFolderId, dmxFileId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(288);
    message.addStringNarrow(folderPath);
    message.addInt(fps);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** addImageSequenceFromLocalNodeToFolder(callback, folderPath, fps, projectPath)
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
addImageSequenceFromLocalNodeToFolder: function(callback, folderPath, fps, projectPath)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(289);
    message.addStringNarrow(folderPath);
    message.addInt(fps);
    message.addStringNarrow(projectPath);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** addImageSequenceFromLocalNodeToFolderId(callback, folderPath, fps, dmxFolderId, dmxFileId, projectPath)
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
addImageSequenceFromLocalNodeToFolderId: function(callback, folderPath, fps, dmxFolderId, dmxFileId, projectPath)
{
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
},
/*
** addImageSequenceFromLocalNodeToTreeItem(callback, folderPath, fps, treeItemIndex)
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
addImageSequenceFromLocalNodeToTreeItem: function(callback, folderPath, fps, treeItemIndex)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(291);
    message.addStringNarrow(folderPath);
    message.addInt(fps);
    message.addInt(treeItemIndex);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** addImageSequenceFromLocalNodeToTreeItemId(callback, folderPath, fps, dmxFolderId, dmxFileId, treeItemIndex)
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
addImageSequenceFromLocalNodeToTreeItemId: function(callback, folderPath, fps, dmxFolderId, dmxFileId, treeItemIndex)
{
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
},
/*
** setTextFormatted(callback, dmxFolderId, dmxFileId, text, isFormatted)
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
setTextFormatted: function(callback, dmxFolderId, dmxFileId, text, isFormatted)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(293);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addStringNarrow(text);
    message.addBool(isFormatted);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setTextFormattedWide(callback, dmxFolderId, dmxFileId, text, isFormatted)
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
setTextFormattedWide: function(callback, dmxFolderId, dmxFileId, text, isFormatted)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(294);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addStringWide(text);
    message.addBool(isFormatted);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** getCurrentTimeCueInfo(callback, sequenceId)
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
getCurrentTimeCueInfo: function(callback, sequenceId)
{
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
},
/*
** getContentIsConsistentByTreeItem(callback, treeItemIndex)
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
getContentIsConsistentByTreeItem: function(callback, treeItemIndex)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(296);
    message.addInt(treeItemIndex);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** spreadToSite(callback, resourcePath, siteId)
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
spreadToSite: function(callback, resourcePath, siteId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(297);
    message.addStringNarrow(resourcePath);
    message.addInt(siteId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setGroupSelection(callback, groupIndex, selectionMode)
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
setGroupSelection: function(callback, groupIndex, selectionMode)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(298);
    message.addInt(groupIndex);
    message.addInt(selectionMode);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setSequenceSelection(callback, sequenceId)
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
setSequenceSelection: function(callback, sequenceId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(299);
    message.addInt(sequenceId);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** createPlaylistWithName(callback, doSetDmxId, dmxFolderId, dmxFileId, newResourceName)
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
createPlaylistWithName: function(callback, doSetDmxId, dmxFolderId, dmxFileId, newResourceName)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(300);
    message.addBool(doSetDmxId);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addStringNarrow(newResourceName);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** createPlaylistInPathWithName(callback, projectPath, doSetDmxId, dmxFolderId, dmxFileId, newResourceName)
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
createPlaylistInPathWithName: function(callback, projectPath, doSetDmxId, dmxFolderId, dmxFileId, newResourceName)
{
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
},
/*
** createPlaylistInItemIdWithName(callback, treeItemIndex, setdmxFileIds, newDmxFolderId, newdmxFileId, newResourceName)
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
createPlaylistInItemIdWithName: function(callback, treeItemIndex, setdmxFileIds, newDmxFolderId, newdmxFileId, newResourceName)
{
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
},
/*
** createPlaylistInPathFromFolderWithName(callback, projectPath, sourceProjectPath, setdmxFileIds, newDmxFolderId, newdmxFileId, newResourceName)
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
createPlaylistInPathFromFolderWithName: function(callback, projectPath, sourceProjectPath, setdmxFileIds, newDmxFolderId, newdmxFileId, newResourceName)
{
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
},
/*
** createPlaylistInTreeItemFromFolderWithName(callback, treeItemIndex, sourceFolderItemId, setdmxFileIds, newDmxFolderId, newdmxFileId, newResourceName)
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
createPlaylistInTreeItemFromFolderWithName: function(callback, treeItemIndex, sourceFolderItemId, setdmxFileIds, newDmxFolderId, newdmxFileId, newResourceName)
{
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
},
/*
** setWatchedFolderProperty(callback, projectPath, watchFolderProperty, enable)
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
setWatchedFolderProperty: function(callback, projectPath, watchFolderProperty, enable)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(305);
    message.addStringNarrow(projectPath);
    message.addInt(watchFolderProperty);
    message.addBool(enable);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setWatchedFolderPropertyByItemId(callback, treeItemIndex, watchFolderProperty, enable)
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
setWatchedFolderPropertyByItemId: function(callback, treeItemIndex, watchFolderProperty, enable)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(306);
    message.addInt(treeItemIndex);
    message.addInt(watchFolderProperty);
    message.addBool(enable);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setFolderSpreadToSite(callback, projectPath, siteId, enable)
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
setFolderSpreadToSite: function(callback, projectPath, siteId, enable)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(307);
    message.addStringNarrow(projectPath);
    message.addInt(siteId);
    message.addBool(enable);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** setFolderSpreadToSiteByItemId(callback, treeItemIndex, siteId, enable)
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
setFolderSpreadToSiteByItemId: function(callback, treeItemIndex, siteId, enable)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(308);
    message.addInt(treeItemIndex);
    message.addInt(siteId);
    message.addBool(enable);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** clearStreamingText(callback, dmxFolderId, dmxFileId, pendingOnly)
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
clearStreamingText: function(callback, dmxFolderId, dmxFileId, pendingOnly)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(309);
    message.addInt(dmxFolderId);
    message.addInt(dmxFileId);
    message.addBool(pendingOnly);
    var cb = new Array();
    cb[0] = callback;
    sendToPb(cb,message);
},
/*
** getWatchedFolderProperty(callback, projectPath, watchFolderProperty)
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
getWatchedFolderProperty: function(callback, projectPath, watchFolderProperty)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(310);
    message.addStringNarrow(projectPath);
    message.addInt(watchFolderProperty);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "isEnabled";cb[1]["type"] = "Bool";
    sendToPb(cb,message);
},
/*
** getWatchedFolderPropertyByItemId(callback, treeItemIndex, watchFolderProperty)
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
getWatchedFolderPropertyByItemId: function(callback, treeItemIndex, watchFolderProperty)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(311);
    message.addInt(treeItemIndex);
    message.addInt(watchFolderProperty);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "isEnabled";cb[1]["type"] = "Bool";
    sendToPb(cb,message);
},
/*
** getFolderSpreadToSite(callback, projectPath, siteId)
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
getFolderSpreadToSite: function(callback, projectPath, siteId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(312);
    message.addStringNarrow(projectPath);
    message.addInt(siteId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "isEnabled";cb[1]["type"] = "Bool";
    sendToPb(cb,message);
},
/*
** getFolderSpreadToSiteByItemId(callback, treeItemIndex, siteId)
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
getFolderSpreadToSiteByItemId: function(callback, treeItemIndex, siteId)
{
    var message = new PBUtilBytesNetwork();
    message.addShort(313);
    message.addInt(treeItemIndex);
    message.addInt(siteId);
    var cb = new Array();
    cb[0] = callback;
    cb[1] = new Object();cb[1]["name"] = "isEnabled";cb[1]["type"] = "Bool";
    sendToPb(cb,message);
},

    void: function(){}
}

function sendToPb(cb, cmdBytes)
{
var xmlHttpReq = null;
try {
// Mozilla, Opera, Safari sowie Internet Explorer (ab v7)
xmlHttpReq = new XMLHttpRequest();
} catch(e) {
try {
// MS Internet Explorer (ab v6)
xmlHttpReq  = new ActiveXObject("Microsoft.XMLHTTP");
} catch(e) {
try {
// MS Internet Explorer (ab v5)
xmlHttpReq  = new ActiveXObject("Msxml2.XMLHTTP");
} catch(e) {
xmlHttpReq  = null;
console.log("Error","PB Automation was unable to create a XmlHttpRequest object");
}
}
}
xmlHttpReq.open((usesProxy?"POST":"PBAUTO"), (usesProxy?"PandorasAutomation.php":""), true);
if(cb[0] !== false) {
xmlHttpReq.onreadystatechange = function(oEvent){
if(xmlHttpReq.readyState === 4)
{
// Prepare callback object
var data = new Object();
data["http"] = xmlHttpReq.status;
data["success"] = xmlHttpReq.status === 200;

if(data["success"])
{
var util = new PbUtilBytesHost(Base64.decode(xmlHttpReq.responseText));

// Parse response
data["code"] = util.getNextAsShort();
data["success"] = data["success"] && data["code"] > 0;

if(data["success"] === true)
{
for(var i = 1; i < cb.length; i++)
{
var fn = util["getNextAs" + cb[i]["type"]];
data[cb[i]["name"]] = fn.apply(util);
}
}
}
else
{
data["success"] = false;
data["code"] = -99;
console.log("Error", xmlHttpReq.statusText);
}

// Call function for object?
if(cb[0] instanceof Array)
{
(cb[0][0][cb[0][1]]).apply(cb[0][0],[data]);
}
else
{
// Call function directly?
if(typeof(cb[0]) == "function")
{
cb[0](data);
}
}
}
};
}
xmlHttpReq.send(Base64.encode(cmdBytes.getRawBytes()));
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
}

var PBU_BYTES_MIN_SHORT = -Math.pow(2, 15);
var PBU_BYTES_MAX_SHORT = (PBU_BYTES_MIN_SHORT * -1) -1;
var PBU_BYTES_MIN_INT = -Math.pow(2, 31);
var PBU_BYTES_MAX_INT = (PBU_BYTES_MIN_INT * -1) -1;
var PBU_BYTES_MAX_DOUBLE_EXP = (1<<11)-1;
var PBU_BYTES_DOUBLE_EXP_BIAS = (PBU_BYTES_MAX_DOUBLE_EXP) >> 1;

// Binary data helper
function PBUtilBytesNetwork()
{
	this.bytes = new Array();
}

PBUtilBytesNetwork.prototype.addBool = function (val)
{
	if(val)
	{
		this.bytes.push(1);
	}
	else
	{
		this.bytes.push(0);
	}
}

PBUtilBytesNetwork.prototype.addByte = function (val)
{
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

PBUtilBytesNetwork.prototype.addShort = function (val)
{
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

PBUtilBytesNetwork.prototype.addInt = function (val)
{
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

PBUtilBytesNetwork.prototype.addDouble = function (val)
{
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

PBUtilBytesNetwork.prototype.addStringNarrow = function (val)
{
	var strLength = val.length;
	this.addShort(strLength);
	var oldLength = this.bytes.length;
	for(var i = 0; i < strLength; i++)
	{
		this.bytes[oldLength+i] = val.charCodeAt(i);
	}
}

PBUtilBytesNetwork.prototype.addStringWide = function (val)
{
	var strLength = val.length;
	this.addShort(strLength);
	for(var i = 0; i < strLength; i++)
	{
		this.addShort(val.charCodeAt(i));
	}
}

PBUtilBytesNetwork.prototype.addByteBuffer = function (val)
{
	var bufferLength = val.length;
	this.addInt(bufferLength);
	for(var i = 0; i < bufferLength; i++)
	{
		this.bytes.push(val[i]);
	}
}

PBUtilBytesNetwork.prototype.getRawBytes = function ()
{
	return this.bytes;
}

PBUtilBytesNetwork.prototype.printOutBytes = function ()
{
	var i = 0;
	while(i < this.bytes.length)
	{
		console.log(this.bytes[i++]);
	}
	return this.bytes;
}

function PbUtilBytesHost(rawNetworkBytes)
{
	this.deliveredByteCt = 0;
	this.bytes = rawNetworkBytes.slice(0, rawNetworkBytes.length);
}

PbUtilBytesHost.prototype.getNextAsBoolean = function ()
{
	var val = this.bytes[this.deliveredByteCt];
	this.deliveredByteCt++;
	if(val === 1)
	{
		return true;
	}
	return false;
}

PbUtilBytesHost.prototype.getNextAsByte = function ()
{
	var val = this.bytes[this.deliveredByteCt];
	this.deliveredByteCt++;
	return val;
}

PbUtilBytesHost.prototype.getNextAsShort = function ()
{
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

PbUtilBytesHost.prototype.getNextAsInt = function ()
{
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

PbUtilBytesHost.prototype.getNextAsDouble = function ()
{
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

PbUtilBytesHost.prototype.getNextAsStringNarrow = function ()
{
	var strLength = this.getNextAsShort();
	var val = new Array();
	for(var i = 0; i < strLength; i++)
	{
		val[i] = String.fromCharCode(this.bytes[this.deliveredByteCt]);
		this.deliveredByteCt++;
	}
	return val.join('');
}

PbUtilBytesHost.prototype.getNextAsStringWide = function ()
{
	var strLength = this.getNextAsShort();
	var val = new Array();
	for(var i = 0; i < strLength; i++)
	{
		val[i] = String.fromCharCode(this.getNextAsShort());
	}
	return val.join('');
}

PbUtilBytesHost.prototype.getNextAsByteBuffer = function ()
{
	var bufferLength = this.getNextAsInt();
	var val = new Array();
	for(var i = 0; i < bufferLength; i++)
	{
		val[i] = this.bytes[this.deliveredByteCt];
		this.deliveredByteCt++;
	}
	return val;
}

function testPbUtilBytes()
{
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