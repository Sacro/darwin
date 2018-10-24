var cxml = require("cxml");
var Primitive = require('../../../../xml-primitives');
var ct = require('../CommonTypes/v1');

cxml.register('http://www.thalesgroup.com/rtti/PushPort/Alarms/v1', exports, [
	[Primitive, ['string'], []],
	[ct, ['TDAreaIDType_2'], []]
], [
	'AlarmID',
	'RTTIAlarm',
	'RTTIAlarmData'
], [
	[0, 0, [], []],
	[3, 1, [], []],
	[0, 0, [[2, 0], [4, 0]], []],
	[0, 0, [[1, 0], [5, 0], [6, 0]], [[3, 0]]]
], [
	['tdAreaFail', [2], 0],
	['clear', [3], 0],
	['id', [3], 0],
	['set', [5], 0],
	['tdFeedFail', [], 0],
	['tyrellFeedFail', [], 0]
]);