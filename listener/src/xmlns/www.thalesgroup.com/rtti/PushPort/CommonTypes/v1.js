var cxml = require("cxml");
var Primitive = require('../../../../xml-primitives');

cxml.register('http://www.thalesgroup.com/rtti/PushPort/CommonTypes/v1', exports, [
	[Primitive, ['Date', 'boolean', 'number', 'string'], []]
], [
	'ActivityType',
	'ActivityType_2:ActivityType',
	'CIFTrainCategoryType',
	'CIFTrainCategoryType_2:CIFTrainCategoryType',
	'CIFTrainStatusType',
	'CIFTrainStatusType_2:CIFTrainStatusType',
	'CrsType',
	'CrsType_2:CrsType',
	'DCISRequestID',
	'DCISRequestID_2:DCISRequestID',
	'DelayValueType',
	'DelayValueType_2:DelayValueType',
	'DisruptionReasonType',
	'DisruptionReasonType_2:DisruptionReasonType',
	'PlatformType',
	'PlatformType_2:PlatformType',
	'ReasonCodeType',
	'ReasonCodeType_2:ReasonCodeType',
	'RIDType',
	'RIDType_2:RIDType',
	'RTTIDateTimeType',
	'RTTIDateTimeType_2:RTTIDateTimeType',
	'RTTIDateType',
	'RTTIDateType_2:RTTIDateType',
	'RTTITimeType',
	'RTTITimeType_2:RTTITimeType',
	'SnapshotIDType',
	'SnapshotIDType_2:SnapshotIDType',
	'SourceTypeInst',
	'SourceTypeInst_2:SourceTypeInst',
	'SuffixType',
	'SuffixType_2:SuffixType',
	'TDAreaIDType',
	'TDAreaIDType_2:TDAreaIDType',
	'TDBerthIDType',
	'TDBerthIDType_2:TDBerthIDType',
	'TimetableFilenameType',
	'TimetableFilenameType_2:TimetableFilenameType',
	'TimetableIDType',
	'TimetableIDType_2:TimetableIDType',
	'TiplocType',
	'TiplocType_2:TiplocType',
	'TOCType',
	'TOCType_2:TOCType',
	'TrainIdType',
	'TrainIdType_2:TrainIdType',
	'TrainLengthType',
	'TrainLengthType_2:TrainLengthType',
	'UIDType',
	'UIDType_2:UIDType',
	'WTimeType',
	'WTimeType_2:WTimeType'
], [
	[0, 0, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 3, [], []],
	[3, 3, [], []],
	[1, 21, [], [[1, 1], [8, 1]]],
	[1, 21, [], [[2, 1], [9, 1]]],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 3, [], []],
	[3, 3, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 3, [], []],
	[3, 3, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []]
], [
	['near', [2], 0],
	['near', [2], 0],
	['pta', [30], 0],
	['ptd', [30], 0],
	['wta', [55], 0],
	['wtd', [55], 0],
	['wtp', [55], 0],
	['tiploc', [45], 0],
	['tiploc', [45], 0]
]);