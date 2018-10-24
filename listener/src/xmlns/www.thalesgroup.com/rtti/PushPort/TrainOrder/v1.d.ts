import * as ct from '../CommonTypes/v1';

// Source files:
// http://localhost:8080/rttiPPTTrainOrder_v1.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
/** Defines the expected Train order at a platform */
interface _TrainOrder extends BaseType {
	/** The CRS code of the station where the train order applies */
	crs: string;
	/** The platform number where the train order applies */
	platform: string;
	/** The tiploc where the train order applies */
	tiploc: string;
	set: TrainOrderData;
}
export interface TrainOrder extends _TrainOrder { constructor: { new(): TrainOrder }; }
export var TrainOrder: { new(): TrainOrder };

/** Defines the sequence of trains making up the train order */
interface _TrainOrderData extends BaseType {
	/** The first train in the train order. */
	first: TrainOrderItem;
	/** The second train in the train order. */
	second?: TrainOrderItem;
	/** The third train in the train order. */
	third?: TrainOrderItem;
}
export interface TrainOrderData extends _TrainOrderData { constructor: { new(): TrainOrderData }; }
export var TrainOrderData: { new(): TrainOrderData };

/** Describes the identifier of a train in the train order */
interface _TrainOrderItem extends BaseType {
	/** For trains in the train order where the train is the Darwin timetable, it will be identified by its RID */
	rid: TrainOrderItemRidType;
	/** Where a train in the train order is not in the Darwin timetable, a Train ID (headcode) will be supplied */
	trainID: string;
}
export interface TrainOrderItem extends _TrainOrderItem { constructor: { new(): TrainOrderItem }; }
export var TrainOrderItem: { new(): TrainOrderItem };

interface _TrainOrderItemRidType extends ct._RIDType_2 {
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
}
interface TrainOrderItemRidType extends _TrainOrderItemRidType { constructor: { new(): TrainOrderItemRidType }; }

export interface document extends BaseType {
}
export var document: document;
