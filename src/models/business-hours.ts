import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { businessHoursPeriodSchema, type BusinessHoursPeriod } from "./business-hours-period.js";

export type BusinessHours = {
  periods?: BusinessHoursPeriod[] | null;
};

export const businessHoursSchema: Schema<BusinessHours> = s.object<BusinessHours>({
  periods: s.optionalNullable(s.array(s.lazy(() => businessHoursPeriodSchema))),
});
