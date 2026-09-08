import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The unit of volume used to measure a quantity. */
export const MeasurementUnitVolume = {
  /** The volume is measured in ounces. */
  GenericFluidOunce: "GENERIC_FLUID_OUNCE",
  /** The volume is measured in shots. */
  GenericShot: "GENERIC_SHOT",
  /** The volume is measured in cups. */
  GenericCup: "GENERIC_CUP",
  /** The volume is measured in pints. */
  GenericPint: "GENERIC_PINT",
  /** The volume is measured in quarts. */
  GenericQuart: "GENERIC_QUART",
  /** The volume is measured in gallons. */
  GenericGallon: "GENERIC_GALLON",
  /** The volume is measured in cubic inches. */
  ImperialCubicInch: "IMPERIAL_CUBIC_INCH",
  /** The volume is measured in cubic feet. */
  ImperialCubicFoot: "IMPERIAL_CUBIC_FOOT",
  /** The volume is measured in cubic yards. */
  ImperialCubicYard: "IMPERIAL_CUBIC_YARD",
  /** The volume is measured in metric milliliters. */
  MetricMilliliter: "METRIC_MILLILITER",
  /** The volume is measured in metric liters. */
  MetricLiter: "METRIC_LITER",
} as const;
export type MeasurementUnitVolume =
  | (typeof MeasurementUnitVolume)[keyof typeof MeasurementUnitVolume]
  | (string & {});

export const measurementUnitVolumeSchema: EnumSchema<MeasurementUnitVolume> =
  s.enumOf<MeasurementUnitVolume>(MeasurementUnitVolume);
