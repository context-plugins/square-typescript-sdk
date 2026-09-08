import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Unit of area used to measure a quantity. */
export const MeasurementUnitArea = {
  /** The area is measured in acres. */
  ImperialAcre: "IMPERIAL_ACRE",
  /** The area is measured in square inches. */
  ImperialSquareInch: "IMPERIAL_SQUARE_INCH",
  /** The area is measured in square feet. */
  ImperialSquareFoot: "IMPERIAL_SQUARE_FOOT",
  /** The area is measured in square yards. */
  ImperialSquareYard: "IMPERIAL_SQUARE_YARD",
  /** The area is measured in square miles. */
  ImperialSquareMile: "IMPERIAL_SQUARE_MILE",
  /** The area is measured in square centimeters. */
  MetricSquareCentimeter: "METRIC_SQUARE_CENTIMETER",
  /** The area is measured in square meters. */
  MetricSquareMeter: "METRIC_SQUARE_METER",
  /** The area is measured in square kilometers. */
  MetricSquareKilometer: "METRIC_SQUARE_KILOMETER",
} as const;
export type MeasurementUnitArea =
  | (typeof MeasurementUnitArea)[keyof typeof MeasurementUnitArea]
  | (string & {});

export const measurementUnitAreaSchema: EnumSchema<MeasurementUnitArea> =
  s.enumOf<MeasurementUnitArea>(MeasurementUnitArea);
