var cxml = require("cxml");
var Primitive = require('../../../xml-primitives');

cxml.register('http://thalesgroup.com/RTTI/PushPortStatus/root_1', exports, [
	[Primitive, ['any', 'string'], []]
], [
	'ErrorCodeType',
	'ErrorMsgType',
	'StatusType'
], [
	[0, 0, [[2, 0], [3, 0], [4, 0]], []],
	[3, 2, [], []],
	[3, 2, [], []],
	[1, 4, [], [[1, 0], [5, 0]]],
	[0, 0, [], [[6, 0], [7, 0], [8, 0]]],
	[3, 2, [], []],
	[3, 2, [], []],
	[3, 2, [], []],
	[1, 5, [], []]
], [
	['*', [1], 4],
	['PPConnect', [], 0],
	['PPReqVersion', [6], 0],
	['PPStatus', [10], 0],
	['code', [3], 0],
	['ttrefversion', [7], 0],
	['ttversion', [8], 0],
	['version', [9], 0]
]);