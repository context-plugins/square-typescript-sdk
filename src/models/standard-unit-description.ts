import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { measurementUnitSchema, type MeasurementUnit } from "./measurement-unit.js";

/** Contains the name and abbreviation for standard measurement unit. */
export type StandardUnitDescription = {
  /**
   * Represents a unit of measurement to use with a quantity, such as ounces or inches. Exactly one
   * of the following fields are required: `custom_unit`, `area_unit`, `length_unit`, `volume_unit`,
   * and `weight_unit`.
   */
  unit?: MeasurementUnit;
  /** UI display name of the measurement unit. For example, 'Pound'. */
  name?: string | null;
  /** UI display abbreviation for the measurement unit. For example, 'lb'. */
  abbreviation?: string | null;
};

export const standardUnitDescriptionSchema: Schema<StandardUnitDescription> =
  s.object<StandardUnitDescription>({
    unit: s.optional(s.lazy(() => measurementUnitSchema)),
    name: s.optionalNullable(s.string()),
    abbreviation: s.optionalNullable(s.string()),
  });
