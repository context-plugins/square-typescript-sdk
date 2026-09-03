import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dayOfWeekSchema, type DayOfWeek } from "./day-of-week.js";

export type CatalogAvailabilityPeriod = {
  startLocalTime?: string | null;
  endLocalTime?: string | null;
  dayOfWeek?: DayOfWeek;
};

export const catalogAvailabilityPeriodSchema: Schema<CatalogAvailabilityPeriod> =
  s.object<CatalogAvailabilityPeriod>({
    startLocalTime: s.optionalNullable(s.string()),
    endLocalTime: s.optionalNullable(s.string()),
    dayOfWeek: s.optional(s.lazy(() => dayOfWeekSchema)),
    _keysMap: {
      startLocalTime: "start_local_time",
      endLocalTime: "end_local_time",
      dayOfWeek: "day_of_week",
    },
  });
