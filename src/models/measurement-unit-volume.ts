import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MeasurementUnitVolume = {
  GenericFluidOunce: "GENERIC_FLUID_OUNCE",
  GenericShot: "GENERIC_SHOT",
  GenericCup: "GENERIC_CUP",
  GenericPint: "GENERIC_PINT",
  GenericQuart: "GENERIC_QUART",
  GenericGallon: "GENERIC_GALLON",
  ImperialCubicInch: "IMPERIAL_CUBIC_INCH",
  ImperialCubicFoot: "IMPERIAL_CUBIC_FOOT",
  ImperialCubicYard: "IMPERIAL_CUBIC_YARD",
  MetricMilliliter: "METRIC_MILLILITER",
  MetricLiter: "METRIC_LITER",
} as const;
export type MeasurementUnitVolume =
  | (typeof MeasurementUnitVolume)[keyof typeof MeasurementUnitVolume]
  | (string & {});

export const measurementUnitVolumeSchema: EnumSchema<MeasurementUnitVolume> =
  s.enumOf<MeasurementUnitVolume>(MeasurementUnitVolume);
