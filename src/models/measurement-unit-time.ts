import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Unit of time used to measure a quantity (a duration). */
export const MeasurementUnitTime = {
  /** The time is measured in milliseconds. */
  GenericMillisecond: "GENERIC_MILLISECOND",
  /** The time is measured in seconds. */
  GenericSecond: "GENERIC_SECOND",
  /** The time is measured in minutes. */
  GenericMinute: "GENERIC_MINUTE",
  /** The time is measured in hours. */
  GenericHour: "GENERIC_HOUR",
  /** The time is measured in days. */
  GenericDay: "GENERIC_DAY",
} as const;
export type MeasurementUnitTime =
  | (typeof MeasurementUnitTime)[keyof typeof MeasurementUnitTime]
  | (string & {});

export const measurementUnitTimeSchema: EnumSchema<MeasurementUnitTime> =
  s.enumOf<MeasurementUnitTime>(MeasurementUnitTime);
