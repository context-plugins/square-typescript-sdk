import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The unit of length used to measure a quantity. */
export const MeasurementUnitLength = {
  /** The length is measured in inches. */
  ImperialInch: "IMPERIAL_INCH",
  /** The length is measured in feet. */
  ImperialFoot: "IMPERIAL_FOOT",
  /** The length is measured in yards. */
  ImperialYard: "IMPERIAL_YARD",
  /** The length is measured in miles. */
  ImperialMile: "IMPERIAL_MILE",
  /** The length is measured in millimeters. */
  MetricMillimeter: "METRIC_MILLIMETER",
  /** The length is measured in centimeters. */
  MetricCentimeter: "METRIC_CENTIMETER",
  /** The length is measured in meters. */
  MetricMeter: "METRIC_METER",
  /** The length is measured in kilometers. */
  MetricKilometer: "METRIC_KILOMETER",
} as const;
export type MeasurementUnitLength =
  | (typeof MeasurementUnitLength)[keyof typeof MeasurementUnitLength]
  | (string & {});

export const measurementUnitLengthSchema: EnumSchema<MeasurementUnitLength> =
  s.enumOf<MeasurementUnitLength>(MeasurementUnitLength);
