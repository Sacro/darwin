var cxml = require("cxml");
var Primitive = require('../../../../xml-primitives');
var ct = require('../CommonTypes/v1');

cxml.register('http://www.thalesgroup.com/rtti/PushPort/TrainAlerts/v1', exports, [
	[Primitive, ['Date', 'boolean', 'string'], []],
	[ct, ['RIDType_2', 'UIDType_2'], []]
], [
	'AlertAudienceType',
	'AlertService',
	'AlertServices',
	'AlertType',
	'TrainAlert'
], [
	[0, 0, [], []],
	[3, 3, [], []],
	[0, 0, [[5, 2]], [[6, 0], [11, 0], [12, 0]]],
	[0, 0, [[13, 3]], []],
	[3, 3, [], []],
	[0, 0, [[1, 0], [14, 0], [2, 0], [15, 0], [16, 0], [3, 1], [4, 1], [7, 0], [8, 0], [9, 0], [10, 0]], []]
], [
	['AlertID', [3], 0],
	['AlertText', [3], 0],
	['CopiedFromAlertID', [3], 0],
	['CopiedFromSource', [3], 0],
	['Location', [3], 0],
	['RID', [4], 0],
	['SendAlertByEmail', [2], 0],
	['SendAlertBySMS', [2], 0],
	['SendAlertByTwitter', [2], 0],
	['Source', [3], 0],
	['SSD', [1], 0],
	['UID', [5], 0],
	['AlertService', [7], 0],
	['AlertServices', [8], 0],
	['AlertType', [9], 0],
	['Audience', [6], 0]
]);