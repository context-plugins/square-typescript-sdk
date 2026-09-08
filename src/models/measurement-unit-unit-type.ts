import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Describes the type of this unit and indicates which field contains the unit information. This is
 * an ‘open’ enum.
 */
export const MeasurementUnitUnitType = {
  /** The unit details are contained in the custom_unit field. */
  TypeCustom: "TYPE_CUSTOM",
  /** The unit details are contained in the area_unit field. */
  TypeArea: "TYPE_AREA",
  /** The unit details are contained in the length_unit field. */
  TypeLength: "TYPE_LENGTH",
  /** The unit details are contained in the volume_unit field. */
  TypeVolume: "TYPE_VOLUME",
  /** The unit details are contained in the weight_unit field. */
  TypeWeight: "TYPE_WEIGHT",
  /** The unit details are contained in the generic_unit field. */
  TypeGeneric: "TYPE_GENERIC",
} as const;
export type MeasurementUnitUnitType =
  | (typeof MeasurementUnitUnitType)[keyof typeof MeasurementUnitUnitType]
  | (string & {});

export const measurementUnitUnitTypeSchema: EnumSchema<MeasurementUnitUnitType> =
  s.enumOf<MeasurementUnitUnitType>(MeasurementUnitUnitType);
