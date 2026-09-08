import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessHoursPeriodSchema, type BusinessHoursPeriod } from "./business-hours-period.js";

/** The hours of operation for a location. */
export type BusinessHours = {
  /**
   * The list of time periods during which the business is open. There can be at most 10 periods per
   * day.
   */
  periods?: BusinessHoursPeriod[] | null;
};

export const businessHoursSchema: Schema<BusinessHours> = s.object<BusinessHours>({
  periods: s.optionalNullable(s.array(s.lazy(() => businessHoursPeriodSchema))),
});
