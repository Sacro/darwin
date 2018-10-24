import * as Primitive from '../../../../xml-primitives';
import * as ct from '../CommonTypes/v1';

// Source files:
// http://localhost:8080/rttiPPTSchedules_v1.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
/** Type describing an association between schedules */
interface _Association extends BaseType {
	/** Association category */
	category: CategoryType;
	/** True if this association is cancelled, i.e. the association exists but will no longer happen. */
	isCancelled?: boolean;
	/** True if this association is deleted, i.e. the association no longer exists. */
	isDeleted?: boolean;
	/** The TIPLOC of the location where the association occurs. */
	tiploc: string;
	/** The starting, terminating, subsequent working or link-from service */
	assoc: AssocService;
	/** The through, previous working or link-to service */
	main: AssocService;
}
export interface Association extends _Association { constructor: { new(): Association }; }
export var Association: { new(): Association };

interface _AssocService extends BaseType {
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
	/** RTTI Train ID. Note that since this is an RID, the service must already exist within Darwin. */
	rid: string;
}
export interface AssocService extends _AssocService { constructor: { new(): AssocService }; }
export var AssocService: { new(): AssocService };

/** Association Category Type: JJ=Join, VV=Split, LK=Linked, NP=Next-Working */
export type CategoryType = ("JJ" | "VV" | "LK" | "NP");
interface _CategoryType extends Primitive._string { content: CategoryType; }

/** Notification that a Train Schedule is now deactivated in Darwin. */
interface _DeactivatedSchedule extends BaseType {
	/** RTTI unique Train ID */
	rid: string;
}
export interface DeactivatedSchedule extends _DeactivatedSchedule { constructor: { new(): DeactivatedSchedule }; }
export var DeactivatedSchedule: { new(): DeactivatedSchedule };

/** Defines a Passenger Destination Calling point */
interface _DT extends BaseType {
	/** Current Activity Codes */
	act?: string;
	/** Cancelled */
	can?: boolean;
	/** Planned Activity Codes (if different to current activities) */
	planAct?: string;
	/** Public Scheduled Time of Arrival */
	pta?: string;
	/** Public Scheduled Time of Departure */
	ptd?: string;
	/** A delay value that is implied by a change to the service's route. This value has been added to the forecast lateness of the service at the previous schedule location when calculating the expected lateness of arrival at this location. */
	rdelay?: number;
	/** TIPLOC */
	tpl: string;
	/** Working Scheduled Time of Arrival */
	wta: string;
	/** Working Scheduled Time of Departure */
	wtd?: string;
}
export interface DT extends _DT { constructor: { new(): DT }; }
export var DT: { new(): DT };

/** Defines aPassenger Intermediate Calling Point */
interface _IP extends BaseType {
	/** Current Activity Codes */
	act?: string;
	/** Cancelled */
	can?: boolean;
	/** TIPLOC of False Destination to be used at this location */
	fd?: string;
	/** Planned Activity Codes (if different to current activities) */
	planAct?: string;
	/** Public Scheduled Time of Arrival */
	pta?: string;
	/** Public Scheduled Time of Departure */
	ptd?: string;
	/** A delay value that is implied by a change to the service's route. This value has been added to the forecast lateness of the service at the previous schedule location when calculating the expected lateness of arrival at this location. */
	rdelay?: number;
	/** TIPLOC */
	tpl: string;
	/** Working Scheduled Time of Arrival */
	wta: string;
	/** Working Scheduled Time of Departure */
	wtd: string;
}
export interface IP extends _IP { constructor: { new(): IP }; }
export var IP: { new(): IP };

/** Defines an Operational Destination Calling point */
interface _OPDT extends BaseType {
	/** Current Activity Codes */
	act?: string;
	/** Cancelled */
	can?: boolean;
	/** Planned Activity Codes (if different to current activities) */
	planAct?: string;
	/** A delay value that is implied by a change to the service's route. This value has been added to the forecast lateness of the service at the previous schedule location when calculating the expected lateness of arrival at this location. */
	rdelay?: number;
	/** TIPLOC */
	tpl: string;
	/** Working Scheduled Time of Arrival */
	wta: string;
	/** Working Scheduled Time of Departure */
	wtd?: string;
}
export interface OPDT extends _OPDT { constructor: { new(): OPDT }; }
export var OPDT: { new(): OPDT };

/** Defines an Operational Intermediate Calling Point */
interface _OPIP extends BaseType {
	/** Current Activity Codes */
	act?: string;
	/** Cancelled */
	can?: boolean;
	/** Planned Activity Codes (if different to current activities) */
	planAct?: string;
	/** A delay value that is implied by a change to the service's route. This value has been added to the forecast lateness of the service at the previous schedule location when calculating the expected lateness of arrival at this location. */
	rdelay?: number;
	/** TIPLOC */
	tpl: string;
	/** Working Scheduled Time of Arrival */
	wta: string;
	/** Working Scheduled Time of Departure */
	wtd: string;
}
export interface OPIP extends _OPIP { constructor: { new(): OPIP }; }
export var OPIP: { new(): OPIP };

/** Defines an Operational Origin Calling Point */
interface _OPOR extends BaseType {
	/** Current Activity Codes */
	act?: string;
	/** Cancelled */
	can?: boolean;
	/** Planned Activity Codes (if different to current activities) */
	planAct?: string;
	/** TIPLOC */
	tpl: string;
	/** Working Scheduled Time of Arrival */
	wta?: string;
	/** Working Scheduled Time of Departure */
	wtd: string;
}
export interface OPOR extends _OPOR { constructor: { new(): OPOR }; }
export var OPOR: { new(): OPOR };

/** Defines a Passenger Origin Calling Point */
interface _OR extends BaseType {
	/** Current Activity Codes */
	act?: string;
	/** Cancelled */
	can?: boolean;
	/** TIPLOC of False Destination to be used at this location */
	fd?: string;
	/** Planned Activity Codes (if different to current activities) */
	planAct?: string;
	/** Public Scheduled Time of Arrival */
	pta?: string;
	/** Public Scheduled Time of Departure */
	ptd?: string;
	/** TIPLOC */
	tpl: string;
	/** Working Scheduled Time of Arrival */
	wta?: string;
	/** Working Scheduled Time of Departure */
	wtd: string;
}
export interface OR extends _OR { constructor: { new(): OR }; }
export var OR: { new(): OR };

/** Defines an Intermediate Passing Point */
interface _PP extends BaseType {
	/** Current Activity Codes */
	act?: string;
	/** Cancelled */
	can?: boolean;
	/** Planned Activity Codes (if different to current activities) */
	planAct?: string;
	/** A delay value that is implied by a change to the service's route. This value has been added to the forecast lateness of the service at the previous schedule location when calculating the expected lateness of passing this location. */
	rdelay?: number;
	/** TIPLOC */
	tpl: string;
	/** Working Scheduled Time of Passing */
	wtp: string;
}
export interface PP extends _PP { constructor: { new(): PP }; }
export var PP: { new(): PP };

/** Train Schedule */
interface _Schedule extends BaseType {
	/** Service has been deleted and should not be used/displayed. */
	deleted?: boolean;
	/** Indicates if this service is active in Darwin. Note that schedules should be assumed to be inactive until a message is received to indicate otherwise. */
	isActive?: boolean;
	/** Indicates if this service is a charter service. */
	isCharter?: boolean;
	/** True if Darwin classifies the train category as a passenger service. */
	isPassengerSvc?: boolean;
	/** RTTI unique Train ID */
	rid: string;
	/** Scheduled Start Date */
	ssd: Date;
	/** Type of service, i.e. Train/Bus/Ship. */
	status?: string;
	/** ATOC Code */
	toc: string;
	/** Category of service. */
	trainCat?: string;
	/** Train ID (Headcode) */
	trainId: string;
	/** Train UID */
	uid: string;
	cancelReason?: ct.DisruptionReasonType_2;
	DT: DT[];
	IP: IP[];
	OPDT: OPDT[];
	OPIP: OPIP[];
	OPOR: OPOR[];
	OR: OR[];
	PP: PP[];
}
export interface Schedule extends _Schedule { constructor: { new(): Schedule }; }
export var Schedule: { new(): Schedule };

export interface document extends BaseType {
}
export var document: document;
