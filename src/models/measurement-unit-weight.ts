import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Unit of weight used to measure a quantity. */
export const MeasurementUnitWeight = {
  /** The weight is measured in ounces. */
  ImperialWeightOunce: "IMPERIAL_WEIGHT_OUNCE",
  /** The weight is measured in pounds. */
  ImperialPound: "IMPERIAL_POUND",
  /** The weight is measured in stones. */
  ImperialStone: "IMPERIAL_STONE",
  /** The weight is measured in milligrams. */
  MetricMilligram: "METRIC_MILLIGRAM",
  /** The weight is measured in grams. */
  MetricGram: "METRIC_GRAM",
  /** The weight is measured in kilograms. */
  MetricKilogram: "METRIC_KILOGRAM",
} as const;
export type MeasurementUnitWeight =
  | (typeof MeasurementUnitWeight)[keyof typeof MeasurementUnitWeight]
  | (string & {});

export const measurementUnitWeightSchema: EnumSchema<MeasurementUnitWeight> =
  s.enumOf<MeasurementUnitWeight>(MeasurementUnitWeight);
