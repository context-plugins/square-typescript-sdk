import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MeasurementUnitTime = {
  GenericMillisecond: "GENERIC_MILLISECOND",
  GenericSecond: "GENERIC_SECOND",
  GenericMinute: "GENERIC_MINUTE",
  GenericHour: "GENERIC_HOUR",
  GenericDay: "GENERIC_DAY",
} as const;
export type MeasurementUnitTime =
  | (typeof MeasurementUnitTime)[keyof typeof MeasurementUnitTime]
  | (string & {});

export const measurementUnitTimeSchema: EnumSchema<MeasurementUnitTime> =
  s.enumOf<MeasurementUnitTime>(MeasurementUnitTime);
