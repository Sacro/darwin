import * as Primitive from '../../../../xml-primitives';
import * as ct from '../CommonTypes/v1';

// Source files:
// http://localhost:8080/rttiPPTAlarms_v1.xsd

interface BaseType {
  _exists: boolean;
  _namespace: string;
}
/** Type representing a unique Darwin alarm identifier. */
export type AlarmID = string;
type _AlarmID = Primitive._string;

/** An update to a Darwin alarm. */
interface _RTTIAlarm extends BaseType {
  /** Clear an existing alarm. The contents identify the unique alarm identifier that has been cleared. */
  clear: string;
  /** Set a new alarm. */
  set: RTTIAlarmData;
}
export interface RTTIAlarm extends _RTTIAlarm {
  constructor: { new (): RTTIAlarm };
}
export var RTTIAlarm: { new (): RTTIAlarm };

/** Type describing each type of alarm that can be set. */
interface _RTTIAlarmData extends BaseType {
  /** Unique identifier for this alarm */
  id: string;
  /** Alarm for a single TD area failure. Contents identify the failed area code. */
  tdAreaFail: string;
}
export interface RTTIAlarmData extends _RTTIAlarmData {
  constructor: { new (): RTTIAlarmData };
}
export var RTTIAlarmData: { new (): RTTIAlarmData };

export interface document extends BaseType {}
export var document: document;
