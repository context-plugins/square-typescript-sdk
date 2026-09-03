import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MeasurementUnitCustom = {
  name: string;
  abbreviation: string;
};

export const measurementUnitCustomSchema: Schema<MeasurementUnitCustom> = s.object<MeasurementUnitCustom>({
  name: s.string(),
  abbreviation: s.string(),
});
