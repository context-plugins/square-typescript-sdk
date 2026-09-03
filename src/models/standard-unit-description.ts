import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { measurementUnitSchema, type MeasurementUnit } from "./measurement-unit.js";

export type StandardUnitDescription = {
  unit?: MeasurementUnit;
  name?: string | null;
  abbreviation?: string | null;
};

export const standardUnitDescriptionSchema: Schema<StandardUnitDescription> =
  s.object<StandardUnitDescription>({
    unit: s.optional(s.lazy(() => measurementUnitSchema)),
    name: s.optionalNullable(s.string()),
    abbreviation: s.optionalNullable(s.string()),
  });
