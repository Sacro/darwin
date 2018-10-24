var cxml = require("cxml");
var ct = require('../CommonTypes/v1');

cxml.register('http://www.thalesgroup.com/rtti/PushPort/TDData/v1', exports, [
	[ct, ['TDAreaIDType_2', 'TDBerthIDType_2', 'TrainIdType'], []]
], [
	'FullTDBerthID',
	'TrackingID'
], [
	[0, 0, [], []],
	[1, 2, [], [[1, 0]]],
	[0, 0, [[4, 0], [2, 0], [3, 0]], []]
], [
	['area', [1], 0],
	['correctTrainID', [3], 0],
	['incorrectTrainID', [3], 0],
	['berth', [4], 0]
]);