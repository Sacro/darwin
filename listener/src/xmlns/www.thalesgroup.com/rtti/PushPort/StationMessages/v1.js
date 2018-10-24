var cxml = require("cxml");
var Primitive = require('../../../../xml-primitives');
var ct = require('../CommonTypes/v1');

cxml.register('http://www.thalesgroup.com/rtti/PushPort/StationMessages/v1', exports, [
	[Primitive, ['boolean', 'number', 'string'], []],
	[ct, ['CrsType'], []]
], [
	'MsgCategoryType',
	'MsgSeverityType',
	'StationMessage'
], [
	[0, 0, [[1, 0], [5, 0]], []],
	[3, 3, [], []],
	[3, 3, [], []],
	[0, 0, [[8, 0], [10, 3]], [[7, 0], [4, 0], [9, 0], [6, 1]]],
	[1, 3, [], [[3, 0]]],
	[0, 0, [[1, 3]], []],
	[0, 0, [[1, 3], [5, 3]], []],
	[0, 0, [], [[2, 0]]]
], [
	['a', [8], 0],
	['crs', [4], 0],
	['href', [3], 0],
	['id', [2], 0],
	['p', [9], 0],
	['suppress', [1], 0],
	['cat', [5], 0],
	['Msg', [10], 0],
	['sev', [6], 0],
	['Station', [11], 0]
]);