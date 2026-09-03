import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dayOfWeekSchema, type DayOfWeek } from "./day-of-week.js";

export type BusinessHoursPeriod = {
  dayOfWeek?: DayOfWeek;
  startLocalTime?: string | null;
  endLocalTime?: string | null;
};

export const businessHoursPeriodSchema: Schema<BusinessHoursPeriod> = s.object<BusinessHoursPeriod>({
  dayOfWeek: s.optional(s.lazy(() => dayOfWeekSchema)),
  startLocalTime: s.optionalNullable(s.string()),
  endLocalTime: s.optionalNullable(s.string()),
  _keysMap: {
    dayOfWeek: "day_of_week",
    startLocalTime: "start_local_time",
    endLocalTime: "end_local_time",
  },
});
