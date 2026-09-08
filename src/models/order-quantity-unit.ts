import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { measurementUnitSchema, type MeasurementUnit } from "./measurement-unit.js";

/**
 * Contains the measurement unit for a quantity and a precision that specifies the number of digits
 * after the decimal point for decimal quantities.
 */
export type OrderQuantityUnit = {
  /**
   * Represents a unit of measurement to use with a quantity, such as ounces or inches. Exactly one
   * of the following fields are required: `custom_unit`, `area_unit`, `length_unit`, `volume_unit`,
   * and `weight_unit`.
   */
  measurementUnit?: MeasurementUnit;
  /**
   * For non-integer quantities, represents the number of digits after the decimal point that are
   * recorded for this quantity.
   *
   * For example, a precision of 1 allows quantities such as `"1.0"` and `"1.1"`, but not `"1.01"`.
   *
   * Min: 0. Max: 5.
   */
  precision?: number | null;
  /**
   * The catalog object ID referencing the [CatalogMeasurementUnit](entity:CatalogMeasurementUnit).
   *
   * This field is set when this is a catalog-backed measurement unit.
   */
  catalogObjectId?: string | null;
  /**
   * The version of the catalog object that this measurement unit references.
   *
   * This field is set when this is a catalog-backed measurement unit.
   */
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
