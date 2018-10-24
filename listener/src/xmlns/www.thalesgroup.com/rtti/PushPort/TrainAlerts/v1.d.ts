import * as Primitive from '../../../../xml-primitives';
import * as ct from '../CommonTypes/v1';

// Source files:
// http://localhost:8080/rttiPPTTrainAlerts_v1.xsd

interface BaseType {
  _exists: boolean;
  _namespace: string;
}
/** Alert Audience Data Type */
export type AlertAudienceType = 'Customer' | 'Staff' | 'Operations';
interface _AlertAudienceType extends Primitive._string {
  content: AlertAudienceType;
}

/** TODO */
interface _AlertService extends BaseType {
  /** TODO */
  RID: string;
  /** TODO */
  SSD: Date;
  /** TODO */
  UID: string;
  /** TODO */
  Location: string[];
}
export interface AlertService extends _AlertService {
  constructor: { new (): AlertService };
}
export var AlertService: { new (): AlertService };

/** A list of services to which the alert applies */
interface _AlertServices extends BaseType {
  /** TODO */
  AlertService?: AlertService[];
}
export interface AlertServices extends _AlertServices {
  constructor: { new (): AlertServices };
}
export var AlertServices: { new (): AlertServices };

/** Alert Type Data Type */
export type AlertType = 'Normal' | 'Forced';
interface _AlertType extends Primitive._string {
  content: AlertType;
}

/** Train Alert */
interface _TrainAlert extends BaseType {
  /** TODO */
  AlertID: string;
  /** TODO */
  AlertServices: AlertServices;
  /** TODO */
  AlertText: string;
  /** TODO */
  AlertType: AlertType;
  /** TODO */
  Audience: AlertAudienceType;
  /** TODO */
  CopiedFromAlertID?: string;
  /** TODO */
  CopiedFromSource?: string;
  /** TODO */
  SendAlertByEmail: boolean;
  /** TODO */
  SendAlertBySMS: boolean;
  /** TODO */
  SendAlertByTwitter: boolean;
  /** TODO */
  Source: string;
}
export interface TrainAlert extends _TrainAlert {
  constructor: { new (): TrainAlert };
}
export var TrainAlert: { new (): TrainAlert };

export interface document extends BaseType {}
export var document: document;
