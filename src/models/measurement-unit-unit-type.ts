import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MeasurementUnitUnitType = {
  TypeCustom: "TYPE_CUSTOM",
  TypeArea: "TYPE_AREA",
  TypeLength: "TYPE_LENGTH",
  TypeVolume: "TYPE_VOLUME",
  TypeWeight: "TYPE_WEIGHT",
  TypeGeneric: "TYPE_GENERIC",
} as const;
export type MeasurementUnitUnitType =
  | (typeof MeasurementUnitUnitType)[keyof typeof MeasurementUnitUnitType]
  | (string & {});

export const measurementUnitUnitTypeSchema: EnumSchema<MeasurementUnitUnitType> =
  s.enumOf<MeasurementUnitUnitType>(MeasurementUnitUnitType);
