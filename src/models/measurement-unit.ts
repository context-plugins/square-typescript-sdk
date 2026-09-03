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

export type MeasurementUnit = {
  customUnit?: MeasurementUnitCustom;
  areaUnit?: MeasurementUnitArea;
  lengthUnit?: MeasurementUnitLength;
  volumeUnit?: MeasurementUnitVolume;
  weightUnit?: MeasurementUnitWeight;
  genericUnit?: MeasurementUnitGeneric;
  timeUnit?: MeasurementUnitTime;
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
