import * as Primitive from '../../../../xml-primitives';
import * as ct from '../CommonTypes/v1';

// Source files:
// http://localhost:8080/rttiPPTStationMessages_v1.xsd

interface BaseType {
  _exists: boolean;
  _namespace: string;
}
interface _AType extends Primitive._string {
  href: string;
}
interface AType extends _AType {
  constructor: { new (): AType };
}

/** The category of operator message */
export type MsgCategoryType =
  | 'Train'
  | 'Station'
  | 'Connections'
  | 'System'
  | 'Misc'
  | 'PriorTrains'
  | 'PriorOther';
interface _MsgCategoryType extends Primitive._string {
  content: MsgCategoryType;
}

/** The severity of operator message */
export type MsgSeverityType = '0' | '1' | '2' | '3';
interface _MsgSeverityType extends Primitive._string {
  content: MsgSeverityType;
}

interface _PType extends BaseType {
  /** Defines an HTML anchor */
  a?: AType[];
}
interface PType extends _PType {
  constructor: { new (): PType };
}

/** Darwin Workstation Station Message */
interface _StationMessage extends BaseType {
  /** The category of message */
  cat: MsgCategoryType;
  id: number;
  /** The severity of the message */
  sev: MsgSeverityType;
  /** Whether the train running information is suppressed to the public */
  suppress?: boolean;
  /** The content of the message */
  Msg: StationMessageMsgType;
  /** The Stations the message is being applied to */
  Station?: StationMessageStationType[];
}
export interface StationMessage extends _StationMessage {
  constructor: { new (): StationMessage };
}
export var StationMessage: { new (): StationMessage };

interface _StationMessageMsgType extends BaseType {
  /** Defines an HTML anchor */
  a?: AType[];
  /** Defines an HTML paragraph */
  p?: PType[];
}
interface StationMessageMsgType extends _StationMessageMsgType {
  constructor: { new (): StationMessageMsgType };
}

interface _StationMessageStationType extends BaseType {
  crs: string;
}
interface StationMessageStationType extends _StationMessageStationType {
  constructor: { new (): StationMessageStationType };
}

export interface document extends BaseType {
  /** Defines an HTML anchor */
  a: AType;
  /** Defines an HTML paragraph */
  p: PType;
}
export var document: document;
