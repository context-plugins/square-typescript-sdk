import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MeasurementUnitWeight = {
  ImperialWeightOunce: "IMPERIAL_WEIGHT_OUNCE",
  ImperialPound: "IMPERIAL_POUND",
  ImperialStone: "IMPERIAL_STONE",
  MetricMilligram: "METRIC_MILLIGRAM",
  MetricGram: "METRIC_GRAM",
  MetricKilogram: "METRIC_KILOGRAM",
} as const;
export type MeasurementUnitWeight =
  | (typeof MeasurementUnitWeight)[keyof typeof MeasurementUnitWeight]
  | (string & {});

export const measurementUnitWeightSchema: EnumSchema<MeasurementUnitWeight> =
  s.enumOf<MeasurementUnitWeight>(MeasurementUnitWeight);
