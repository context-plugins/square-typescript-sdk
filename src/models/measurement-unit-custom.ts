import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The information needed to define a custom unit, provided by the seller. */
export type MeasurementUnitCustom = {
  /** The name of the custom unit, for example "bushel". */
  name: string;
  /**
   * The abbreviation of the custom unit, such as "bsh" (bushel). This appears in the cart for the
   * Point of Sale app, and in reports.
   */
  abbreviation: string;
};

export const measurementUnitCustomSchema: Schema<MeasurementUnitCustom> = s.object<MeasurementUnitCustom>({
  name: s.string(),
  abbreviation: s.string(),
});
