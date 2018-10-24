import * as ct from '../CommonTypes/v1';

// Source files:
// http://localhost:8080/rttiPPTTDData_v1.xsd

interface BaseType {
  _exists: boolean;
  _namespace: string;
}
interface _FullTDBerthID extends ct._TDBerthIDType_2 {
  area: string;
}
export interface FullTDBerthID extends _FullTDBerthID {
  constructor: { new (): FullTDBerthID };
}
export var FullTDBerthID: { new (): FullTDBerthID };

/** Indicate a corrected Tracking ID (headcode) for a service in a TD berth. */
interface _TrackingID extends BaseType {
  /** The TD berth where the incorrectly reported train has been identified to be. Note that this berth is that which was reported to Darwin and there is no guarantee that the train is still in this berth at any subsequent point in time. */
  berth: FullTDBerthID;
  /** The correct Train ID (headcode) that should be reported by TD.NET. */
  correctTrainID: string;
  /** The incorrect Train ID (headcode) that is being reported by TD.NET. */
  incorrectTrainID: string;
}
export interface TrackingID extends _TrackingID {
  constructor: { new (): TrackingID };
}
export var TrackingID: { new (): TrackingID };

export interface document extends BaseType {}
export var document: document;
