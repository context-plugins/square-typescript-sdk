import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { measurementUnitSchema, type MeasurementUnit } from "./measurement-unit.js";

export type OrderQuantityUnit = {
  measurementUnit?: MeasurementUnit;
  precision?: number | null;
  catalogObjectId?: string | null;
  catalogVersion?: number | null;
};

export const orderQuantityUnitSchema: Schema<OrderQuantityUnit> = s.object<OrderQuantityUnit>({
  measurementUnit: s.optional(s.lazy(() => measurementUnitSchema)),
  precision: s.optionalNullable(s.number()),
  catalogObjectId: s.optionalNullable(s.string()),
  catalogVersion: s.optionalNullable(s.number()),
  _keysMap: {
    measurementUnit: "measurement_unit",
    catalogObjectId: "catalog_object_id",
    catalogVersion: "catalog_version",
  },
});
