import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { measurementUnitSchema, type MeasurementUnit } from "./measurement-unit.js";

export type CatalogMeasurementUnit = {
  measurementUnit?: MeasurementUnit;
  precision?: number | null;
};

export const catalogMeasurementUnitSchema: Schema<CatalogMeasurementUnit> = s.object<CatalogMeasurementUnit>({
  measurementUnit: s.optional(s.lazy(() => measurementUnitSchema)),
  precision: s.optionalNullable(s.number()),
  _keysMap: {
    measurementUnit: "measurement_unit",
  },
});
