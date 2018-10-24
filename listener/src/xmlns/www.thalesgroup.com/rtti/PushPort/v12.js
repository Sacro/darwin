var cxml = require('cxml');
var Primitive = require('../../../xml-primitives');
var alm = require('./Alarms/v1');
var ct = require('./CommonTypes/v1');
var fore = require('./Forecasts/v2');
var sch = require('./Schedules/v1');
var sm = require('./StationMessages/v1');
var status = require('../../../thalesgroup.com/RTTI/PushPortStatus/root_1');
var ta = require('./TrainAlerts/v1');
var td = require('./TDData/v1');
var tor = require('./TrainOrder/v1');

cxml.register(
  'http://www.thalesgroup.com/rtti/PushPort/v12',
  exports,
  [
    [Primitive, ['boolean', 'string'], []],
    [status, ['StatusType'], []],
    [
      ct,
      [
        'DCISRequestID',
        'RTTIDateTimeType',
        'SnapshotIDType_2',
        'SourceTypeInst',
        'TimetableFilenameType',
        'TimetableIDType',
      ],
      [],
    ],
    [sch, ['Association', 'DeactivatedSchedule', 'Schedule'], []],
    [fore, ['TS'], []],
    [tor, ['TrainOrder'], []],
    [sm, ['StationMessage'], []],
    [ta, ['TrainAlert'], []],
    [td, ['TrackingID'], []],
    [alm, ['RTTIAlarm'], []],
  ],
  ['DataResponse'],
  [
    [0, 0, [[5, 0]], []],
    [
      0,
      0,
      [
        [1, 3],
        [2, 3],
        [3, 3],
        [4, 3],
        [10, 3],
        [12, 3],
        [13, 3],
        [14, 3],
        [16, 3],
      ],
      [],
    ],
    [
      0,
      0,
      [
        [23, 0],
        [24, 0],
        [25, 0],
        [26, 0],
        [11, 0],
        [27, 0],
        [28, 0],
        [29, 0],
        [30, 0],
        [31, 0],
      ],
      [[15, 0], [20, 0]],
    ],
    [1, 3, [], [[6, 1], [8, 1]]],
    [0, 0, [], [[22, 1]]],
    [0, 0, [], [[21, 1]]],
    [1, 9, [], [[17, 0], [18, 0]]],
    [0, 19, [], [[7, 1], [9, 1], [19, 1]]],
  ],
  [
    ['alarm', [18], 0],
    ['association', [10], 0],
    ['deactivated', [11], 0],
    ['OW', [15], 0],
    ['Pport', [20], 0],
    ['requestID', [4], 0],
    ['requestID', [4], 0],
    ['requestSource', [7], 0],
    ['requestSource', [7], 0],
    ['schedule', [12], 0],
    ['SnapshotId', [6], 0],
    ['trackingID', [17], 0],
    ['trainAlert', [16], 0],
    ['trainOrder', [14], 0],
    ['ts', [5], 0],
    ['TS', [13], 0],
    ['ttfile', [8], 0],
    ['ttreffile', [8], 0],
    ['updateOrigin', [2], 0],
    ['version', [2], 0],
    ['viaftp', [1], 0],
    ['viaftp', [1], 0],
    ['FailureResp', [21], 0],
    ['GetFullSnapshotReq', [22], 0],
    ['GetSnapshotReq', [23], 0],
    ['QueryTimetable', [], 0],
    ['sR', [19], 0],
    ['StartUpdateReq', [], 0],
    ['StopUpdateReq', [], 0],
    ['TimeTableId', [24], 0],
    ['uR', [25], 0],
  ],
);
