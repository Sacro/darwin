import * as Primitive from '../../../../xml-primitives';
import * as ct from '../CommonTypes/v1';

// Source files:
// http://localhost:8080/rttiPPTForecasts_v2.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
/** Platform number with associated flags */
interface _PlatformData extends ct._PlatformType_2 {
	/** Whether a CIS, or Darwin Workstation, has set platform suppression at this location. */
	cisPlatsup?: boolean;
	/** True if the platform number is confirmed. */
	conf?: boolean;
	/** The source of the platfom number. P = Planned, A = Automatic, M = Manual. */
	platsrc?: PlatformDataPlatsrcType;
	/** Platform number is suppressed and should not be displayed. */
	platsup?: boolean;
}
export interface PlatformData extends _PlatformData { constructor: { new(): PlatformData }; }
export var PlatformData: { new(): PlatformData };

type PlatformDataPlatsrcType = ("P" | "A" | "M");
interface _PlatformDataPlatsrcType extends Primitive._string { content: PlatformDataPlatsrcType; }

/** Train Status. Update to the "real time" forecast data for a service. */
interface _TS extends BaseType {
	/** Indicates whether a train that divides is working with portions in reverse to their normal formation. The value applies to the whole train. Darwin will not validate that a divide association actually exists for this service. */
	isReverseFormation?: boolean;
	/** RTTI unique Train Identifier */
	rid: string;
	/** Scheduled Start Date */
	ssd: Date;
	/** Train UID */
	uid: string;
	/** Late running reason for this service. The reason applies to all locations of this service. */
	LateReason?: ct.DisruptionReasonType_2;
	/** Update of forecast data for an individual location in the service's schedule */
	Location?: TSLocation[];
}
export interface TS extends _TS { constructor: { new(): TS }; }
export var TS: { new(): TS };

/** Forecast data for an individual location in the service's schedule */
interface _TSLocation extends BaseType {
	/** Public time of arrival. */
	pta?: string;
	/** Public time of departure. */
	ptd?: string;
	/** Working time of arrival. */
	wta?: string;
	/** Working time of departure. */
	wtd?: string;
	/** Working time of pass. */
	wtp?: string;
	/** TIPLOC */
	tpl: string;
	/** Forecast data for the arrival at this location */
	arr?: TSTimeData;
	/** Forecast data for the departure at this location */
	dep?: TSTimeData;
	/** Indicates from which end of the train stock will be detached. The value is set to “true” if stock will be detached from the front of the train at this location. It will be set at each location where stock will be detached from the front. Darwin will not validate that a stock detachment activity code applies at this location. */
	detachFront?: boolean;
	/** The length of the service at this location on departure (or arrival at destination). The default value of zero indicates that the length is unknown. */
	length?: number;
	/** Forecast data for the pass of this location */
	pass?: TSTimeData;
	/** Current platform number */
	plat?: PlatformData;
	/** The service is suppressed at this location. */
	suppr?: boolean;
}
export interface TSLocation extends _TSLocation { constructor: { new(): TSLocation }; }
export var TSLocation: { new(): TSLocation };

/** Type describing time-based forecast attributes for a TS arrival/departure/pass */
interface _TSTimeData extends BaseType {
	/** Actual Time */
	at?: string;
	/** If true, indicates that an actual time ("at") value has just been removed and replaced by an estimated time ("et"). Note that this attribute will only be set to "true" once, when the actual time is removed, and will not be set in any snapshot. */
	atRemoved?: boolean;
	/** Indicates that this estimated time is a forecast of "unknown delay". Displayed  as "Delayed" in LDB. Note that this value indicates that this forecast is "unknown delay", whereas it is the "etUnknown" attribute that indicates where the manual unknown delay forecast has been set. */
	delayed?: boolean;
	/** Estimated Time. For locations with a public activity, this will be based on the "public schedule". For all other activities, it will be based on the "working schedule". */
	et?: string;
	/** The manually applied lower limit that has been applied to the estimated time at this location. The estimated time will not be set lower than this value, but may be set higher. */
	etmin?: string;
	/** Indicates that an unknown delay forecast has been set for the estimated time at this location. Note that this value indicates where a manual unknown delay forecast has been set, whereas it is the "delayed" attribute that indicates that the actual forecast is "unknown delay". */
	etUnknown?: boolean;
	/** The source of the forecast or actual time. */
	src?: string;
	/** The RTTI CIS code of the CIS instance if the src is a CIS. */
	srcInst?: string;
	/** The estimated time based on the "working schedule". This will only be set for public activities and when it also differs from the estimated time based on the "public schedule". */
	wet?: string;
}
export interface TSTimeData extends _TSTimeData { constructor: { new(): TSTimeData }; }
export var TSTimeData: { new(): TSTimeData };

export interface document extends BaseType {
}
export var document: document;
