import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { measurementUnitAreaSchema, type MeasurementUnitArea } from "./measurement-unit-area.js";
import { measurementUnitCustomSchema, type MeasurementUnitCustom } from "./measurement-unit-custom.js";
import { measurementUnitGenericSchema, type MeasurementUnitGeneric } from "./measurement-unit-generic.js";
import { measurementUnitLengthSchema, type MeasurementUnitLength } from "./measurement-unit-length.js";
import { measurementUnitTimeSchema, type MeasurementUnitTime } from "./measurement-unit-time.js";
import { measurementUnitUnitTypeSchema, type MeasurementUnitUnitType } from "./measurement-unit-unit-type.js";
import { measurementUnitVolumeSchema, type MeasurementUnitVolume } from "./measurement-unit-volume.js";
import { measurementUnitWeightSchema, type MeasurementUnitWeight } from "./measurement-unit-weight.js";

/**
 * Represents a unit of measurement to use with a quantity, such as ounces or inches. Exactly one of
 * the following fields are required: `custom_unit`, `area_unit`, `length_unit`, `volume_unit`, and
 * `weight_unit`.
 */
export type MeasurementUnit = {
  /** The information needed to define a custom unit, provided by the seller. */
  customUnit?: MeasurementUnitCustom;
  /** Unit of area used to measure a quantity. */
  areaUnit?: MeasurementUnitArea;
  /** The unit of length used to measure a quantity. */
  lengthUnit?: MeasurementUnitLength;
  /** The unit of volume used to measure a quantity. */
  volumeUnit?: MeasurementUnitVolume;
  /** Unit of weight used to measure a quantity. */
  weightUnit?: MeasurementUnitWeight;
  genericUnit?: MeasurementUnitGeneric;
  /** Unit of time used to measure a quantity (a duration). */
  timeUnit?: MeasurementUnitTime;
  /**
   * Describes the type of this unit and indicates which field contains the unit information. This
   * is an ‘open’ enum.
   */
  type?: MeasurementUnitUnitType;
};

export const measurementUnitSchema: Schema<MeasurementUnit> = s.object<MeasurementUnit>({
  customUnit: s.optional(s.lazy(() => measurementUnitCustomSchema)),
  areaUnit: s.optional(s.lazy(() => measurementUnitAreaSchema)),
  lengthUnit: s.optional(s.lazy(() => measurementUnitLengthSchema)),
  volumeUnit: s.optional(s.lazy(() => measurementUnitVolumeSchema)),
  weightUnit: s.optional(s.lazy(() => measurementUnitWeightSchema)),
  genericUnit: s.optional(s.lazy(() => measurementUnitGenericSchema)),
  timeUnit: s.optional(s.lazy(() => measurementUnitTimeSchema)),
  type: s.optional(s.lazy(() => measurementUnitUnitTypeSchema)),
  _keysMap: {
    customUnit: "custom_unit",
    areaUnit: "area_unit",
    lengthUnit: "length_unit",
    volumeUnit: "volume_unit",
    weightUnit: "weight_unit",
    genericUnit: "generic_unit",
    timeUnit: "time_unit",
  },
});
