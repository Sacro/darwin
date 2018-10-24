var cxml = require('cxml');
var ct = require('../CommonTypes/v1');

cxml.register(
  'http://www.thalesgroup.com/rtti/PushPort/TrainOrder/v1',
  exports,
  [
    [
      ct,
      [
        'CrsType',
        'PlatformType_2',
        'RIDType_2',
        'RTTITimeType_2',
        'TiplocType',
        'TrainIdType',
        'WTimeType',
      ],
      ['pta', 'ptd', 'wta', 'wtd', 'wtp'],
    ],
  ],
  ['TrainOrder', 'TrainOrderData', 'TrainOrderItem'],
  [
    [0, 0, [], []],
    [0, 0, [[10, 0], [14, 0]], [[6, 0], [7, 0], [8, 0]]],
    [0, 0, [[11, 0], [13, 1], [15, 1]], []],
    [0, 0, [[12, 0], [9, 0]], []],
    [1, 3, [], [[1, 1], [2, 1], [3, 1], [4, 1], [5, 1]]],
  ],
  [
    ['crs', [1], 0],
    ['platform', [2], 0],
    ['tiploc', [5], 0],
    ['trainID', [6], 0],
    ['clear', [], 0],
    ['first', [10], 0],
    ['rid', [11], 0],
    ['second', [10], 0],
    ['set', [9], 0],
    ['third', [10], 0],
  ],
);
