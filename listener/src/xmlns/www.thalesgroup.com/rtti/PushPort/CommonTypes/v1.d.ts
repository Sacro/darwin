import * as Primitive from '../../../../xml-primitives';

// Source files:
// http://localhost:8080/rttiPPTCommonTypes_V1.xsd
// http://localhost:8080/rttiPPTCommonTypes_v1.xsd

interface BaseType {
  _exists: boolean;
  _namespace: string;
}
/** Activity Type (a set of 6 x 2 character strings).  Full details are provided in Common Interface File End User Specification. */
export type ActivityType = string;
type _ActivityType = Primitive._string;

/** Activity Type (a set of 6 x 2 character strings).  Full details are provided in Common Interface File End User Specification. */
export type ActivityType_2 = string;
type _ActivityType_2 = Primitive._string;

/** Defines the train category */
export type CIFTrainCategoryType = string;
type _CIFTrainCategoryType = Primitive._string;

/** Defines the train category */
export type CIFTrainCategoryType_2 = string;
type _CIFTrainCategoryType_2 = Primitive._string;

/** Defines the transport service type using CIF Train Status value */
export type CIFTrainStatusType = string;
type _CIFTrainStatusType = Primitive._string;

/** Defines the transport service type using CIF Train Status value */
export type CIFTrainStatusType_2 = string;
type _CIFTrainStatusType_2 = Primitive._string;

/** CRS Code Type */
export type CrsType = string;
type _CrsType = Primitive._string;

/** CRS Code Type */
export type CrsType_2 = string;
type _CrsType_2 = Primitive._string;

/** A DCIS client request identifier */
export type DCISRequestID = string;
type _DCISRequestID = Primitive._string;

/** A DCIS client request identifier */
export type DCISRequestID_2 = string;
type _DCISRequestID_2 = Primitive._string;

/** A signed delay value as a number of minutes */
export type DelayValueType = number;
type _DelayValueType = Primitive._number;

/** A signed delay value as a number of minutes */
export type DelayValueType_2 = number;
type _DelayValueType_2 = Primitive._number;

/** Type used to represent a cancellation or late running reason */
interface _DisruptionReasonType extends _ReasonCodeType {
  /** If true, the tiploc attribute should be interpreted as "near", e.g. "signalling failure near Cheadle Hulme". */
  near?: boolean;
  /** Optional TIPLOC where the reason refers to, e.g. "signalling failure at Cheadle Hulme". */
  tiploc?: string;
}
export interface DisruptionReasonType extends _DisruptionReasonType {
  constructor: { new (): DisruptionReasonType };
}
export var DisruptionReasonType: { new (): DisruptionReasonType };

/** Type used to represent a cancellation or late running reason */
interface _DisruptionReasonType_2 extends _ReasonCodeType {
  /** If true, the tiploc attribute should be interpreted as "near", e.g. "signalling failure near Cheadle Hulme". */
  near?: boolean;
  /** Optional TIPLOC where the reason refers to, e.g. "signalling failure at Cheadle Hulme". */
  tiploc?: string;
}
export interface DisruptionReasonType_2 extends _DisruptionReasonType_2 {
  constructor: { new (): DisruptionReasonType_2 };
}
export var DisruptionReasonType_2: { new (): DisruptionReasonType_2 };

/** Defines a platform number */
export type PlatformType = string;
type _PlatformType = Primitive._string;

/** Defines a platform number */
export type PlatformType_2 = string;
type _PlatformType_2 = Primitive._string;

/** A Darwin Reason Code */
export type ReasonCodeType = number;
type _ReasonCodeType = Primitive._number;

/** A Darwin Reason Code */
export type ReasonCodeType_2 = number;
type _ReasonCodeType_2 = Primitive._number;

/** RTTI Train ID Type */
export type RIDType = string;
type _RIDType = Primitive._string;

/** RTTI Train ID Type */
export type RIDType_2 = string;
type _RIDType_2 = Primitive._string;

/** RTTI DateTime Type (basic XML date/time) */
export type RTTIDateTimeType = Date;
type _RTTIDateTimeType = Primitive._Date;

/** RTTI DateTime Type (basic XML date/time) */
export type RTTIDateTimeType_2 = Date;
type _RTTIDateTimeType_2 = Primitive._Date;

/** RTTI Date Type (basic XML date) */
export type RTTIDateType = Date;
type _RTTIDateType = Primitive._Date;

/** RTTI Date Type (basic XML date) */
export type RTTIDateType_2 = Date;
type _RTTIDateType_2 = Primitive._Date;

/** Time as HH:MM */
export type RTTITimeType = string;
type _RTTITimeType = Primitive._string;

/** Time as HH:MM */
export type RTTITimeType_2 = string;
type _RTTITimeType_2 = Primitive._string;

/** Defines the ID for a snapshot file to be recovered via FTP */
export type SnapshotIDType = string;
type _SnapshotIDType = Primitive._string;

/** Defines the ID for a snapshot file to be recovered via FTP */
export type SnapshotIDType_2 = string;
type _SnapshotIDType_2 = Primitive._string;

/** RTTI CIS code, provided if forecast or actual source type is CIS */
export type SourceTypeInst = string;
type _SourceTypeInst = Primitive._string;

/** RTTI CIS code, provided if forecast or actual source type is CIS */
export type SourceTypeInst_2 = string;
type _SourceTypeInst_2 = Primitive._string;

/** Denotes the suffix for a TIPLOC that identifies the instance on a circular route */
export type SuffixType = string;
type _SuffixType = Primitive._string;

/** Denotes the suffix for a TIPLOC that identifies the instance on a circular route */
export type SuffixType_2 = string;
type _SuffixType_2 = Primitive._string;

/** A TD area identifier. */
export type TDAreaIDType = string;
type _TDAreaIDType = Primitive._string;

/** A TD area identifier. */
export type TDAreaIDType_2 = string;
type _TDAreaIDType_2 = Primitive._string;

/** A TD berth identifier. */
export type TDBerthIDType = string;
type _TDBerthIDType = Primitive._string;

/** A TD berth identifier. */
export type TDBerthIDType_2 = string;
type _TDBerthIDType_2 = Primitive._string;

/** The name of a timetable file that can be downloaded via FTP. */
export type TimetableFilenameType = string;
type _TimetableFilenameType = Primitive._string;

/** The name of a timetable file that can be downloaded via FTP. */
export type TimetableFilenameType_2 = string;
type _TimetableFilenameType_2 = Primitive._string;

/** Unique Timetable identifier */
export type TimetableIDType = string;
type _TimetableIDType = Primitive._string;

/** Unique Timetable identifier */
export type TimetableIDType_2 = string;
type _TimetableIDType_2 = Primitive._string;

/** Tiploc Type (This is the short version of a TIPLOC - without spaces) */
export type TiplocType = string;
type _TiplocType = Primitive._string;

/** Tiploc Type (This is the short version of a TIPLOC - without spaces) */
export type TiplocType_2 = string;
type _TiplocType_2 = Primitive._string;

/** ATOC Code Type */
export type TOCType = string;
type _TOCType = Primitive._string;

/** ATOC Code Type */
export type TOCType_2 = string;
type _TOCType_2 = Primitive._string;

/** Train ID or Head Code Type */
export type TrainIdType = string;
type _TrainIdType = Primitive._string;

/** Train ID or Head Code Type */
export type TrainIdType_2 = string;
type _TrainIdType_2 = Primitive._string;

/** Defines the length of a train */
export type TrainLengthType = number;
type _TrainLengthType = Primitive._number;

/** Defines the length of a train */
export type TrainLengthType_2 = number;
type _TrainLengthType_2 = Primitive._number;

/** Train UID Type */
export type UIDType = string;
type _UIDType = Primitive._string;

/** Train UID Type */
export type UIDType_2 = string;
type _UIDType_2 = Primitive._string;

/** Working scheduled time as HH:MM[:SS] */
export type WTimeType = string;
type _WTimeType = Primitive._string;

/** Working scheduled time as HH:MM[:SS] */
export type WTimeType_2 = string;
type _WTimeType_2 = Primitive._string;

export interface document extends BaseType {}
export var document: document;
