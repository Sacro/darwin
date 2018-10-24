var cxml = require("cxml");
var Primitive = require('../../../../xml-primitives');
var ct = require('../CommonTypes/v1');

cxml.register('http://www.thalesgroup.com/rtti/PushPort/Forecasts/v2', exports, [
	[Primitive, ['boolean', 'string'], []],
	[ct, ['DisruptionReasonType_2', 'PlatformType_2', 'RIDType_2', 'RTTIDateType_2', 'RTTITimeType_2', 'SourceTypeInst', 'TiplocType', 'TrainLengthType_2', 'UIDType_2', 'WTimeType'], ['pta', 'ptd', 'wta', 'wtd', 'wtp']]
], [
	'PlatformData',
	'TS',
	'TSLocation',
	'TSTimeData'
], [
	[0, 0, [], []],
	[1, 4, [], [[8, 1], [9, 1], [32, 1], [18, 1]]],
	[0, 0, [[16, 1], [29, 3]], [[15, 1], [19, 0], [22, 0], [25, 0]]],
	[0, 0, [[27, 1], [28, 1], [11, 1], [17, 1], [30, 1], [31, 1], [23, 1]], [[1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [24, 0]]],
	[0, 0, [], [[6, 1], [7, 1], [10, 1], [12, 1], [13, 1], [14, 1], [20, 1], [21, 1], [26, 1]]],
	[3, 2, [], []]
], [
	['at', [7], 0],
	['atRemoved', [1], 0],
	['cisPlatsup', [1], 0],
	['conf', [1], 0],
	['delayed', [1], 0],
	['detachFront', [1], 0],
	['et', [7], 0],
	['etmin', [7], 0],
	['etUnknown', [1], 0],
	['isReverseFormation', [1], 0],
	['LateReason', [3], 0],
	['length', [10], 0],
	['platsup', [1], 0],
	['rid', [5], 0],
	['src', [2], 0],
	['srcInst', [8], 0],
	['ssd', [6], 0],
	['suppr', [1], 0],
	['tpl', [9], 0],
	['uid', [11], 0],
	['wet', [7], 0],
	['arr', [16], 0],
	['dep', [16], 0],
	['Location', [15], 0],
	['pass', [16], 0],
	['plat', [13], 0],
	['platsrc', [17], 0]
]);