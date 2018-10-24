import * as Primitive from '../../../xml-primitives';

// Source files:
// http://localhost:8080/rttiPPTStatus_v1.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
/** Error Code Type */
export type ErrorCodeType = string;
type _ErrorCodeType = Primitive._string;

/** Error Message Type */
export type ErrorMsgType = string;
type _ErrorMsgType = Primitive._string;

interface _PPReqVersionType extends BaseType {
	/** The namespace of the Push Port Timetable Reference data schema supported by the client. */
	ttrefversion: string;
	/** The namespace of the Push Port Timetable schema supported by the client. */
	ttversion: string;
	/** The namespace of the Push Port data schema supported by the client. */
	version: string;
}
interface PPReqVersionType extends _PPReqVersionType { constructor: { new(): PPReqVersionType }; }

type PPReqVersionTypeTtrefversionType = string;
type _PPReqVersionTypeTtrefversionType = Primitive._string;

type PPReqVersionTypeTtversionType = string;
type _PPReqVersionTypeTtversionType = Primitive._string;

type PPReqVersionTypeVersionType = string;
type _PPReqVersionTypeVersionType = Primitive._string;

interface _PPStatusType extends _StatusType {}
interface PPStatusType extends _PPStatusType { constructor: { new(): PPStatusType }; }

/** Status Code Type */
interface _StatusType extends _ErrorMsgType {
	code: string;
}
export interface StatusType extends _StatusType { constructor: { new(): StatusType }; }
export var StatusType: { new(): StatusType };

export interface document extends BaseType {
	/** Request the schema versions required by the client */
	PPReqVersion: PPReqVersionType;
	/** Setup phase status/heartbeat response */
	PPStatus: PPStatusType;
}
export var document: document;
