import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dayOfWeekSchema, type DayOfWeek } from "./day-of-week.js";

/** Represents a period of time during which a business location is open. */
export type BusinessHoursPeriod = {
  /** Indicates the specific day of the week. */
  dayOfWeek?: DayOfWeek;
  /**
   * The start time of a business hours period, specified in local time using partial-time RFC 3339
   * format. For example, `8:30:00` for a period starting at 8:30 in the morning. Note that the
   * seconds value is always :00, but it is appended for conformance to the RFC.
   */
  startLocalTime?: string | null;
  /**
   * The end time of a business hours period, specified in local time using partial-time RFC 3339
   * format. For example, `21:00:00` for a period ending at 9:00 in the evening. Note that the
   * seconds value is always :00, but it is appended for conformance to the RFC.
   */
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
