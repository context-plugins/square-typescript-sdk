import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MeasurementUnitGeneric = {
  Unit: "UNIT",
} as const;
export type MeasurementUnitGeneric =
  | (typeof MeasurementUnitGeneric)[keyof typeof MeasurementUnitGeneric]
  | (string & {});

export const measurementUnitGenericSchema: EnumSchema<MeasurementUnitGeneric> =
  s.enumOf<MeasurementUnitGeneric>(MeasurementUnitGeneric);
