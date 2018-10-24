import * as Primitive from '../../../xml-primitives';
import * as alm from './Alarms/v1';
import * as ct from './CommonTypes/v1';
import * as fore from './Forecasts/v2';
import * as sch from './Schedules/v1';
import * as sm from './StationMessages/v1';
import * as status from '../../../thalesgroup.com/RTTI/PushPortStatus/root_1';
import * as ta from './TrainAlerts/v1';
import * as td from './TDData/v1';
import * as tor from './TrainOrder/v1';

// Source files:
// http://localhost:8080/rttiPPTSchema_v12.xsd

interface BaseType {
  _exists: boolean;
  _namespace: string;
}
interface _DataResponse extends BaseType {
  /** A Darwin alarm */
  alarm?: alm.RTTIAlarm[];
  /** Association between schedules */
  association?: sch.Association[];
  /** Notification that a Train Schedule is now deactivated in Darwin. */
  deactivated?: sch.DeactivatedSchedule[];
  /** Darwin Workstation Station Message */
  OW?: sm.StationMessage[];
  /** Train Schedule */
  schedule?: sch.Schedule[];
  /** Indicate a corrected Tracking ID (headcode) for a service in a TD berth. */
  trackingID?: td.TrackingID[];
  /** Train Alert */
  trainAlert?: ta.TrainAlert[];
  /** The order that trains are expected to call/pass a particular station platform */
  trainOrder?: tor.TrainOrder[];
  /** Train Status */
  TS?: fore.TS[];
}
export interface DataResponse extends _DataResponse {
  constructor: { new (): DataResponse };
}
export var DataResponse: { new (): DataResponse };

interface _PportType extends BaseType {
  /** Local Timestamp */
  ts: Date;
  version: string;
  /** Failure Response */
  FailureResp: PportTypeFailureRespType;
  /** Request a full snapshot of current database */
  GetFullSnapshotReq: PportTypeGetFullSnapshotReqType;
  /** Request a standard snapshot of current database */
  GetSnapshotReq: PportTypeGetSnapshotReqType;
  /** Defines an ID for recovering snapshot data via FTP */
  SnapshotId: string;
  /** Snapshot Response */
  sR: DataResponse;
  /** Response for the current timetable ID */
  TimeTableId: PportTypeTimeTableIdType;
  /** Update Response */
  uR: PportTypeURType;
}
interface PportType extends _PportType {
  constructor: { new (): PportType };
}

interface _PportTypeFailureRespType extends status._StatusType {
  /** The DCISRequestID value provided by the originator of this update. Used in conjunction with the updateSource attribute to ensure uniqueness */
  requestID?: string;
  /** The DCIS source that generated this update */
  requestSource?: string;
}
interface PportTypeFailureRespType extends _PportTypeFailureRespType {
  constructor: { new (): PportTypeFailureRespType };
}

interface _PportTypeGetFullSnapshotReqType extends BaseType {
  /** If true, then resulting snapshot data is fetched by the client via FTP */
  viaftp?: boolean;
}
interface PportTypeGetFullSnapshotReqType
  extends _PportTypeGetFullSnapshotReqType {
  constructor: { new (): PportTypeGetFullSnapshotReqType };
}

interface _PportTypeGetSnapshotReqType extends BaseType {
  /** If true, then resulting snapshot data is fetched by the client via FTP */
  viaftp?: boolean;
}
interface PportTypeGetSnapshotReqType extends _PportTypeGetSnapshotReqType {
  constructor: { new (): PportTypeGetSnapshotReqType };
}

interface _PportTypeTimeTableIdType extends ct._TimetableIDType {
  ttfile: string;
  ttreffile: string;
}
interface PportTypeTimeTableIdType extends _PportTypeTimeTableIdType {
  constructor: { new (): PportTypeTimeTableIdType };
}

interface _PportTypeURType extends _DataResponse {
  /** The DCISRequestID value provided by the originator of this update. Used in conjunction with the requestSource attribute to ensure uniqueness */
  requestID?: string;
  /** The source instance that generated this update, usually a CIS instance. */
  requestSource?: string;
  /** A string describing the type of system that originated this update, e.g. "CIS" or "Darwin". */
  updateOrigin?: string;
}
interface PportTypeURType extends _PportTypeURType {
  constructor: { new (): PportTypeURType };
}

export interface document extends BaseType {
  /** Push Ports Schema */
  Pport: PportType;
}
export var document: document;
