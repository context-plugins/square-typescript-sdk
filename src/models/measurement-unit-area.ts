import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MeasurementUnitArea = {
  ImperialAcre: "IMPERIAL_ACRE",
  ImperialSquareInch: "IMPERIAL_SQUARE_INCH",
  ImperialSquareFoot: "IMPERIAL_SQUARE_FOOT",
  ImperialSquareYard: "IMPERIAL_SQUARE_YARD",
  ImperialSquareMile: "IMPERIAL_SQUARE_MILE",
  MetricSquareCentimeter: "METRIC_SQUARE_CENTIMETER",
  MetricSquareMeter: "METRIC_SQUARE_METER",
  MetricSquareKilometer: "METRIC_SQUARE_KILOMETER",
} as const;
export type MeasurementUnitArea =
  | (typeof MeasurementUnitArea)[keyof typeof MeasurementUnitArea]
  | (string & {});

export const measurementUnitAreaSchema: EnumSchema<MeasurementUnitArea> =
  s.enumOf<MeasurementUnitArea>(MeasurementUnitArea);
